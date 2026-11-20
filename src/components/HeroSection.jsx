import React from 'react';
import { Heart, Sparkles, Star, ArrowDown } from 'lucide-react';
import { personalDetails } from '../data/memories';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/audio';

export default function HeroSection() {
  const handleOpenSurprise = () => {
    soundFx.playChime();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#F8C8DC', '#FADADD', '#E6D9F2', '#9D526F'],
    });

    const target = document.getElementById('gallery');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden"
    >
      {/* Soft Ambient Radial Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-pastelPink/35 via-lavender/30 to-babyPink/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Date Stamp & Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 border border-pastelPink/80 shadow-sm text-softBurgundy font-medium text-sm md:text-base mb-6 tracking-wide hover:shadow-md transition-shadow">
          <Sparkles className="w-4 h-4 text-warmRose animate-sparkle" />
          <span className="font-serif italic font-bold">A Special Day</span>
          <span className="w-1.5 h-1.5 rounded-full bg-softBurgundy/40"></span>
          <span className="font-handwritten text-lg font-bold text-softBurgundy">
            {personalDetails.displayDate}
          </span>
          <span className="text-sm">🎂</span>
        </div>

        {/* Main Heading */}
        <div className="relative mb-6">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-softBurgundy tracking-tight leading-[1.15]">
            Happy Birthday, <br />
            <span className="font-script text-5xl sm:text-7xl md:text-8xl text-warmRose block mt-2 hover:scale-105 transition-transform duration-300">
              My Bhummii! ♡
            </span>
          </h1>

          {/* Cute Floating Scrapbook Accents */}
          <div className="absolute -top-6 -right-6 sm:-right-10 text-2xl sm:text-3xl animate-float-medium select-none pointer-events-none">
            ✨
          </div>
          <div className="absolute -bottom-2 -left-4 sm:-left-8 text-2xl sm:text-3xl animate-float-slow select-none pointer-events-none">
            🎀
          </div>
        </div>

        {/* Subtitle */}
        <p className="font-serif italic text-lg sm:text-2xl text-softBurgundy/85 max-w-2xl mx-auto leading-relaxed mb-8">
          "{personalDetails.heroSubtitle}"
        </p>

        {/* Polaroid Scrapbook Teaser Card */}
        <div className="relative mb-10 group cursor-pointer" onClick={handleOpenSurprise}>
          <div className="washi-tape"></div>
          <div className="polaroid-card p-3 sm:p-4 rounded-xl rotate-[-2deg] max-w-xs sm:max-w-sm mx-auto border border-pastelPink/30">
            <div className="overflow-hidden rounded-lg bg-pastelPink/20 aspect-[4/3] flex items-center justify-center relative">
              <img
                src={personalDetails.heroTeaserImage || "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80"}
                alt="Bhummii Birthday Surprise"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-softBurgundy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-3">
                <span className="text-white text-xs font-medium px-3 py-1 bg-white/20 backdrop-blur-md rounded-full">
                  Click to begin 💗
                </span>
              </div>
            </div>
            <p className="font-handwritten text-xl text-softBurgundy text-center mt-3 font-semibold">
              To my favourite human in the whole universe 🌸
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-3">
          <button
            onClick={handleOpenSurprise}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-softBurgundy text-cream font-serif text-lg font-bold shadow-scrapbook hover:shadow-glow hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>{personalDetails.heroButtonText}</span>
            <Heart className="w-5 h-5 text-babyPink fill-babyPink group-hover:scale-125 transition-transform" />
          </button>
          
          <span className="text-xs font-handwritten text-softBurgundy/70 flex items-center gap-1">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            Scroll down to explore your world
          </span>
        </div>
      </div>
    </section>
  );
}
