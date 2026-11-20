import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, RefreshCw, Flame } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function BirthdayCakeSection() {
  // 3 glowing candles on top of the cake
  const [candles, setCandles] = useState([
    { id: 1, isLit: true, xOffset: '-40px' },
    { id: 2, isLit: true, xOffset: '0px' },
    { id: 3, isLit: true, xOffset: '40px' },
  ]);
  const [hasCelebrated, setHasCelebrated] = useState(false);

  // Extinguish an individual candle
  const blowCandle = (id) => {
    soundFx.playBlowCandle();

    const updated = candles.map((c) =>
      c.id === id ? { ...c, isLit: false } : c
    );
    setCandles(updated);

    // If all candles are now blown
    if (updated.every((c) => !c.isLit)) {
      triggerCelebration();
    }
  };

  // Blow all candles at once
  const blowAllCandles = () => {
    soundFx.playBlowCandle();
    const updated = candles.map((c) => ({ ...c, isLit: false }));
    setCandles(updated);
    triggerCelebration();
  };

  // Relight candles
  const relightCandles = () => {
    soundFx.playChime();
    setCandles(candles.map((c) => ({ ...c, isLit: true })));
    setHasCelebrated(false);
  };

  const triggerCelebration = () => {
    setHasCelebrated(true);
    soundFx.playCelebration();

    // Multicolored birthday confetti cannons from both sides
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#F8C8DC', '#FADADD', '#E6D9F2', '#9D526F', '#FFE599', '#FFFFFF'],
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const allBlown = candles.every((c) => !c.isLit);

  return (
    <section id="cake" className="py-24 px-4 max-w-4xl mx-auto text-center relative">
      {/* Section Header */}
      <div className="max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-pastelPink/40 text-softBurgundy text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-warmRose" />
          <span>Interactive Wish</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-softBurgundy tracking-tight mb-3">
          Make a wish, Bhummii! 🎂
        </h2>
        <p className="font-serif italic text-base sm:text-lg text-softBurgundy/80">
          Close your eyes, think of the happiest dream, and tap the candles to blow them out!
        </p>
      </div>

      {/* Birthday Cake Stage */}
      <div className="relative max-w-lg mx-auto bg-gradient-to-b from-white/95 to-pastelPink/25 border border-pastelPink/60 rounded-3xl p-8 sm:p-12 shadow-scrapbook">
        {/* Floating Celebration Header if completed */}
        {allBlown && (
          <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-babyPink via-lavender to-pastelPink border border-white/60 shadow-md animate-in fade-in zoom-in-95 duration-500">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-softBurgundy">
              ✨ Wish Granted, Bhummii! ✨
            </h3>
            <p className="font-handwritten text-xl text-softBurgundy/90 mt-1">
              May all your silent prayers and biggest dreams come true this year! ♡
            </p>
          </div>
        )}

        {/* 3D Tiered Cake Illustration */}
        <div className="relative w-64 sm:w-72 h-64 mx-auto flex flex-col items-center justify-end">
          {/* Candles Row */}
          <div className="absolute top-10 flex items-center justify-center gap-8 z-20">
            {candles.map((candle) => (
              <div
                key={candle.id}
                onClick={() => blowCandle(candle.id)}
                className="flex flex-col items-center cursor-pointer group"
                title="Click to blow out candle"
              >
                {/* Flame or Smoke */}
                {candle.isLit ? (
                  <div className="relative mb-1">
                    <div className="w-4 h-6 bg-gradient-to-t from-orange-400 via-amber-300 to-yellow-100 rounded-full candle-flame shadow-[0_0_15px_#f59e0b] group-hover:scale-125 transition-transform" />
                    <div className="absolute inset-0 bg-yellow-200/50 rounded-full blur-sm" />
                  </div>
                ) : (
                  <div className="h-6 flex items-center justify-center mb-1">
                    <span className="text-xs text-neutral-400 animate-pulse select-none">
                      💨
                    </span>
                  </div>
                )}

                {/* Candle Stick */}
                <div className="w-3.5 h-14 bg-gradient-to-r from-pink-200 via-white to-pink-300 rounded-t-sm shadow-sm border border-pink-300/40 relative">
                  <div className="absolute inset-x-0 top-3 h-1 bg-warmRose/40 rotate-12" />
                  <div className="absolute inset-x-0 top-7 h-1 bg-warmRose/40 rotate-12" />
                </div>
              </div>
            ))}
          </div>

          {/* Top Cake Tier */}
          <div className="relative w-44 h-16 bg-[#FDF0ED] rounded-t-3xl border-2 border-[#F3D5CF] shadow-inner flex flex-col justify-between overflow-hidden z-10">
            {/* Strawberry Cream Drips */}
            <div className="w-full h-5 bg-[#F8C8DC] rounded-b-2xl border-b-2 border-white/60 flex justify-around items-center px-2">
              <span className="text-xs">🍓</span>
              <span className="text-xs">✨</span>
              <span className="text-xs">🍓</span>
            </div>
          </div>

          {/* Bottom Cake Tier */}
          <div className="relative w-60 sm:w-64 h-22 bg-[#FFF6EE] rounded-t-3xl border-2 border-[#EAD0C8] shadow-md flex flex-col justify-between overflow-hidden">
            {/* Frosting Swirls */}
            <div className="w-full h-6 bg-[#FADADD] rounded-b-2xl border-b-2 border-white/60 flex justify-around items-center px-4">
              <span className="text-xs">🌸</span>
              <span className="text-xs">🍓</span>
              <span className="text-xs">🌸</span>
              <span className="text-xs">🍓</span>
              <span className="text-xs">🌸</span>
            </div>

            {/* Cake Base Label */}
            <div className="pb-3 text-center">
              <span className="font-script text-2xl font-bold text-softBurgundy tracking-wider">
                Bhummii ♡
              </span>
            </div>
          </div>

          {/* Ceramic Cake Plate */}
          <div className="w-72 sm:w-80 h-4 bg-gradient-to-r from-neutral-200 via-white to-neutral-200 rounded-full shadow-lg border border-neutral-300/80 -mt-1 z-0" />
        </div>

        {/* Interaction Controls */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {!allBlown ? (
            <button
              onClick={blowAllCandles}
              className="px-6 py-3 rounded-full bg-softBurgundy text-cream font-serif font-bold text-base shadow-md hover:shadow-glow hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>Blow All Candles 💨</span>
            </button>
          ) : (
            <button
              onClick={relightCandles}
              className="px-6 py-3 rounded-full bg-white border border-pastelPink text-softBurgundy font-serif font-semibold text-sm shadow-sm hover:bg-pastelPink/30 transition-all flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Relight & Wish Again 🕯️</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
