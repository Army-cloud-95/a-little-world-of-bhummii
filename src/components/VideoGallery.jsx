import React, { useState, useRef, useEffect } from 'react';
import { videoGallery } from '../data/memories';
import { Play, X, Film, Volume2, Sparkles, Clock } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const dialogRef = useRef(null);
  const videoPlayerRef = useRef(null);

  const openVideo = (video) => {
    soundFx.playChime();
    setSelectedVideo(video);
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  };

  const closeVideo = () => {
    if (videoPlayerRef.current) {
      videoPlayerRef.current.pause();
    }
    if (dialogRef.current && dialogRef.current.open) {
      dialogRef.current.close();
    }
    setSelectedVideo(null);
  };

  // Pointer position light dismiss check
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
        closeVideo();
      }
    };

    const handleKeyDown = (e) => {
      if (dialog.open && e.key === 'Escape') {
        closeVideo();
      }
    };

    dialog.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      dialog.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedVideo]);

  return (
    <section id="videos" className="py-20 px-4 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-lavender/60 text-softBurgundy text-xs font-semibold uppercase tracking-wider mb-3">
          <Film className="w-3.5 h-3.5" />
          <span>Cinematic Moments</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-softBurgundy tracking-tight mb-4">
          Our Memories in Motion
        </h2>
        <p className="font-serif italic text-base sm:text-lg text-softBurgundy/80">
          The laughs you can hear, the funny little clips, and the chaos captured on camera.
        </p>
      </div>

      {/* Video Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {videoGallery.map((video) => (
          <div
            key={video.id}
            onClick={() => openVideo(video)}
            className="polaroid-card p-4 rounded-2xl cursor-pointer group flex flex-col justify-between border border-pastelPink/30"
          >
            {/* Video Thumbnail Container */}
            <div className="relative overflow-hidden rounded-xl aspect-video bg-neutral-900 mb-4">
              <img
                src={video.thumbnail}
                alt={video.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-75"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80";
                }}
              />

              {/* Glowing Custom Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/90 text-softBurgundy flex items-center justify-center shadow-lg group-hover:scale-115 group-hover:bg-softBurgundy group-hover:text-cream transition-all duration-300">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </div>
              </div>

              {/* Duration badge */}
              {video.duration && (
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-sm text-white text-[11px] font-mono flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {video.duration}
                </div>
              )}
            </div>

            {/* Video Title & Caption */}
            <div className="text-center px-1">
              <h3 className="font-serif text-xl font-bold text-softBurgundy group-hover:text-warmRose transition-colors">
                {video.title}
              </h3>
              <p className="font-serif italic text-sm text-softBurgundy/75 mt-1.5 leading-snug">
                "{video.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Accessible Video Modal */}
      <dialog
        ref={dialogRef}
        aria-labelledby="video-modal-title"
        className="rounded-3xl shadow-2xl p-0 backdrop:backdrop-blur-md outline-none"
      >
        {selectedVideo && (
          <div 
            className="bg-neutral-950 text-white rounded-3xl p-4 sm:p-6 max-w-4xl mx-auto flex flex-col relative w-[92vw]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-warmRose animate-pulse"></span>
                <h3 id="video-modal-title" className="font-serif font-bold text-base sm:text-lg text-cream">
                  {selectedVideo.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeVideo}
                className="p-1.5 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black flex items-center justify-center">
              <video
                ref={videoPlayerRef}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
                poster={selectedVideo.thumbnail}
              >
                <source src={selectedVideo.videoUrl} type="video/mp4" />
                <source src={selectedVideo.fallbackUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Footer Caption */}
            <div className="pt-3 text-center sm:text-left">
              <p className="font-serif italic text-sm text-neutral-300">
                {selectedVideo.caption}
              </p>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
