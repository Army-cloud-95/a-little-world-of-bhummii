import React, { useState } from 'react';
import { reasonsList, sweetSurpriseMessages } from '../data/memories';
import { Sparkles, Heart, Smile, MessageCircleHeart, HeartHandshake, Crown, HelpCircle } from 'lucide-react';
import { soundFx } from '../utils/audio';
import confetti from 'canvas-confetti';

const iconMap = {
  Sparkles: Sparkles,
  HeartHandshake: HeartHandshake,
  MessageCircleHeart: MessageCircleHeart,
  Smile: Smile,
  Crown: Crown,
};

export default function ReasonsSection() {
  const [currentSurprise, setCurrentSurprise] = useState(null);
  const [surpriseKey, setSurpriseKey] = useState(0);

  const handleRevealSurprise = () => {
    soundFx.playChime();
    
    // Pick random message
    const randomIndex = Math.floor(Math.random() * sweetSurpriseMessages.length);
    setCurrentSurprise(sweetSurpriseMessages[randomIndex]);
    setSurpriseKey((prev) => prev + 1);

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#F8C8DC', '#FADADD', '#E6D9F2', '#9D526F'],
    });
  };

  return (
    <section id="reasons" className="py-20 px-4 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-pastelPink/40 text-softBurgundy text-xs font-semibold uppercase tracking-wider mb-3">
          <Heart className="w-3.5 h-3.5 text-warmRose" />
          <span>Little Reminders</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-softBurgundy tracking-tight mb-4">
          Reasons Why You're My Favourite Person
        </h2>
        <p className="font-serif italic text-base sm:text-lg text-softBurgundy/80">
          Just a few of the million reasons you're completely irreplaceable.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {reasonsList.map((reason, idx) => {
          const IconComponent = iconMap[reason.icon] || Sparkles;

          return (
            <div
              key={reason.id}
              className="bg-white/90 backdrop-blur-sm p-6 sm:p-7 rounded-3xl border border-pastelPink/60 shadow-scrapbook hover:shadow-glow hover:-translate-y-1.5 transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Corner Tape */}
              <div
                className={`washi-tape ${
                  idx % 2 === 0 ? 'washi-tape-lavender' : ''
                } opacity-75`}
              />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-babyPink/60 text-softBurgundy flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs font-bold text-softBurgundy/40">
                    #{reason.tag}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-softBurgundy mb-1 group-hover:text-warmRose transition-colors">
                  {reason.title}
                </h3>

                <span className="inline-block text-xs font-semibold text-warmRose mb-3">
                  ✨ {reason.highlight}
                </span>

                <p className="font-sans text-sm text-softBurgundy/80 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* "One More Surprise?" Section */}
      <div className="max-w-xl mx-auto text-center bg-gradient-to-tr from-pastelPink/30 via-white/80 to-lavender/30 border border-pastelPink/60 rounded-3xl p-8 shadow-scrapbook">
        <h3 className="font-serif text-2xl font-bold text-softBurgundy mb-2">
          Want a sweet random reminder?
        </h3>
        <p className="font-serif italic text-sm text-softBurgundy/75 mb-6">
          Click below anytime you need an instant smile!
        </p>

        <button
          type="button"
          onClick={handleRevealSurprise}
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-softBurgundy text-cream font-serif font-bold text-base shadow-md hover:shadow-glow hover:scale-105 active:scale-95 transition-all"
        >
          <Sparkles className="w-4 h-4 text-babyPink animate-spin" />
          <span>One More Surprise? ♡</span>
        </button>

        {/* Revealed message popup */}
        {currentSurprise && (
          <div
            key={surpriseKey}
            className="mt-6 p-5 rounded-2xl bg-white border border-warmRose/50 shadow-md animate-in fade-in zoom-in-95 duration-300"
          >
            <span className="text-xs uppercase font-mono tracking-widest text-softBurgundy/60 block mb-1">
              Whispered from the heart
            </span>
            <p className="font-handwritten text-2xl text-softBurgundy font-bold leading-snug">
              "{currentSurprise}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
