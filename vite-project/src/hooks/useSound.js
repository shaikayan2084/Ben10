import { useCallback, useRef } from "react";

const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

export function useSound() {
  const audioCtxRef = useRef(null);

  const getAudioCtx = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtxRef.current;
  };

  const playFile = useCallback((file) => {
    const audio = new Audio(`${base}/sounds/${file}`);
    audio.volume = 0.5;
    audio.play().catch(() => {});
  }, []);

  const playOmnitrix = useCallback(() => {
    playFile("omnitrix.mp3");
  }, [playFile]);

  const playTransform = useCallback(() => {
    playFile("transform.mp3");
  }, [playFile]);

  const speakAlien = useCallback((name) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(name);
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    utterance.volume = 0.6;
    window.speechSynthesis.speak(utterance);
  }, []);

  const playBeep = useCallback(() => {
    try {
      const ctx = getAudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.value = 880;
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.1);
    } catch {}
  }, []);

  return { playOmnitrix, playTransform, speakAlien, playBeep };
}