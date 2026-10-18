import React from 'react';
import { Instagram, Mail, ArrowUp } from 'lucide-react';
import { siteContent } from '../content';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenCookieSettings: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenCookieSettings,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF8F5] border-t border-[#D9C9B8] pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-[#D9C9B8]/50">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <span className="font-serif-cormorant text-2xl md:text-3xl font-light text-[#2C2520] mb-2">
              {siteContent.footer.logo}
            </span>
            <p className="font-serif-cormorant text-lg italic text-[#8C7B6B] mb-4">
              {siteContent.footer.tagline}
            </p>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 flex flex-col items-start space-y-3">
            <span className="eyebrow mb-1">Kontakt & sítě</span>
            
            <a
              href={`mailto:${siteContent.footer.email}`}
              className="inline-flex items-center text-sm font-sans-jost text-[#2C2520] hover:text-[#8C7B6B] transition-colors"
            >
              <Mail className="w-4 h-4 mr-2.5 text-[#8C7B6B] stroke-[1.5]" />
              <span>{siteContent.footer.email}</span>
            </a>

            <a
              href={siteContent.footer.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-sans-jost text-[#2C2520] hover:text-[#8C7B6B] transition-colors"
            >
              <Instagram className="w-4 h-4 mr-2.5 text-[#8C7B6B] stroke-[1.5]" />
              <span>{siteContent.footer.instagram}</span>
            </a>
          </div>

          {/* Quick legal links & back to top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between">
            <div className="flex flex-col items-start md:items-end space-y-2 text-sm font-sans-jost">
              <span className="eyebrow mb-1">Informace</span>
              <button
                onClick={() => onNavigate('/obchodni-podminky')}
                className="text-[#2C2520]/80 hover:text-[#2C2520] transition-colors cursor-pointer text-left md:text-right"
              >
                Obchodní podmínky
              </button>
              <button
                onClick={() => onNavigate('/ochrana-osobnich-udaju')}
                className="text-[#2C2520]/80 hover:text-[#2C2520] transition-colors cursor-pointer text-left md:text-right"
              >
                Zásady ochrany osobních údajů
              </button>
              <button
                onClick={onOpenCookieSettings}
                className="text-[#2C2520]/80 hover:text-[#2C2520] transition-colors cursor-pointer text-left md:text-right"
              >
                Cookies
              </button>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 md:mt-0 inline-flex items-center text-xs font-sans-jost text-[#8C7B6B] hover:text-[#2C2520] transition-colors cursor-pointer"
              aria-label="Zpět nahoru"
            >
              <span>Zpět nahoru</span>
              <ArrowUp className="w-3.5 h-3.5 ml-1 stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-sans-jost text-[#8C7B6B]">
          <p>{siteContent.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
