import { Language } from '../types/geography';

// Browser SpeechSynthesis pronunciation helper for learning geographic names in Spanish & English.

let cachedVoices: SpeechSynthesisVoice[] = [];
let voicesInitialized = false;

function loadVoices(): SpeechSynthesisVoice[] {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return [];
  const voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    cachedVoices = voices;
  }
  return cachedVoices;
}

function ensureVoicesListener(): void {
  if (voicesInitialized || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  voicesInitialized = true;
  loadVoices();
  window.speechSynthesis.addEventListener?.('voiceschanged', () => {
    loadVoices();
  });
}

function pickBestVoice(lang: Language): SpeechSynthesisVoice | null {
  ensureVoicesListener();
  const voices = loadVoices();
  if (voices.length === 0) return null;

  const preferredCodes =
    lang === 'es'
      ? ['es-mx', 'es-es', 'es-us', 'es-419', 'es']
      : ['en-us', 'en-gb', 'en-au', 'en'];

  // Prefer natural/Google/Microsoft/Apple voices over robotic defaults
  const scoreVoice = (v: SpeechSynthesisVoice): number => {
    const code = v.lang.toLowerCase();
    const name = v.name.toLowerCase();
    let score = 0;

    const exactIdx = preferredCodes.indexOf(code);
    if (exactIdx !== -1) {
      score += 100 - exactIdx * 10;
    } else if (code.startsWith(lang)) {
      score += 50;
    } else {
      return -1;
    }

    if (
      name.includes('google') ||
      name.includes('natural') ||
      name.includes('neural') ||
      name.includes('paulina') ||
      name.includes('monica') ||
      name.includes('mónica') ||
      name.includes('jorge') ||
      name.includes('samantha') ||
      name.includes('aria') ||
      name.includes('jenny') ||
      name.includes('diego') ||
      name.includes('sofia') ||
      name.includes('elena')
    ) {
      score += 35;
    }
    if (v.localService) {
      score += 5;
    }
    return score;
  };

  let best: SpeechSynthesisVoice | null = null;
  let bestScore = -1;
  for (const v of voices) {
    const s = scoreVoice(v);
    if (s > bestScore) {
      bestScore = s;
      best = v;
    }
  }
  return best;
}

export function stopSpeaking(): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
  } catch {
    // ignore speech cancellation errors
  }
}

/**
 * Pronounces a geographic element name (country, continent, ocean, sea, pole, capital, landform)
 * in the active language so learners hear proper pronunciation.
 */
export function speakGeoName(text: string | null | undefined, lang: Language, enabled = true): void {
  if (!enabled || !text) return;
  const cleaned = text.trim();
  if (!cleaned) return;
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

  try {
    const synth = window.speechSynthesis;
    synth.cancel();

    const utterance = new SpeechSynthesisUtterance(cleaned);
    const voice = pickBestVoice(lang);
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    } else {
      utterance.lang = lang === 'es' ? 'es-ES' : 'en-US';
    }
    utterance.rate = 0.93; // Slightly measured pace for clear pronunciation learning
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    // Slight defer after cancel avoids occasional Chrome swallowed utterances
    window.setTimeout(() => {
      try {
        synth.speak(utterance);
      } catch {
        // ignore speech synthesis errors
      }
    }, 25);
  } catch {
    // ignore speech synthesis errors
  }
}
