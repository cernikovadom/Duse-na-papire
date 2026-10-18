import React from 'react';
import { Feather, BookOpen, Image as ImageIcon, Camera } from 'lucide-react';

interface PlaceholderFrameProps {
  label: string;
  aspectRatio?: 'portrait' | 'book' | 'landscape' | 'square';
  className?: string;
  iconType?: 'leaf' | 'book' | 'portrait' | 'landscape';
}

export const PlaceholderFrame: React.FC<PlaceholderFrameProps> = ({
  label,
  aspectRatio = 'landscape',
  className = '',
  iconType = 'landscape',
}) => {
  const aspectClasses = {
    portrait: 'aspect-[3/4]',
    book: 'aspect-[2/3] max-w-[320px]',
    landscape: 'aspect-[16/10]',
    square: 'aspect-square',
  }[aspectRatio];

  const renderIcon = () => {
    switch (iconType) {
      case 'leaf':
        return <Feather className="w-5 h-5 text-[#8C7B6B]/80 stroke-[1.5]" />;
      case 'book':
        return <BookOpen className="w-5 h-5 text-[#8C7B6B]/80 stroke-[1.5]" />;
      case 'portrait':
        return <Camera className="w-5 h-5 text-[#8C7B6B]/80 stroke-[1.5]" />;
      default:
        return <ImageIcon className="w-5 h-5 text-[#8C7B6B]/80 stroke-[1.5]" />;
    }
  };

  return (
    <div
      className={`relative w-full ${aspectClasses} rounded-[8px] bg-[#EDE5D8]/75 flex flex-col items-center justify-center p-6 text-center overflow-hidden transition-all duration-300 hover:bg-[#EDE5D8] ${className}`}
      role="img"
      aria-label={label}
    >
      {/* Jemná přirozená papírová textura bez ostrých rámečků */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(#2C2520_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative z-10 flex flex-col items-center justify-center max-w-[280px]">
        <div className="w-11 h-11 rounded-full bg-[#FAF8F5]/90 shadow-xs flex items-center justify-center mb-3">
          {renderIcon()}
        </div>
        <p className="font-sans-jost text-xs uppercase tracking-[0.18em] text-[#8C7B6B] font-medium leading-relaxed">
          {label}
        </p>
      </div>
    </div>
  );
};
