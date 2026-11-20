import React from 'react';
import { timelineEvents } from '../data/memories';
import { Heart, Sparkles, Calendar, Bookmark } from 'lucide-react';

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-20 px-4 max-w-5xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-pastelPink/40 text-softBurgundy text-xs font-semibold uppercase tracking-wider mb-3">
          <Bookmark className="w-3.5 h-3.5" />
          <span>Our Storybook</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-softBurgundy tracking-tight mb-4">
          A Little Timeline of Us
        </h2>
        <p className="font-serif italic text-base sm:text-lg text-softBurgundy/80">
          The chapters that made us who we are today — editable memories of our journey.
        </p>
      </div>

      {/* Vertical Scrapbook Timeline Ribbon */}
      <div className="relative">
        {/* Center Dotted Line */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 border-l-2 border-dashed border-warmRose/40 pointer-events-none" />

        <div className="space-y-12">
          {timelineEvents.map((event, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={event.id}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                } gap-6 md:gap-12`}
              >
                {/* Center Node / Stamp Pin */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-cream border-2 border-warmRose shadow-md flex items-center justify-center text-lg z-10 transition-transform hover:scale-125">
                  <span>{event.sticker || '🌸'}</span>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] bg-white/90 backdrop-blur-sm p-6 sm:p-7 rounded-3xl border border-pastelPink/60 shadow-scrapbook hover:shadow-glow transition-all duration-300 relative group ${
                    isEven ? 'md:text-left' : 'md:text-left'
                  }`}
                >
                  {/* Washi Tape Corner */}
                  <div
                    className={`washi-tape ${
                      isEven ? 'washi-tape-corner-right' : 'washi-tape-corner-left'
                    }`}
                  />

                  {/* Chapter Tag & Date */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-babyPink text-softBurgundy">
                      {event.tag}
                    </span>
                    <span className="text-xs font-serif italic text-softBurgundy/70 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-warmRose" />
                      {event.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-softBurgundy mb-2 group-hover:text-warmRose transition-colors">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm sm:text-base text-softBurgundy/85 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
