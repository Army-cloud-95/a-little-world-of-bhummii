import React from 'react';
import { finalScreen, photoGallery, personalDetails } from '../data/memories';
import { Heart, Sparkles, Stars } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/audio';

export default function FinalSection() {
  const triggerHearts = () => {
    soundFx.playChime();
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.9 },
      colors: ['#F8C8DC', '#FADADD', '#E6D9F2', '#9D526F'],
    });
  };

  return (
    <footer className="py-24 px-4 max-w-5xl mx-auto relative text-center">
      {/* Decorative Radial Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pastelPink/20 to-babyPink/35 rounded-3xl -z-10 blur-xl" />

      {/* Main Closing Card */}
      <div className="bg-white/90 backdrop-blur-md border border-pastelPink/70 rounded-3xl p-8 sm:p-14 shadow-scrapbook relative overflow-hidden">
        {/* Floating Scrapbook Tape */}
        <div className="washi-tape" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastelPink/50 text-softBurgundy text-xs font-semibold uppercase tracking-wider mb-6">
          <Stars className="w-4 h-4 text-warmRose" />
          <span>Forever & Always</span>
        </div>

        {/* Cinematic Friendship Quote */}
        <p className="font-serif italic text-xl sm:text-3xl text-softBurgundy/90 max-w-3xl mx-auto leading-relaxed mb-6">
          "{finalScreen.quote}"
        </p>

        {/* Big Birthday Cheer */}
        <h2 className="font-script text-5xl sm:text-7xl md:text-8xl text-warmRose font-bold mb-10 tracking-wide hover:scale-105 transition-transform cursor-pointer" onClick={triggerHearts}>
          {finalScreen.cheer}
        </h2>

        {/* Mini Photobooth Strip Collage */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 max-w-2xl mx-auto">
          {photoGallery.slice(0, 4).map((photo, i) => (
            <div
              key={photo.id}
              className="w-20 sm:w-28 p-1.5 sm:p-2 bg-white rounded-xl shadow-polaroid rotate-[-2deg] hover:rotate-0 hover:scale-110 transition-all duration-300 border border-pastelPink/40"
              style={{
                transform: `rotate(${i % 2 === 0 ? '-3deg' : '4deg'})`,
              }}
            >
              <div className="aspect-square rounded-lg overflow-hidden bg-pastelPink/30">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = photo.fallbackUrl;
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer Credit & Love Message */}
        <div className="pt-6 border-t border-pastelPink/40 flex flex-col items-center gap-2">
          <p className="font-handwritten text-xl sm:text-2xl text-softBurgundy font-bold flex items-center gap-2">
            <span>Made with</span>
            <Heart className="w-5 h-5 text-warmRose fill-warmRose animate-pulse" />
            <span>for Bhumika Tyagi</span>
          </p>
          <span className="text-xs font-serif italic text-softBurgundy/70">
            {finalScreen.credit}
          </span>
          <span className="text-[11px] font-mono text-softBurgundy/50 mt-2">
            21st November 2026 • Happy Birthday Bhummii 💗
          </span>
        </div>
      </div>
    </footer>
  );
}
