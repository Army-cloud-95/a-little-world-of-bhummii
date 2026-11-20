import React, { useState } from 'react';
import { Flower2, Sparkles, Heart, Gift, Plus, Minus, RotateCcw, X, Check } from 'lucide-react';
import { soundFx } from '../utils/audio';
import confetti from 'canvas-confetti';

const flowerTypes = [
  {
    id: 'rose',
    name: 'Soft Pink Rose',
    meaning: 'Grace, gentleness & unconditional friendship',
    color: '#F8C8DC',
    textColor: '#9D526F',
    emoji: '🌸',
    accent: '#E07A94',
    stems: 1,
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
        <path d="M50 45 C40 25, 20 35, 30 55 C40 70, 50 80, 50 85 C50 80, 60 70, 70 55 C80 35, 60 25, 50 45 Z" fill="#F8C8DC" />
        <path d="M50 48 C43 32, 28 40, 35 55 C42 66, 50 75, 50 78 C50 75, 58 66, 65 55 C72 40, 57 32, 50 48 Z" fill="#E07A94" />
        <circle cx="50" cy="50" r="12" fill="#C95B78" />
        <path d="M50 50 Q46 44 50 40 Q54 44 50 50" fill="#9D2D4B" />
        <path d="M48 82 Q45 92 48 98 Q52 92 50 82" stroke="#4A7C59" strokeWidth="3" fill="none" />
        <path d="M48 90 Q38 88 40 82 Q46 84 48 90" fill="#588B68" />
      </svg>
    )
  },
  {
    id: 'tulip',
    name: 'Blush Tulip',
    meaning: 'The happiest thoughts & caring affection',
    color: '#FADADD',
    textColor: '#A04868',
    emoji: '🌷',
    accent: '#E88CA7',
    stems: 1,
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
        <path d="M50 85 L50 98" stroke="#4A7C59" strokeWidth="4" strokeLinecap="round" />
        <path d="M50 92 Q62 90 60 80 Q52 84 50 92" fill="#588B68" />
        <path d="M50 35 C35 35, 28 65, 50 85 C72 65, 65 35, 50 35 Z" fill="#FADADD" />
        <path d="M50 40 C40 40, 36 60, 50 75 C64 60, 60 40, 50 40 Z" fill="#E88CA7" />
        <path d="M50 45 C45 45, 42 55, 50 68 C58 55, 55 45, 50 45 Z" fill="#C95B78" />
      </svg>
    )
  },
  {
    id: 'sunflower',
    name: 'Golden Sunflower',
    meaning: 'Radiant warmth, loyalty & infectious smiles',
    color: '#FFE599',
    textColor: '#8C5E00',
    emoji: '🌻',
    accent: '#F59E0B',
    stems: 1,
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
        <path d="M50 80 L50 98" stroke="#4A7C59" strokeWidth="4" />
        <g transform="translate(50,50)">
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <ellipse key={deg} cx="0" cy="-28" rx="7" ry="16" fill="#FBBF24" transform={`rotate(${deg})`} />
          ))}
          {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((deg) => (
            <ellipse key={deg} cx="0" cy="-24" rx="6" ry="13" fill="#F59E0B" transform={`rotate(${deg})`} />
          ))}
          <circle cx="0" cy="0" r="16" fill="#78350F" />
          <circle cx="0" cy="0" r="12" fill="#451A03" />
        </g>
      </svg>
    )
  },
  {
    id: 'lavender',
    name: 'Sweet Lavender',
    meaning: 'Serenity, soothing peace & heart-to-heart talks',
    color: '#E6D9F2',
    textColor: '#6B4C82',
    emoji: '🪻',
    accent: '#A78BFA',
    stems: 1,
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
        <path d="M50 98 L50 30" stroke="#4A7C59" strokeWidth="3" />
        {[30, 42, 54, 66, 78].map((y, idx) => (
          <g key={y}>
            <ellipse cx="44" cy={y} rx="5" ry="7" fill="#C4B5FD" transform={`rotate(-25 44 ${y})`} />
            <ellipse cx="56" cy={y} rx="5" ry="7" fill="#A78BFA" transform={`rotate(25 56 ${y})`} />
            <ellipse cx="50" cy={y - 3} rx="4" ry="6" fill="#8B5CF6" />
          </g>
        ))}
        <ellipse cx="50" cy="22" rx="4" ry="7" fill="#7C3AED" />
      </svg>
    )
  },
  {
    id: 'daisy',
    name: 'Little Daisy',
    meaning: 'Cheerfulness, pure innocence & silly laughter',
    color: '#FFF8F0',
    textColor: '#8C5030',
    emoji: '🌼',
    accent: '#FCD34D',
    stems: 1,
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
        <path d="M50 75 L50 98" stroke="#4A7C59" strokeWidth="3" />
        <g transform="translate(50,48)">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <ellipse key={deg} cx="0" cy="-22" rx="6" ry="14" fill="#FFFFFF" stroke="#FDE68A" strokeWidth="1" transform={`rotate(${deg})`} />
          ))}
          {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((deg) => (
            <ellipse key={deg} cx="0" cy="-20" rx="5" ry="12" fill="#FFFBEB" transform={`rotate(${deg})`} />
          ))}
          <circle cx="0" cy="0" r="11" fill="#F59E0B" />
          <circle cx="0" cy="0" r="7" fill="#D97706" />
        </g>
      </svg>
    )
  },
  {
    id: 'babybreath',
    name: "Baby's Breath",
    meaning: 'Everlasting friendship that withstands all time',
    color: '#FFFFFF',
    textColor: '#5A6275',
    emoji: '✨',
    accent: '#CBD5E1',
    stems: 1,
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
        <path d="M50 98 L50 70 M50 70 L35 45 M50 70 L65 45 M35 45 L25 30 M35 45 L42 28 M65 45 L58 28 M65 45 L75 30" stroke="#588B68" strokeWidth="2" fill="none" />
        {[[25, 28], [42, 26], [58, 26], [75, 28], [33, 42], [67, 42], [50, 35], [20, 32], [80, 32]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="4.5" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        ))}
      </svg>
    )
  }
];

export default function BouquetSection() {
  // Flower counts in the bouquet (starts with 1 of each by default)
  const [counts, setCounts] = useState({
    rose: 2,
    tulip: 1,
    sunflower: 1,
    lavender: 2,
    daisy: 1,
    babybreath: 2
  });

  const [ribbonColor, setRibbonColor] = useState('#E07A94'); // default soft pink
  const [isPresented, setIsPresented] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Total flower count
  const totalFlowers = Object.values(counts).reduce((a, b) => a + b, 0);

  // Add flower
  const addFlower = (id) => {
    if (totalFlowers >= 18) return;
    soundFx.playChime();
    setCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  // Remove flower
  const removeFlower = (id) => {
    if ((counts[id] || 0) <= 0) return;
    soundFx.playNote(380, 0.15, 'triangle');
    setCounts((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) - 1)
    }));
  };

  // Reset to full preset
  const resetToPreset = () => {
    soundFx.playChime();
    setCounts({
      rose: 2,
      tulip: 1,
      sunflower: 1,
      lavender: 2,
      daisy: 1,
      babybreath: 2
    });
  };

  // Clear all
  const clearBouquet = () => {
    soundFx.playNote(300, 0.2);
    setCounts({
      rose: 0,
      tulip: 0,
      sunflower: 0,
      lavender: 0,
      daisy: 0,
      babybreath: 0
    });
  };

  // Present the bouquet to Bhummii
  const handlePresentBouquet = () => {
    soundFx.playCelebration();
    setIsPresented(true);
    setIsModalOpen(true);

    // Blossom confetti burst
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#F8C8DC', '#FADADD', '#E6D9F2', '#FFE599', '#FFF8F0', '#9D526F', '#E07A94'],
      scalar: 1.1
    });
  };

  // Generate list of flower items for rendering inside the wrapper
  const bouquetItemList = [];
  flowerTypes.forEach((flower) => {
    const qty = counts[flower.id] || 0;
    for (let i = 0; i < qty; i++) {
      bouquetItemList.push({
        ...flower,
        uniqueKey: `${flower.id}-${i}`
      });
    }
  });

  return (
    <section id="bouquet" className="py-24 px-4 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-pastelPink/50 text-softBurgundy text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
          <Flower2 className="w-4 h-4 text-warmRose" />
          <span>Interactive Floral Studio</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-softBurgundy tracking-tight mb-4">
          A Birthday Bouquet for Bhummii 💐
        </h2>
        <p className="font-serif italic text-base sm:text-lg text-softBurgundy/80">
          Pick her favorite blooms, craft a custom floral arrangement, and present it with love!
        </p>
      </div>

      {/* Florist Studio Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Flower Picker & Controls */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-white/90 backdrop-blur-md border border-pastelPink/60 rounded-3xl p-6 shadow-scrapbook">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-pastelPink/30">
              <span className="font-serif font-bold text-sm text-softBurgundy flex items-center gap-2">
                <span>Select Her Blooms</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-pastelPink/60 text-softBurgundy font-mono">
                  {totalFlowers} in Bouquet
                </span>
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={resetToPreset}
                  className="text-xs font-serif text-warmRose hover:underline flex items-center gap-1"
                  title="Reset to recommended mix"
                >
                  <RotateCcw className="w-3 h-3" /> Reset
                </button>
              </div>
            </div>

            {/* List of 6 Flowers to add/remove */}
            <div className="space-y-3">
              {flowerTypes.map((flower) => {
                const count = counts[flower.id] || 0;

                return (
                  <div
                    key={flower.id}
                    className={`p-3 rounded-2xl border transition-all flex items-center justify-between ${
                      count > 0
                        ? 'bg-gradient-to-r from-white to-pastelPink/20 border-warmRose/50 shadow-sm'
                        : 'bg-white/40 border-pastelPink/30 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm p-1.5 flex items-center justify-center border border-pastelPink/40">
                        {flower.svg}
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-sm text-softBurgundy">
                          {flower.name}
                        </h4>
                        <p className="text-[11px] text-softBurgundy/70 italic font-serif max-w-[170px] truncate">
                          {flower.meaning}
                        </p>
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-1.5 bg-white/90 rounded-full border border-pastelPink/60 px-2 py-1 shadow-sm">
                      <button
                        type="button"
                        onClick={() => removeFlower(flower.id)}
                        disabled={count <= 0}
                        className="w-6 h-6 rounded-full hover:bg-pastelPink/40 text-softBurgundy flex items-center justify-center disabled:opacity-30 disabled:hover:bg-transparent"
                        aria-label={`Remove one ${flower.name}`}
                      >
                        <Minus className="w-3 h-3" />
                      </button>

                      <span className="w-5 text-center font-mono font-bold text-xs text-softBurgundy">
                        {count}
                      </span>

                      <button
                        type="button"
                        onClick={() => addFlower(flower.id)}
                        disabled={totalFlowers >= 18}
                        className="w-6 h-6 rounded-full hover:bg-softBurgundy hover:text-white text-softBurgundy flex items-center justify-center transition-colors disabled:opacity-30"
                        aria-label={`Add one ${flower.name}`}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Ribbon Color Picker */}
            <div className="mt-5 pt-4 border-t border-pastelPink/30 flex items-center justify-between">
              <span className="text-xs font-serif font-bold text-softBurgundy">
                Satin Ribbon Color:
              </span>
              <div className="flex items-center gap-2">
                {[
                  { name: 'Soft Pink', color: '#E07A94' },
                  { name: 'Lavender', color: '#A78BFA' },
                  { name: 'Burgundy', color: '#9D526F' },
                  { name: 'Golden Glow', color: '#F59E0B' },
                ].map((ribbon) => (
                  <button
                    key={ribbon.color}
                    type="button"
                    onClick={() => {
                      soundFx.playNote(523.25, 0.1);
                      setRibbonColor(ribbon.color);
                    }}
                    className={`w-6 h-6 rounded-full border-2 transition-transform ${
                      ribbonColor === ribbon.color ? 'scale-125 border-softBurgundy shadow-md' : 'border-white hover:scale-110'
                    }`}
                    style={{ backgroundColor: ribbon.color }}
                    title={ribbon.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Assembled Bouquet Preview */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="w-full max-w-md bg-gradient-to-b from-white/95 via-pastelPink/20 to-cream border border-pastelPink/60 rounded-3xl p-6 sm:p-8 shadow-scrapbook relative flex flex-col items-center overflow-hidden">
            {/* Washi Tape */}
            <div className="washi-tape washi-tape-lavender" />

            {/* Live Bouquet Visual Art */}
            <div className="relative w-72 h-84 sm:w-80 sm:h-96 my-2 flex items-center justify-center">
              {totalFlowers === 0 ? (
                <div className="text-center p-6 bg-white/70 rounded-2xl border border-dashed border-pastelPink/80 animate-pulse">
                  <span className="text-4xl block mb-2">🧺</span>
                  <p className="font-serif italic text-sm text-softBurgundy/80">
                    Your bouquet is currently empty! <br />
                    Click the (+) buttons on the left to add fresh blooms.
                  </p>
                </div>
              ) : (
                <div className="relative w-full h-full flex flex-col items-center justify-end pb-8">
                  {/* Fan of Blossoms */}
                  <div className="relative w-64 h-56 flex items-center justify-center z-10">
                    {bouquetItemList.map((item, index) => {
                      // Distribute blossoms organically in an arch
                      const total = bouquetItemList.length;
                      const spread = Math.min(140, total * 15);
                      const angle = total === 1 ? 0 : -spread / 2 + (index / (total - 1)) * spread;
                      const depth = Math.sin((index / Math.max(1, total - 1)) * Math.PI) * 20;
                      const yOffset = -depth - (index % 2 === 0 ? 15 : 35);

                      return (
                        <div
                          key={item.uniqueKey}
                          className="absolute w-16 h-16 sm:w-20 sm:h-20 transition-all duration-500 hover:scale-125 cursor-pointer float-gentle"
                          style={{
                            transform: `rotate(${angle}deg) translate(${angle * 0.8}px, ${yOffset}px)`,
                            animationDelay: `${(index % 5) * 0.3}s`,
                            zIndex: 10 + (index % 3),
                          }}
                          onClick={() => soundFx.playChime()}
                          title={item.name}
                        >
                          {item.svg}
                        </div>
                      );
                    })}
                  </div>

                  {/* Kraft Paper Wrapping & Satin Ribbon */}
                  <div className="relative w-44 sm:w-52 h-44 bg-gradient-to-b from-[#E2B784] via-[#D4A373] to-[#BC6C25] rounded-b-3xl shadow-xl flex flex-col items-center justify-between pt-2 pb-4 z-20 border-t-4 border-[#C58B55]">
                    {/* Folded paper crease line */}
                    <div className="w-full border-t border-[#A26D38]/30 mt-1" />

                    {/* Satin Ribbon & Bow */}
                    <div
                      className="w-full h-5 shadow-md flex items-center justify-center relative transition-colors duration-300"
                      style={{ backgroundColor: ribbonColor }}
                    >
                      <div
                        className="w-8 h-8 rounded-full shadow-lg flex items-center justify-center text-xs text-white font-bold"
                        style={{ backgroundColor: ribbonColor }}
                      >
                        🎀
                      </div>
                    </div>

                    {/* Hanging Personalized Gift Tag */}
                    <div className="bg-[#FFFDF7] px-4 py-2 rounded-xl border border-dashed border-[#A26D38] shadow-md rotate-[-3deg] text-center">
                      <span className="text-xs font-handwritten font-bold text-softBurgundy block leading-none">
                        For Bhummii ♡
                      </span>
                      <span className="text-[10px] font-mono text-softBurgundy/70 block mt-1">
                        Handcrafted with love
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bouquet Summary & Action Button */}
            <div className="text-center w-full mt-2">
              <h3 className="font-serif text-lg font-bold text-softBurgundy">
                {totalFlowers} Handcrafted Blooms
              </h3>
              <p className="font-handwritten text-lg text-softBurgundy/80 mb-4">
                "Flowers may wither, but our bond blooms forever."
              </p>

              <button
                type="button"
                onClick={handlePresentBouquet}
                disabled={totalFlowers === 0}
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-softBurgundy text-cream font-serif font-bold text-base shadow-scrapbook hover:shadow-glow hover:scale-102 active:scale-98 transition-all disabled:opacity-40 disabled:hover:scale-100"
              >
                <Gift className="w-5 h-5 text-babyPink animate-bounce" />
                <span>Gift This Bouquet to Bhummii ♡</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Celebration Modal when Bouquet is Presented */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-softBurgundy/60 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-8 text-center shadow-2xl border-2 border-pastelPink relative animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-pastelPink/40 text-softBurgundy transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-5xl block mb-3 animate-bounce">💐</span>

            <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-babyPink/60 text-softBurgundy text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-warmRose" />
              <span>Special Delivery for Bhummii</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-softBurgundy mb-2">
              A Bouquet as Beautiful as You! 🌸
            </h3>

            <p className="font-handwritten text-2xl text-softBurgundy leading-relaxed my-4">
              "Dear Bhummii, every single blossom here was chosen to remind you how deeply special, loved, and treasured you are. Happy Birthday, my favourite human!"
            </p>

            <div className="p-4 rounded-2xl bg-cream/70 border border-pastelPink/50 my-4 text-xs font-serif text-softBurgundy/80 space-y-1">
              <p className="font-bold text-sm text-softBurgundy">Your Custom Bouquet Includes:</p>
              {flowerTypes
                .filter((f) => counts[f.id] > 0)
                .map((f) => (
                  <p key={f.id}>
                    • {counts[f.id]}x {f.name} — <span className="italic">{f.meaning}</span>
                  </p>
                ))}
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="px-8 py-3 rounded-full bg-softBurgundy text-cream font-serif font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-md"
            >
              Thank you, Bestie! ♡
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
