import React from 'react';
import Navbar from './components/Navbar';
import FloatingDecorations from './components/FloatingDecorations';
import HeroSection from './components/HeroSection';
import PhotoGallery from './components/PhotoGallery';
import VideoGallery from './components/VideoGallery';
import TimelineSection from './components/TimelineSection';
import VintageLetterSection from './components/VintageLetterSection';
import BouquetSection from './components/BouquetSection';
import BirthdayCakeSection from './components/BirthdayCakeSection';
import ReasonsSection from './components/ReasonsSection';
import FinalSection from './components/FinalSection';

export default function App() {
  return (
    <div className="relative min-h-screen text-softBurgundy selection:bg-pastelPink selection:text-softBurgundy">
      {/* Background Floating Scrapbook Accents */}
      <FloatingDecorations />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Experience Flow */}
      <main className="relative z-10 space-y-12 md:space-y-20">
        <HeroSection />
        <PhotoGallery />
        <VideoGallery />
        <TimelineSection />
        <VintageLetterSection />
        <BouquetSection />
        <BirthdayCakeSection />
        <ReasonsSection />
      </main>

      {/* Final Birthday Screen & Footer */}
      <FinalSection />
    </div>
  );
}
