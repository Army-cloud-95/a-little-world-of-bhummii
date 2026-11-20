/**
 * Audio Synthesizer & Sound Effects using Web Audio API
 * 100% royalty-free, zero external audio dependency, works offline!
 */

class SoundEffects {
  constructor() {
    this.ctx = null;
    this.isPlayingMusic = false;
    this.musicTimer = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a gentle kalimba / music box bell tone
  playNote(frequency, duration = 0.8, type = 'sine', gainVal = 0.15) {
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio autoplay policy fallback
    }
  }

  // Chime when picking a flower or opening an item
  playChime() {
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playNote(freq, 0.6, 'sine', 0.12);
      }, idx * 70);
    });
  }

  // Envelope paper opening sound
  playPaperRustle() {
    this.init();
    if (!this.ctx) return;
    try {
      const bufferSize = this.ctx.sampleRate * 0.25;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1200;
      filter.Q.value = 2.0;

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      whiteNoise.start();
    } catch {
      this.playNote(440, 0.2, 'triangle', 0.05);
    }
  }

  // Blow candle sound
  playBlowCandle() {
    this.init();
    if (!this.ctx) return;
    try {
      const bufferSize = this.ctx.sampleRate * 0.4;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(400, this.ctx.currentTime);
      filter.frequency.linearRampToValueAtTime(120, this.ctx.currentTime + 0.4);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start();
    } catch {
      this.playNote(220, 0.3, 'sine', 0.1);
    }
  }

  // Confetti celebration fan-fare
  playCelebration() {
    this.init();
    const melody = [
      { f: 523.25, d: 0.2 }, // C
      { f: 523.25, d: 0.2 }, // C
      { f: 587.33, d: 0.3 }, // D
      { f: 523.25, d: 0.3 }, // C
      { f: 698.46, d: 0.35 }, // F
      { f: 659.25, d: 0.6 }, // E
    ];
    let timeOffset = 0;
    melody.forEach((note) => {
      setTimeout(() => {
        this.playNote(note.f, note.d * 1.5, 'sine', 0.15);
      }, timeOffset);
      timeOffset += note.d * 1000;
    });
  }

  // Soft dream music box background tune loop
  startDreamMelody() {
    if (this.isPlayingMusic) return;
    this.init();
    this.isPlayingMusic = true;

    // Sweet nostalgic music box notes (Pentatonic sweet melody)
    const dreamNotes = [
      392.00, 440.00, 523.25, 587.33, 659.25, 587.33, 523.25, 440.00,
      392.00, 523.25, 659.25, 783.99, 659.25, 523.25, 587.33, 523.25
    ];
    let noteIndex = 0;

    const playNext = () => {
      if (!this.isPlayingMusic) return;
      const freq = dreamNotes[noteIndex % dreamNotes.length];
      this.playNote(freq, 1.2, 'sine', 0.08);
      // subtle harmony
      if (noteIndex % 4 === 0) {
        this.playNote(freq * 0.5, 1.5, 'triangle', 0.04);
      }
      noteIndex++;
      this.musicTimer = setTimeout(playNext, 650);
    };

    playNext();
  }

  stopDreamMelody() {
    this.isPlayingMusic = false;
    if (this.musicTimer) {
      clearTimeout(this.musicTimer);
      this.musicTimer = null;
    }
  }

  toggleMusic() {
    if (this.isPlayingMusic) {
      this.stopDreamMelody();
      return false;
    } else {
      this.startDreamMelody();
      return true;
    }
  }
}

export const soundFx = new SoundEffects();
