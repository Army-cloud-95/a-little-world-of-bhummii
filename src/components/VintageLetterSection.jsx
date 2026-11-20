import React, { useState } from 'react';
import { letterContent } from '../data/memories';
import { Heart, Mail, Sparkles, Send, Stamp } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function VintageLetterSection() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLetter = () => {
    if (!isOpen) {
      soundFx.playPaperRustle();
      soundFx.playChime();
    }
    setIsOpen(!isOpen);
  };

  return (
    <section id="letter" className="py-24 px-4 max-w-4xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-babyPink/60 text-softBurgundy text-xs font-semibold uppercase tracking-wider mb-3">
          <Mail className="w-3.5 h-3.5" />
          <span>Sealed With Love</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-softBurgundy tracking-tight mb-4">
          A Letter for Bhummii
        </h2>
        <p className="font-serif italic text-base sm:text-lg text-softBurgundy/80">
          A handwritten keepsake sealed with friendship and memories.
        </p>
      </div>

      {/* Sealed Envelope Container */}
      <div className="flex flex-col items-center">
        {!isOpen ? (
          /* Sealed Envelope Graphic */
          <div
            onClick={toggleLetter}
            className="w-full max-w-md bg-gradient-to-br from-[#FFF4EA] to-[#FCE8D6] border-2 border-[#E8D1BE] rounded-3xl p-8 sm:p-10 shadow-vintage cursor-pointer transform hover:-translate-y-2 hover:rotate-1 transition-all duration-300 relative group overflow-hidden"
          >
            {/* Vintage Airmail Border Accent */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-pastelPink via-warmRose to-lavender opacity-80" />

            {/* Stamp in upper right */}
            <div className="absolute top-5 right-5 w-16 h-20 border-2 border-dashed border-[#C5A894] p-1.5 bg-white/70 rounded-md rotate-3 flex flex-col items-center justify-center text-center shadow-sm">
              <span className="text-xs">💌</span>
              <span className="text-[9px] font-mono tracking-widest text-softBurgundy font-bold mt-1">
                21 NOV
              </span>
              <span className="text-[8px] text-softBurgundy/60 uppercase">Bhummii</span>
            </div>

            {/* Prompt on envelope */}
            <div className="mt-8 mb-12 text-center">
              <span className="text-xs font-mono tracking-widest text-softBurgundy/60 uppercase block mb-1">
                Special Delivery
              </span>
              <h3 className="font-handwritten text-3xl sm:text-4xl font-bold text-softBurgundy">
                "{letterContent.envelopeTitle}"
              </h3>
            </div>

            {/* 3D Wax Seal with 'B' Monogram */}
            <div className="flex flex-col items-center justify-center">
              <div className="wax-seal w-20 h-20 flex items-center justify-center text-white cursor-pointer group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                <div className="flex flex-col items-center justify-center">
                  <span className="font-serif text-2xl font-bold italic tracking-tighter">
                    B
                  </span>
                  <span className="text-[10px] -mt-1">♡</span>
                </div>
              </div>
              <span className="text-xs font-handwritten text-softBurgundy mt-3 font-semibold group-hover:text-warmRose">
                Click the wax seal to break & open
              </span>
            </div>
          </div>
        ) : (
          /* Unfolded Vintage Handwritten Parchment */
          <div className="w-full max-w-2xl vintage-parchment rounded-3xl p-8 sm:p-12 md:p-16 border border-[#E8DACB] shadow-vintage relative animate-in fade-in zoom-in-95 duration-500">
            {/* Pressed Dried Flower & Stamp Corner */}
            <div className="flex justify-between items-start mb-8 pb-4 border-b border-softBurgundy/15">
              <div className="flex items-center gap-2">
                <span className="text-2xl select-none">🪻</span>
                <div>
                  <span className="text-xs font-mono tracking-widest text-softBurgundy/60 uppercase block">
                    Handcrafted Post
                  </span>
                  <span className="text-xs font-serif italic text-softBurgundy/80">
                    With endless love
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={toggleLetter}
                  className="px-3 py-1 rounded-full bg-pastelPink/40 text-softBurgundy text-xs font-medium hover:bg-pastelPink transition-colors"
                >
                  Fold Envelope ✉️
                </button>
              </div>
            </div>

            {/* Salutation */}
            <div className="font-handwritten text-3xl sm:text-4xl font-bold text-softBurgundy mb-6">
              {letterContent.salutation}
            </div>

            {/* Handwritten Letter Body */}
            <div className="font-letter text-lg sm:text-xl text-softBurgundy/90 leading-[2.1] whitespace-pre-line tracking-wide">
              {letterContent.body}
            </div>

            {/* Attached Bestie Polaroid Keepsake */}
            {letterContent.attachedPhoto && (
              <div className="my-8 flex justify-center sm:justify-end">
                <div className="polaroid-card p-3 rounded-xl rotate-[3deg] shadow-polaroid border border-pastelPink/40 max-w-[200px] relative">
                  <div className="washi-tape washi-tape-lavender" />
                  <div className="aspect-square rounded-lg overflow-hidden bg-pastelPink/30 mb-2">
                    <img
                      src={letterContent.attachedPhoto}
                      alt="Us Forever"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-handwritten text-center text-sm font-bold text-softBurgundy">
                    Forever Us ♡
                  </p>
                </div>
              </div>
            )}

            {/* Sign-Off */}
            <div className="mt-10 pt-6 border-t border-softBurgundy/15 flex flex-col items-end">
              <span className="font-script text-3xl sm:text-4xl text-warmRose font-bold">
                {letterContent.signOff}
              </span>
              {letterContent.postScript && (
                <p className="font-handwritten text-base text-softBurgundy/75 mt-3 italic text-right">
                  {letterContent.postScript}
                </p>
              )}
            </div>

            {/* Floating Sparkles in corner */}
            <div className="absolute bottom-4 left-6 text-xl animate-pulse">
              💗
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
