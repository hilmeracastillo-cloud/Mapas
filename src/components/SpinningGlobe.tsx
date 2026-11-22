import React, { useEffect, useRef } from 'react';
import { fetchContinentsGeoJson } from '../services/geoJsonService';

interface ProjectedRing {
  continentId: string;
  pts: Array<[number, number]>; // [lonRad, latRad]
}

interface CloudPatch {
  lon: number;
  lat: number;
  rx: number;
  ry: number;
  alpha: number;
}

const DEG2RAD = Math.PI / 180;

// Procedural soft cloud wisps that drift slightly faster than the planet surface
const CLOUD_PATCHES: CloudPatch[] = [
  { lon: -1.8, lat: 0.48, rx: 0.28, ry: 0.08, alpha: 0.22 },
  { lon: -0.9, lat: -0.32, rx: 0.34, ry: 0.09, alpha: 0.2 },
  { lon: 0.3, lat: 0.65, rx: 0.3, ry: 0.075, alpha: 0.24 },
  { lon: 1.15, lat: 0.12, rx: 0.36, ry: 0.085, alpha: 0.22 },
  { lon: 2.2, lat: -0.48, rx: 0.32, ry: 0.08, alpha: 0.2 },
  { lon: 2.95, lat: 0.38, rx: 0.26, ry: 0.075, alpha: 0.22 },
  { lon: -2.6, lat: -0.18, rx: 0.3, ry: 0.08, alpha: 0.2 },
  { lon: 0.6, lat: -0.62, rx: 0.28, ry: 0.07, alpha: 0.18 },
];

function ringAreaDeg(ring: number[][]): number {
  let a = 0;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    a += (ring[j][0] + ring[i][0]) * (ring[j][1] - ring[i][1]);
  }
  return Math.abs(a) / 2;
}

function decimateRing(ring: number[][], minStepDeg = 0.9): Array<[number, number]> {
  const out: Array<[number, number]> = [];
  let prevX = Infinity;
  let prevY = Infinity;
  for (let i = 0; i < ring.length; i++) {
    const [x, y] = ring[i];
    if (
      i === 0 ||
      i === ring.length - 1 ||
      Math.abs(x - prevX) >= minStepDeg ||
      Math.abs(y - prevY) >= minStepDeg
    ) {
      out.push([x * DEG2RAD, y * DEG2RAD]);
      prevX = x;
      prevY = y;
    }
  }
  return out;
}

interface SpinningGlobeProps {
  className?: string;
}

export const SpinningGlobe: React.FC<SpinningGlobeProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ringsRef = useRef<ProjectedRing[]>([]);
  const draggingRef = useRef<{ active: boolean; lastX: number; velocity: number }>({
    active: false,
    lastX: 0,
    velocity: 0,
  });

  // Load local dissolved continents once and prepare fast decimated rings
  useEffect(() => {
    let mounted = true;
    fetchContinentsGeoJson()
      .then((data) => {
        if (!mounted || !data?.features) return;
        const prepared: ProjectedRing[] = [];
        for (const feature of data.features) {
          const id = String(feature?.properties?.id || '');
          const geom = feature?.geometry;
          if (!geom) continue;
          const polys: number[][][][] =
            geom.type === 'Polygon'
              ? [geom.coordinates]
              : geom.type === 'MultiPolygon'
              ? geom.coordinates
              : [];

          for (const poly of polys) {
            const outer = poly[0];
            if (!outer || outer.length < 4) continue;
            // Skip tiny specks for ultra-smooth 60fps mobile rendering while keeping all recognizable islands
            if (ringAreaDeg(outer) < 0.08) continue;
            const pts = decimateRing(outer, id === 'Antarctica' ? 1.4 : 0.85);
            if (pts.length >= 3) {
              prepared.push({ continentId: id, pts });
            }
          }
        }
        ringsRef.current = prepared;
      })
      .catch(() => {
        // fail gracefully; globe ocean + graticule still render cleanly
      });

    return () => {
      mounted = false;
    };
  }, []);

  // Permanent 60fps 3D orthographic rotation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;
    let lastTime = performance.now();
    // Start focused around the Atlantic / Americas / Europe so rich landmasses show immediately
    let rotLon = -0.55;
    let cloudOffset = 0;
    const tiltLat = 16 * DEG2RAD;
    const sinTilt = Math.sin(tiltLat);
    const cosTilt = Math.cos(tiltLat);
    const baseSpinSpeed = 0.28; // rad/sec (~16 deg/sec — lively, smooth permanent rotation)

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(120, Math.round(rect.width * dpr));
      const h = Math.max(120, Math.round(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    resize();
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null;
    ro?.observe(canvas);

    const drawRingOnSphere = (
      pts: Array<[number, number]>,
      cx: number,
      cy: number,
      R: number,
      lon0: number
    ): boolean => {
      const n = pts.length;
      if (n < 3) return false;

      // Project vertices to 3D orthographic unit sphere
      let firstVisibleIdx = -1;
      let allVisible = true;
      const projX = new Float32Array(n);
      const projY = new Float32Array(n);
      const projZ = new Float32Array(n);

      for (let i = 0; i < n; i++) {
        const lon = pts[i][0];
        const lat = pts[i][1];
        const dLon = lon - lon0;
        const cosLat = Math.cos(lat);
        const sinLat = Math.sin(lat);
        const cosDLon = Math.cos(dLon);
        const x = cosLat * Math.sin(dLon);
        const y = cosTilt * sinLat - sinTilt * cosLat * cosDLon;
        const z = sinTilt * sinLat + cosTilt * cosLat * cosDLon;
        projX[i] = x;
        projY[i] = y;
        projZ[i] = z;
        if (z >= 0) {
          if (firstVisibleIdx === -1) firstVisibleIdx = i;
        } else {
          allVisible = false;
        }
      }

      if (firstVisibleIdx === -1) return false;

      ctx.beginPath();

      // Fast path: entire ring lies on the visible front hemisphere
      if (allVisible) {
        for (let i = 0; i < n; i++) {
          const px = cx + projX[i] * R;
          const py = cy - projY[i] * R;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        return true;
      }

      // Exact z = 0 horizon clipping: walk ring starting at a visible vertex
      let started = false;
      let inBack = false;
      let exitScreenAng = 0;

      for (let step = 0; step <= n; step++) {
        const prevIdx = (firstVisibleIdx + step) % n;
        const nextIdx = (firstVisibleIdx + step + 1) % n;

        const ax = projX[prevIdx];
        const ay = projY[prevIdx];
        const az = projZ[prevIdx];

        const bx = projX[nextIdx];
        const by = projY[nextIdx];
        const bz = projZ[nextIdx];

        if (!started && az >= 0) {
          ctx.moveTo(cx + ax * R, cy - ay * R);
          started = true;
        }

        if (az >= 0 && bz >= 0) {
          ctx.lineTo(cx + bx * R, cy - by * R);
        } else if (az >= 0 && bz < 0) {
          // Crossing front -> back at z = 0
          const t = az / (az - bz);
          let hx = ax + (bx - ax) * t;
          let hy = ay + (by - ay) * t;
          const len = Math.hypot(hx, hy) || 1;
          hx /= len;
          hy /= len;
          ctx.lineTo(cx + hx * R, cy - hy * R);
          exitScreenAng = Math.atan2(-hy, hx);
          inBack = true;
        } else if (az < 0 && bz >= 0) {
          // Crossing back -> front at z = 0
          const t = az / (az - bz);
          let hx = ax + (bx - ax) * t;
          let hy = ay + (by - ay) * t;
          const len = Math.hypot(hx, hy) || 1;
          hx /= len;
          hy /= len;
          const entryScreenAng = Math.atan2(-hy, hx);

          if (inBack) {
            const dAng = Math.atan2(
              Math.sin(entryScreenAng - exitScreenAng),
              Math.cos(entryScreenAng - exitScreenAng)
            );
            ctx.arc(cx, cy, R, exitScreenAng, exitScreenAng + dAng, dAng < 0);
            inBack = false;
          } else {
            ctx.lineTo(cx + hx * R, cy - hy * R);
          }
          ctx.lineTo(cx + bx * R, cy - by * R);
        }
      }

      ctx.closePath();
      return true;
    };

    const render = (now: number) => {
      const dt = Math.min(0.05, Math.max(0, (now - lastTime) / 1000));
      lastTime = now;

      // Continuous permanent rotation + smooth decay of user drag momentum
      if (!draggingRef.current.active) {
        rotLon += (baseSpinSpeed + draggingRef.current.velocity) * dt;
        draggingRef.current.velocity *= Math.pow(0.08, dt);
        if (Math.abs(draggingRef.current.velocity) < 0.005) {
          draggingRef.current.velocity = 0;
        }
      }
      cloudOffset += 0.075 * dt;

      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const R = Math.min(w, h) * 0.43;

      ctx.clearRect(0, 0, w, h);

      // 1. Outer Atmospheric Halo Glow
      const haloGrad = ctx.createRadialGradient(cx, cy, R * 0.88, cx, cy, R * 1.18);
      haloGrad.addColorStop(0, 'rgba(56, 189, 248, 0.48)');
      haloGrad.addColorStop(0.45, 'rgba(14, 165, 233, 0.22)');
      haloGrad.addColorStop(1, 'rgba(14, 165, 233, 0)');
      ctx.fillStyle = haloGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.18, 0, Math.PI * 2);
      ctx.fill();

      // Clip all planet surface details strictly inside the sphere
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.clip();

      // 2. Luminous 3D Shaded Ocean Sphere
      const oceanGrad = ctx.createRadialGradient(
        cx - R * 0.34,
        cy - R * 0.34,
        R * 0.08,
        cx + R * 0.12,
        cy + R * 0.15,
        R * 1.25
      );
      oceanGrad.addColorStop(0, '#38bdf8');
      oceanGrad.addColorStop(0.32, '#0284c7');
      oceanGrad.addColorStop(0.72, '#0369a1');
      oceanGrad.addColorStop(1, '#082f49');
      ctx.fillStyle = oceanGrad;
      ctx.fillRect(cx - R, cy - R, R * 2, R * 2);

      // 3. Rotating Graticule (Parallels & Meridians for unmistakable 3D spin)
      ctx.lineWidth = Math.max(1, R * 0.0045);
      ctx.strokeStyle = 'rgba(186, 230, 253, 0.17)';

      // Latitude parallels (-60, -30, 0, 30, 60)
      for (const latDeg of [-60, -30, 0, 30, 60]) {
        const lat = latDeg * DEG2RAD;
        const sinLat = Math.sin(lat);
        const cosLat = Math.cos(lat);
        ctx.beginPath();
        let penDown = false;
        for (let step = 0; step <= 72; step++) {
          const dLon = (step / 72) * Math.PI * 2;
          const x = cosLat * Math.sin(dLon);
          const y = cosTilt * sinLat - sinTilt * cosLat * Math.cos(dLon);
          const z = sinTilt * sinLat + cosTilt * cosLat * Math.cos(dLon);
          if (z >= 0) {
            const px = cx + x * R;
            const py = cy - y * R;
            if (!penDown) {
              ctx.moveTo(px, py);
              penDown = true;
            } else {
              ctx.lineTo(px, py);
            }
          } else {
            penDown = false;
          }
        }
        ctx.strokeStyle = latDeg === 0 ? 'rgba(253, 224, 71, 0.28)' : 'rgba(186, 230, 253, 0.16)';
        ctx.stroke();
      }

      // Rotating longitude meridians (every 30 deg)
      ctx.strokeStyle = 'rgba(186, 230, 253, 0.16)';
      for (let lonDeg = -180; lonDeg < 180; lonDeg += 30) {
        const dLon = lonDeg * DEG2RAD - rotLon;
        const sinDLon = Math.sin(dLon);
        const cosDLon = Math.cos(dLon);
        ctx.beginPath();
        let penDown = false;
        for (let step = -18; step <= 18; step++) {
          const lat = (step / 18) * (Math.PI / 2);
          const cosLat = Math.cos(lat);
          const sinLat = Math.sin(lat);
          const x = cosLat * sinDLon;
          const y = cosTilt * sinLat - sinTilt * cosLat * cosDLon;
          const z = sinTilt * sinLat + cosTilt * cosLat * cosDLon;
          if (z >= 0) {
            const px = cx + x * R;
            const py = cy - y * R;
            if (!penDown) {
              ctx.moveTo(px, py);
              penDown = true;
            } else {
              ctx.lineTo(px, py);
            }
          } else {
            penDown = false;
          }
        }
        ctx.stroke();
      }

      // 4. Vibrant 3D-Shaded Real Continents
      const landGrad = ctx.createRadialGradient(
        cx - R * 0.35,
        cy - R * 0.35,
        R * 0.05,
        cx + R * 0.2,
        cy + R * 0.25,
        R * 1.2
      );
      landGrad.addColorStop(0, '#4ade80');
      landGrad.addColorStop(0.42, '#22c55e');
      landGrad.addColorStop(0.78, '#15803d');
      landGrad.addColorStop(1, '#14532d');

      const iceGrad = ctx.createRadialGradient(
        cx - R * 0.25,
        cy - R * 0.25,
        R * 0.05,
        cx,
        cy + R * 0.5,
        R * 1.1
      );
      iceGrad.addColorStop(0, '#f8fafc');
      iceGrad.addColorStop(0.65, '#e0f2fe');
      iceGrad.addColorStop(1, '#93c5fd');

      const rings = ringsRef.current;
      ctx.lineWidth = Math.max(0.9, R * 0.006);
      for (let i = 0; i < rings.length; i++) {
        const ring = rings[i];
        if (!drawRingOnSphere(ring.pts, cx, cy, R, rotLon)) continue;
        if (ring.continentId === 'Antarctica') {
          ctx.fillStyle = iceGrad;
          ctx.strokeStyle = 'rgba(224, 242, 254, 0.85)';
        } else {
          ctx.fillStyle = landGrad;
          ctx.strokeStyle = 'rgba(187, 247, 208, 0.72)';
        }
        ctx.fill();
        ctx.stroke();
      }

      // 5. Soft Drifting Cloud Wisps (rotating slightly faster than the surface)
      for (const c of CLOUD_PATCHES) {
        const dLon = c.lon - (rotLon + cloudOffset);
        const cosLat = Math.cos(c.lat);
        const sinLat = Math.sin(c.lat);
        const cosDLon = Math.cos(dLon);
        const x = cosLat * Math.sin(dLon);
        const y = cosTilt * sinLat - sinTilt * cosLat * cosDLon;
        const z = sinTilt * sinLat + cosTilt * cosLat * cosDLon;
        if (z <= 0.08) continue;

        const px = cx + x * R;
        const py = cy - y * R;
        const squash = Math.max(0.25, z);
        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(-x * 0.28);
        ctx.fillStyle = `rgba(255, 255, 255, ${(c.alpha * Math.min(1, z * 1.4)).toFixed(3)})`;
        ctx.beginPath();
        ctx.ellipse(0, 0, c.rx * R * squash, c.ry * R, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 6. 3D Terminator Shadow + Atmospheric Fresnel Rim + Sunlit Specular Sheen
      const shadeGrad = ctx.createRadialGradient(
        cx - R * 0.32,
        cy - R * 0.32,
        R * 0.55,
        cx,
        cy,
        R * 1.04
      );
      shadeGrad.addColorStop(0, 'rgba(255, 255, 255, 0.08)');
      shadeGrad.addColorStop(0.65, 'rgba(2, 6, 23, 0)');
      shadeGrad.addColorStop(0.88, 'rgba(2, 6, 23, 0.24)');
      shadeGrad.addColorStop(1, 'rgba(2, 6, 23, 0.58)');
      ctx.fillStyle = shadeGrad;
      ctx.fillRect(cx - R, cy - R, R * 2, R * 2);

      // Sunlit specular highlight
      const specGrad = ctx.createRadialGradient(
        cx - R * 0.36,
        cy - R * 0.36,
        0,
        cx - R * 0.36,
        cy - R * 0.36,
        R * 0.45
      );
      specGrad.addColorStop(0, 'rgba(255, 255, 255, 0.32)');
      specGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.08)');
      specGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = specGrad;
      ctx.fillRect(cx - R, cy - R, R * 2, R * 2);

      // Bright atmospheric inner rim
      ctx.strokeStyle = 'rgba(125, 211, 252, 0.65)';
      ctx.lineWidth = Math.max(2, R * 0.022);
      ctx.beginPath();
      ctx.arc(cx, cy, R - ctx.lineWidth * 0.3, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();

      rafId = window.requestAnimationFrame(render);
    };

    rafId = window.requestAnimationFrame(render);

    // Optional interactive spin boost when dragging the globe
    const onPointerDown = (e: PointerEvent) => {
      draggingRef.current.active = true;
      draggingRef.current.lastX = e.clientX;
      draggingRef.current.velocity = 0;
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!draggingRef.current.active) return;
      const dx = e.clientX - draggingRef.current.lastX;
      draggingRef.current.lastX = e.clientX;
      const deltaRad = -(dx / Math.max(120, canvas.clientWidth)) * 2.8;
      rotLon += deltaRad;
      draggingRef.current.velocity = Math.max(-3.5, Math.min(3.5, deltaRad * 22));
    };
    const onPointerUp = () => {
      draggingRef.current.active = false;
    };

    canvas.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);

    return () => {
      window.cancelAnimationFrame(rafId);
      ro?.disconnect();
      canvas.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-label="Globo terráqueo girando"
      className={`cursor-grab active:cursor-grabbing touch-none ${className}`}
    />
  );
};
