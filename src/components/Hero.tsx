import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, BookOpen } from 'lucide-react';
import { siteContent } from '../content';

interface HeroProps {
  onOpenSampleChapter: () => void;
  onExploreBook: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSampleChapter, onExploreBook }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    motionQuery.addEventListener('change', handleMotionChange);

    // Check viewport mobile (< 768px)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleVideoPlaying = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden">
      {/* 1. Full-bleed Background Media Container */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Poster Image */}
        <img
          src={siteContent.hero.video.poster}
          alt={siteContent.hero.video.description}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />

        {/* Video Element (Natural colors, full opacity) */}
        {!isMobile && !prefersReducedMotion && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={siteContent.hero.video.poster}
            aria-label={siteContent.hero.video.description}
            onPlaying={handleVideoPlaying}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[1500ms] ease-out ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src={siteContent.hero.video.webm} type="video/webm" />
            <source src={siteContent.hero.video.mp4} type="video/mp4" />
          </video>
        )}

        {/* 2. Seamless Open Transitions (Volné přechody – ŽÁDNÉ rámečky ani krabice) */}
        {/* Mobile: Plynulý jemný krémový filtr */}
        <div className="md:hidden absolute inset-0 bg-[#FAF8F5]/80" />

        {/* Desktop: Plynulý celoplošný přechod zleva doprava bez jakýchkoli hran nebo rámečků */}
        <div className="hidden md:block absolute inset-0 bg-[linear-gradient(to_right,#FAF8F5_0%,#FAF8F5_22%,rgba(250,248,245,0.92)_35%,rgba(250,248,245,0.65)_48%,rgba(250,248,245,0.25)_62%,transparent_78%,transparent_100%)]" />

        {/* Měkký spodní přechod do sekce knihy */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FAF8F5] to-transparent" />
      </div>

      {/* 3. Hero Content (Volně v prostoru bez rámečku, boxu či ohraničení) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 pt-32 pb-20 md:pt-36 md:pb-24">
        <div className="max-w-[600px] flex flex-col items-start">
          <span className="font-sans-jost uppercase tracking-[0.22em] text-[#54463A] font-semibold text-xs mb-4">
            {siteContent.hero.eyebrow}
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#2C2520] leading-[1.08] mb-5 font-serif-cormorant tracking-tight">
            {siteContent.hero.title}
          </h1>

          <p className="font-serif-cormorant text-xl sm:text-2xl md:text-3xl italic text-[#2C2520] font-normal leading-relaxed mb-6">
            {siteContent.hero.subtitle}
          </p>

          <p className="font-sans-jost text-base sm:text-lg text-[#2C2520] font-normal leading-[1.8] max-w-[540px] mb-8">
            {siteContent.hero.text}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
            <button
              onClick={onExploreBook}
              className="btn-primary !bg-[#2C2520] !text-[#FAF8F5] shadow-xs hover:!bg-[#423831] group"
            >
              <span>{siteContent.hero.primaryButton}</span>
              <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform stroke-[1.5]" />
            </button>

            <button
              onClick={onOpenSampleChapter}
              className="btn-secondary !bg-[#FAF8F5]/90 !border-[#2C2520] !text-[#2C2520] shadow-xs hover:!bg-[#EDE5D8] group"
            >
              <BookOpen className="w-4 h-4 mr-2 text-[#54463A] stroke-[1.5]" />
              <span>{siteContent.hero.secondaryButton}</span>
            </button>
          </div>

          {/* Scroll Hint (Volně začleněný pod tlačítky, bez rámečku) */}
          <button
            onClick={onExploreBook}
            className="inline-flex items-center space-x-2.5 text-[#54463A] hover:text-[#2C2520] transition-colors group cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8C7B6B]"
            aria-label="Přejít na sekci Kniha"
          >
            <div className="w-[1px] h-5 bg-[#D9C9B8] relative overflow-hidden shrink-0">
              <div className="w-full h-2.5 bg-[#2C2520] animate-scrollHint motion-reduce:hidden" />
            </div>
            <span className="font-sans-jost text-[11px] uppercase tracking-[0.22em] font-medium group-hover:translate-x-0.5 transition-transform">
              Kniha
            </span>
            <ArrowDown className="w-3.5 h-3.5 text-[#54463A] group-hover:translate-y-0.5 transition-transform stroke-[1.5]" />
          </button>
        </div>
      </div>
    </section>
  );
};
