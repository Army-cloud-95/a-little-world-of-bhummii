import React, { useState } from 'react';
import { Volume2, VolumeX, Heart, Sparkles, Menu, X } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function Navbar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMusic = () => {
    const active = soundFx.toggleMusic();
    setIsPlaying(active);
  };

  const navLinks = [
    { label: 'Photos', href: '#gallery' },
    { label: 'Videos', href: '#videos' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Letter', href: '#letter' },
    { label: 'Bouquet', href: '#bouquet' },
    { label: 'Cake', href: '#cake' },
    { label: 'Why You', href: '#reasons' },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-40 px-4 max-w-6xl mx-auto">
      <nav className="bg-white/80 backdrop-blur-md border border-pastelPink/50 rounded-full px-5 py-2.5 shadow-scrapbook flex items-center justify-between transition-all">
        {/* Brand / Logo */}
        <a 
          href="#hero" 
          className="flex items-center gap-2 group font-serif text-lg md:text-xl font-bold text-softBurgundy tracking-wide"
        >
          <span className="w-8 h-8 rounded-full bg-pastelPink/50 flex items-center justify-center text-sm group-hover:scale-110 transition-transform">
            🌸
          </span>
          <span>Bhummii's World</span>
          <span className="text-xs font-handwritten px-2 py-0.5 rounded-full bg-babyPink text-softBurgundy font-normal hidden sm:inline-block">
            21 Nov ♡
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-softBurgundy/80">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-softBurgundy hover:font-semibold transition-all relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-softBurgundy rounded-full transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Audio Toggle & Mobile Menu */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleMusic}
            aria-label={isPlaying ? "Mute dreamy music" : "Play dreamy music"}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all shadow-sm ${
              isPlaying
                ? 'bg-softBurgundy text-cream shadow-glow animate-pulse-soft'
                : 'bg-pastelPink/40 text-softBurgundy hover:bg-pastelPink'
            }`}
          >
            {isPlaying ? (
              <>
                <Volume2 className="w-4 h-4 animate-bounce" />
                <span className="hidden sm:inline">Music: On ♫</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4" />
                <span className="hidden sm:inline">Play Melody ♫</span>
              </>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-1.5 rounded-full hover:bg-pastelPink/30 text-softBurgundy"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-2 p-4 bg-white/95 backdrop-blur-lg border border-pastelPink/60 rounded-3xl shadow-scrapbook flex flex-col gap-3 text-center animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="py-2 px-4 rounded-xl font-medium text-softBurgundy hover:bg-babyPink/50 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
