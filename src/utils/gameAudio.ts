// Real Symphonic Orchestra Intro Music Engine (/audio/intro-orchestra.mp3 — Holst: The Planets, Jupiter, US Air Force Band, Public Domain)
// + subtle orchestral UI sound effects (harp & chime cues).

let audioCtx: AudioContext | null = null;

function getAudioContext(autoResume = true): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return null;
    try {
      audioCtx = new AudioCtx();
    } catch {
      return null;
    }
  }
  if (autoResume && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

// ============================================================================
// SUBTLE ORCHESTRAL UI SOUND EFFECTS (Concert Harp Cues)
// ============================================================================

export function playHoverSound(enabled: boolean): void {
  if (!enabled) return;
  const ctx = getAudioContext();
  if (!ctx || ctx.state !== 'running') return;
  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(466.16, now);
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.frequency.exponentialRampToValueAtTime(420, now + 0.08);
    gain.gain.setValueAtTime(0.028, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.085);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.09);
  } catch {
    // ignore audio errors
  }
}

export function playSelectSound(enabled: boolean): void {
  if (!enabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const now = ctx.currentTime;
    const notes = [466.16, 698.46, 932.33];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      const start = now + idx * 0.045;
      osc.frequency.setValueAtTime(freq, start);
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2200, start);
      filter.frequency.exponentialRampToValueAtTime(600, start + 0.24);
      gain.gain.setValueAtTime(0.042, start);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.26);
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + 0.28);
    });
  } catch {
    // ignore audio errors
  }
}

export function playBackSound(enabled: boolean): void {
  if (!enabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const now = ctx.currentTime;
    const notes = [349.23, 233.08];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      const start = now + idx * 0.05;
      osc.frequency.setValueAtTime(freq, start);
      gain.gain.setValueAtTime(0.036, start);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.14);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + 0.15);
    });
  } catch {
    // ignore audio errors
  }
}

// ============================================================================
// REAL SYMPHONIC ORCHESTRA INTRO AUDIO ENGINE
// ============================================================================

const INTRO_TRACK_URL = '/audio/intro-orchestra.mp3';
const TARGET_VOLUME = 0.62;

let introAudio: HTMLAudioElement | null = null;
let fadeTimer: number | null = null;
let isMusicWanted = false;
let isMusicPlaying = false;
const statusListeners = new Set<(playing: boolean) => void>();

function notifyStatus(): void {
  statusListeners.forEach((fn) => fn(isMusicPlaying));
}

function clearFade(): void {
  if (fadeTimer !== null) {
    window.clearInterval(fadeTimer);
    fadeTimer = null;
  }
}

function getIntroAudio(): HTMLAudioElement | null {
  if (typeof window === 'undefined') return null;
  if (!introAudio) {
    const audio = new Audio(INTRO_TRACK_URL);
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = 0;

    audio.addEventListener('playing', () => {
      if (!isMusicWanted) {
        audio.pause();
        audio.currentTime = 0;
        isMusicPlaying = false;
        notifyStatus();
        return;
      }
      isMusicPlaying = true;
      notifyStatus();
    });

    audio.addEventListener('pause', () => {
      isMusicPlaying = false;
      notifyStatus();
    });

    audio.addEventListener('ended', () => {
      isMusicPlaying = false;
      notifyStatus();
    });

    introAudio = audio;
  }
  return introAudio;
}

function fadeVolumeTo(audio: HTMLAudioElement, target: number, durationMs: number, onDone?: () => void): void {
  clearFade();
  const startVol = audio.volume;
  const startTime = performance.now();
  if (durationMs <= 16) {
    audio.volume = Math.max(0, Math.min(1, target));
    onDone?.();
    return;
  }

  fadeTimer = window.setInterval(() => {
    const elapsed = performance.now() - startTime;
    const progress = Math.min(1, elapsed / durationMs);
    const nextVol = startVol + (target - startVol) * progress;
    audio.volume = Math.max(0, Math.min(1, nextVol));
    if (progress >= 1) {
      clearFade();
      onDone?.();
    }
  }, 20);
}

function attemptPlayIntro(): void {
  const audio = getIntroAudio();
  if (!audio || !isMusicWanted) return;

  clearFade();

  if (!audio.paused) {
    fadeVolumeTo(audio, TARGET_VOLUME, 350);
    isMusicPlaying = true;
    notifyStatus();
    return;
  }

  audio.volume = 0.05;
  const playPromise = audio.play();
  if (playPromise && typeof playPromise.then === 'function') {
    playPromise
      .then(() => {
        if (!isMusicWanted) {
          audio.pause();
          audio.currentTime = 0;
          isMusicPlaying = false;
          notifyStatus();
          return;
        }
        isMusicPlaying = true;
        notifyStatus();
        fadeVolumeTo(audio, TARGET_VOLUME, 450);
      })
      .catch(() => {
        // Browser autoplay policy requires first user gesture; unlockMenuMusic() will start it
        isMusicPlaying = false;
        notifyStatus();
      });
  } else {
    isMusicPlaying = true;
    notifyStatus();
    fadeVolumeTo(audio, TARGET_VOLUME, 450);
  }
}

export function startMenuMusic(): void {
  isMusicWanted = true;
  attemptPlayIntro();
}

export function unlockMenuMusic(): void {
  if (!isMusicWanted) return;
  attemptPlayIntro();
}

export function stopMenuMusic(): void {
  isMusicWanted = false;
  isMusicPlaying = false;
  notifyStatus();

  if (!introAudio) return;
  const audio = introAudio;
  if (audio.paused) {
    clearFade();
    audio.currentTime = 0;
    audio.volume = 0;
    return;
  }

  // Smooth swift fade-out so the orchestra stops cleanly right when an option is selected
  fadeVolumeTo(audio, 0, 220, () => {
    if (!isMusicWanted) {
      audio.pause();
      audio.currentTime = 0;
    }
  });
}

export function isMenuMusicPlaying(): boolean {
  return isMusicPlaying;
}

export function subscribeMenuMusicStatus(listener: (playing: boolean) => void): () => void {
  statusListeners.add(listener);
  listener(isMenuMusicPlaying());
  return () => {
    statusListeners.delete(listener);
  };
}
