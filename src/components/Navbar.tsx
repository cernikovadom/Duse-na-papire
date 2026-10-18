import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteContent } from '../content';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string, anchor?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const anchor = href.substring(1);
      if (currentPath === '/') {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        onNavigate('/', anchor);
      }
    } else {
      onNavigate(href);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md py-4 shadow-[0_4px_20px_rgba(44,37,32,0.04)]'
            : 'bg-[#FAF8F5]/70 backdrop-blur-[8px] py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => {
              if (currentPath === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                onNavigate('/');
              }
            }}
            className="text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8C7B6B]"
            aria-label="Přejít na úvodní stránku"
          >
            <span className="font-serif-cormorant text-2xl md:text-3xl font-light text-[#2C2520] tracking-tight group-hover:text-[#8C7B6B] transition-colors">
              {siteContent.meta.logoText}
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav
            aria-label="Hlavní navigace"
            className="hidden md:flex items-center space-x-1 lg:space-x-2 text-[15px] font-sans-jost"
          >
            {siteContent.navigation.map((item, index) => (
              <React.Fragment key={item.label}>
                {index > 0 && (
                  <span className="text-[#D9C9B8] select-none px-1.5" aria-hidden="true">
                    ·
                  </span>
                )}
                <button
                  onClick={() => handleLinkClick(item.href)}
                  className="px-2 py-1 text-[#2C2520] hover:text-[#8C7B6B] transition-colors cursor-pointer rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8C7B6B]"
                >
                  {item.label}
                </button>
              </React.Fragment>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#2C2520] hover:text-[#8C7B6B] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8C7B6B] cursor-pointer"
            aria-label={isMobileMenuOpen ? 'Zavřít navigační menu' : 'Otevřít navigační menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[1.5]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[1.5]" />
            )}
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#FAF8F5] flex flex-col justify-between p-8 md:hidden transition-opacity duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Mobilní navigace"
        >
          {/* Top Bar inside modal */}
          <div className="flex items-center justify-between">
            <span className="font-serif-cormorant text-2xl font-light text-[#2C2520]">
              {siteContent.meta.logoText}
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-[#2C2520] hover:text-[#8C7B6B] transition-colors cursor-pointer"
              aria-label="Zavřít menu"
            >
              <X className="w-7 h-7 stroke-[1.5]" />
            </button>
          </div>

          {/* Menu links list */}
          <nav className="flex flex-col items-center justify-center space-y-6 my-auto">
            {siteContent.navigation.map((item) => (
              <button
                key={item.label}
                onClick={() => handleLinkClick(item.href)}
                className="font-serif-cormorant text-3xl font-light text-[#2C2520] hover:text-[#8C7B6B] transition-colors py-1 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Bottom info in mobile menu */}
          <div className="text-center border-t border-[#D9C9B8]/60 pt-6">
            <p className="font-sans-jost text-xs uppercase tracking-[0.2em] text-[#8C7B6B] mb-2">
              {siteContent.meta.tagline}
            </p>
            <p className="font-sans-jost text-sm text-[#2C2520]/80">
              {siteContent.meta.email}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
