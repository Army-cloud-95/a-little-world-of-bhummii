import React, { useState } from 'react';
import { bouquetFlowers } from '../data/memories';
import { Flower2, Sparkles, Heart, Gift, Check } from 'lucide-react';
import { soundFx } from '../utils/audio';
import confetti from 'canvas-confetti';

export default function BouquetSection() {
  const [selectedFlowerIds, setSelectedFlowerIds] = useState(
    bouquetFlowers.map((f) => f.id) // all in by default, user can toggle
  );
  const [isPresented, setIsPresented] = useState(false);

  const toggleFlower = (id) => {
    soundFx.playChime();
    if (selectedFlowerIds.includes(id)) {
      if (selectedFlowerIds.length > 1) {
        setSelectedFlowerIds(selectedFlowerIds.filter((fId) => fId !== id));
      }
    } else {
      setSelectedFlowerIds([...selectedFlowerIds, id]);
    }
  };

  const handlePresentBouquet = () => {
    soundFx.playCelebration();
    setIsPresented(true);

    // Flower petal confetti burst
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#F8C8DC', '#FADADD', '#E6D9F2', '#FFE599', '#FFF8F0', '#9D526F'],
      shapes: ['circle'],
      scalar: 1.2,
    });
  };

  return (
    <section id="bouquet" className="py-20 px-4 max-w-5xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-pastelPink/40 text-softBurgundy text-xs font-semibold uppercase tracking-wider mb-3">
          <Flower2 className="w-3.5 h-3.5 text-warmRose" />
          <span>Handpicked Blooms</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-softBurgundy tracking-tight mb-4">
          A Birthday Bouquet for Bhummii
        </h2>
        <p className="font-serif italic text-base sm:text-lg text-softBurgundy/80">
          Every blossom picked with love, each holding a special meaning of our friendship.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Flower Selection Palette */}
        <div className="lg:col-span-5 space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-softBurgundy/70 block mb-2">
            Click flowers to curate her bouquet:
          </span>

          {bouquetFlowers.map((flower) => {
            const isSelected = selectedFlowerIds.includes(flower.id);

            return (
              <div
                key={flower.id}
                onClick={() => toggleFlower(flower.id)}
                className={`p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'bg-white/90 border-warmRose shadow-scrapbook scale-102'
                    : 'bg-white/40 border-pastelPink/40 opacity-60 hover:opacity-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl p-2 rounded-xl bg-pastelPink/30">
                    {flower.bloomEmoji}
                  </span>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-softBurgundy">
                      {flower.name}
                    </h4>
                    <p className="text-xs text-softBurgundy/70 italic font-serif">
                      {flower.meaning}
                    </p>
                  </div>
                </div>

                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center border transition-colors ${
                    isSelected
                      ? 'bg-softBurgundy border-softBurgundy text-white'
                      : 'border-softBurgundy/30'
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Assembled Bouquet Display */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="relative w-full max-w-sm sm:max-w-md bg-gradient-to-b from-white/90 to-pastelPink/30 border border-pastelPink/60 rounded-3xl p-8 shadow-scrapbook flex flex-col items-center overflow-hidden">
            {/* Bouquet Visual Composition */}
            <div className="relative w-64 h-64 flex items-center justify-center my-4">
              {/* Blooming Flowers Fan */}
              <div className="relative w-48 h-48 flex items-center justify-center">
                {selectedFlowerIds.map((fId, idx) => {
                  const flower = bouquetFlowers.find((f) => f.id === fId);
                  const angle = (idx - selectedFlowerIds.length / 2) * 22;
                  const distance = 35;

                  return (
                    <div
                      key={fId}
                      className="absolute transition-all duration-500 float-gentle"
                      style={{
                        transform: `rotate(${angle}deg) translateY(-${distance}px)`,
                        animationDelay: `${idx * 0.2}s`,
                      }}
                    >
                      <span className="text-5xl filter drop-shadow-md select-none block hover:scale-125 transition-transform">
                        {flower?.bloomEmoji || '🌸'}
                      </span>
                    </div>
                  );
                })}

                {/* Stems & Craft Paper Wrap */}
                <div className="absolute bottom-2 w-32 h-36 bg-gradient-to-b from-[#D4A373] to-[#BC6C25] rounded-b-2xl rounded-t-sm shadow-md rotate-0 flex flex-col items-center justify-center z-10 border-t-4 border-[#A36020]/40">
                  {/* Pink Ribbon & Bow */}
                  <div className="absolute top-6 w-full h-4 bg-warmRose shadow-sm flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-softBurgundy -mt-1 flex items-center justify-center text-[10px] text-white font-bold">
                      🎀
                    </div>
                  </div>

                  {/* Gift Tag */}
                  <div className="mt-8 bg-[#FFF8F0] px-3 py-1.5 rounded-lg border border-dashed border-[#A36020] shadow-sm rotate-[-4deg]">
                    <span className="text-[11px] font-handwritten font-bold text-softBurgundy block">
                      For Bhummii ♡
                    </span>
                    <span className="text-[9px] font-mono text-softBurgundy/70 block">
                      Forever Besties
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bouquet Tag & Present Button */}
            <div className="text-center w-full mt-4">
              <h3 className="font-serif text-xl font-bold text-softBurgundy mb-1">
                {selectedFlowerIds.length} Blooms of Endless Friendship
              </h3>
              <p className="font-handwritten text-lg text-softBurgundy/80 mb-5">
                "Flowers may wither, but our bond blooms forever."
              </p>

              <button
                type="button"
                onClick={handlePresentBouquet}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-softBurgundy text-cream font-serif font-bold text-base shadow-md hover:shadow-glow hover:scale-102 active:scale-98 transition-all"
              >
                <Gift className="w-5 h-5 text-babyPink" />
                <span>{isPresented ? "Bouquet Delivered with Love! 💐" : "Gift This Bouquet to Bhummii ♡"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
