import React, { useEffect } from 'react';
import { X, BookOpen } from 'lucide-react';
import { FreeGuideForm } from './FreeGuideForm';

interface FreeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigatePrivacy?: () => void;
}

export const FreeGuideModal: React.FC<FreeGuideModalProps> = ({
  isOpen,
  onClose,
  onNavigatePrivacy,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="free-guide-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2C2520]/60 backdrop-blur-xs transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FAF8F5] rounded-[12px] p-6 sm:p-10 shadow-[0_20px_50px_rgba(44,37,32,0.18)] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[#8C7B6B] hover:text-[#2C2520] p-1.5 rounded-full hover:bg-[#EDE5D8]/50 transition-colors cursor-pointer"
          aria-label="Zavřít okno"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6 pr-6 pl-6 sm:pr-0 sm:pl-0">
          <div className="w-10 h-10 rounded-full bg-[#EDE5D8] mx-auto mb-4 flex items-center justify-center text-[#2C2520]">
            <BookOpen className="w-4 h-4 stroke-[1.75]" />
          </div>
          <h2
            id="free-guide-modal-title"
            className="font-serif-cormorant text-2xl sm:text-3xl font-light text-[#2C2520] mb-3 leading-tight"
          >
            Stáhnout průvodce zdarma
          </h2>
          <p className="font-sans-jost text-sm sm:text-base text-[#2C2520]/80 leading-relaxed">
            Zadej svůj e-mail a průvodce ti obratem pošlu. Občas ti napíšu i něco z tvůrčího zákulisí nebo dám vědět o novinkách pro autory. Odhlásit se můžeš kdykoli.
          </p>
        </div>

        {/* Form */}
        <FreeGuideForm
          variant="cream"
          onNavigatePrivacy={() => {
            onClose();
            if (onNavigatePrivacy) {
              onNavigatePrivacy();
            }
          }}
        />
      </div>
    </div>
  );
};
