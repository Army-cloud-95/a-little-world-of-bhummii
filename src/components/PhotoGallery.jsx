import React, { useState, useRef, useEffect } from 'react';
import { photoGallery } from '../data/memories';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Heart, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function PhotoGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const dialogRef = useRef(null);

  // Open modal
  const openPhoto = (index) => {
    soundFx.playChime();
    setSelectedIndex(index);
    setIsZoomed(false);
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  };

  // Close modal
  const closeModal = () => {
    if (dialogRef.current && dialogRef.current.open) {
      dialogRef.current.close();
    }
    setSelectedIndex(null);
    setIsZoomed(false);
  };

  // Prev / Next navigation
  const prevPhoto = (e) => {
    e?.stopPropagation();
    soundFx.playNote(440, 0.2);
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : photoGallery.length - 1));
    setIsZoomed(false);
  };

  const nextPhoto = (e) => {
    e?.stopPropagation();
    soundFx.playNote(523.25, 0.2);
    setSelectedIndex((prev) => (prev < photoGallery.length - 1 ? prev + 1 : 0));
    setIsZoomed(false);
  };

  // Light dismiss outside click handler per Modern Web Guidance
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handlePointerDown = (e) => {
      const rect = dialog.getBoundingClientRect();
      const isOutside =
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom;
      if (isOutside) {
        closeModal();
      }
    };

    const handleKeyDown = (e) => {
      if (dialog.open) {
        if (e.key === 'ArrowLeft') prevPhoto();
        if (e.key === 'ArrowRight') nextPhoto();
        if (e.key === 'Escape') closeModal();
      }
    };

    dialog.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      dialog.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex]);

  const activePhoto = selectedIndex !== null ? photoGallery[selectedIndex] : null;

  return (
    <section id="gallery" className="py-20 px-4 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-pastelPink/40 text-softBurgundy text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Scrapbook Collection</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-softBurgundy tracking-tight mb-4">
          Our Little Universe
        </h2>
        <p className="font-serif italic text-base sm:text-lg text-softBurgundy/80">
          A glimpse into the snapshots, candid smiles, and golden memories we've woven together.
        </p>
      </div>

      {/* Polaroid Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {photoGallery.map((item, index) => (
          <div
            key={item.id}
            onClick={() => openPhoto(index)}
            className="polaroid-card p-4 sm:p-5 rounded-2xl relative cursor-pointer group flex flex-col justify-between"
            style={{
              transform: `rotate(${item.rotation || '0deg'})`,
            }}
          >
            {/* Washi Tape Accent */}
            <div
              className={`washi-tape ${
                index % 2 === 0 ? 'washi-tape-lavender' : ''
              }`}
            />

            {/* Photo Container */}
            <div className="relative overflow-hidden rounded-xl bg-pastelPink/20 aspect-[4/5] mb-4">
              <img
                src={item.url}
                alt={item.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = item.fallbackUrl;
                }}
              />

              {/* Tag Badge */}
              {item.tag && (
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-softBurgundy shadow-sm">
                  {item.tag}
                </div>
              )}

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-softBurgundy/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white/90 text-softBurgundy text-xs font-semibold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                  <ZoomIn className="w-3.5 h-3.5" /> Click to View
                </span>
              </div>
            </div>

            {/* Handwritten Caption & Date */}
            <div className="px-1 text-center">
              <p className="font-handwritten text-2xl font-bold text-softBurgundy tracking-wide leading-tight group-hover:text-warmRose transition-colors">
                {item.caption}
              </p>
              {item.date && (
                <span className="text-xs text-softBurgundy/60 font-serif italic block mt-1">
                  — {item.date} —
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Accessible Native Lightbox Modal */}
      <dialog
        ref={dialogRef}
        aria-labelledby="lightbox-caption"
        className="rounded-3xl shadow-2xl p-0 backdrop:backdrop-blur-md outline-none"
      >
        {activePhoto && (
          <div 
            className="bg-white/95 border border-pastelPink/60 rounded-3xl p-4 sm:p-6 max-w-4xl mx-auto flex flex-col relative max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Controls */}
            <div className="flex items-center justify-between mb-3 border-b border-pastelPink/30 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold bg-pastelPink/50 text-softBurgundy px-3 py-1 rounded-full">
                  {selectedIndex + 1} / {photoGallery.length}
                </span>
                <span className="text-xs text-softBurgundy/70 hidden sm:inline">
                  {activePhoto.tag}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="p-2 rounded-full hover:bg-pastelPink/40 text-softBurgundy transition-colors"
                  aria-label={isZoomed ? "Zoom out" : "Zoom in"}
                >
                  {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="p-2 rounded-full hover:bg-softBurgundy hover:text-white text-softBurgundy transition-colors"
                  aria-label="Close photo preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Image Display with Navigation Arrows */}
            <div className="relative flex-1 overflow-auto flex items-center justify-center min-h-[300px] max-h-[65vh] bg-cream/40 rounded-2xl p-2">
              <img
                src={activePhoto.url}
                alt={activePhoto.caption}
                className={`max-h-[60vh] max-w-full object-contain rounded-xl transition-all duration-300 ${
                  isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
                onError={(e) => {
                  e.target.src = activePhoto.fallbackUrl;
                }}
              />

              {/* Prev / Next buttons */}
              <button
                type="button"
                onClick={prevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 hover:bg-white text-softBurgundy shadow-md transition-all hover:scale-110"
                aria-label="Previous photograph"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={nextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 hover:bg-white text-softBurgundy shadow-md transition-all hover:scale-110"
                aria-label="Next photograph"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Footer Caption & Date */}
            <div className="pt-4 text-center">
              <h3
                id="lightbox-caption"
                className="font-handwritten text-2xl sm:text-3xl font-bold text-softBurgundy"
              >
                {activePhoto.caption}
              </h3>
              {activePhoto.date && (
                <p className="font-serif italic text-sm text-softBurgundy/70 mt-1">
                  Captured: {activePhoto.date}
                </p>
              )}
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
