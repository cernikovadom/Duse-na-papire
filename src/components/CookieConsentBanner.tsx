import React, { useState, useEffect } from 'react';
import { ShieldCheck, Settings, X } from 'lucide-react';
import { siteContent } from '../content';
import { syncAnalyticsConsent, trackPageView } from '../analytics';

interface CookieSettings {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookieConsentBannerProps {
  forceOpenSettings?: boolean;
  onCloseSettings?: () => void;
}

export const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({
  forceOpenSettings = false,
  onCloseSettings,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem('duse_cookies_consent');
    if (!saved) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
      try {
        setSettings(JSON.parse(saved));
      } catch (e) {
        // fallback
      }
    }
  }, []);

  useEffect(() => {
    if (forceOpenSettings) {
      setIsModalOpen(true);
    }
  }, [forceOpenSettings]);

  const savePreferences = (customSettings: CookieSettings) => {
    localStorage.setItem('duse_cookies_consent', JSON.stringify(customSettings));
    setSettings(customSettings);
    syncAnalyticsConsent();
    trackPageView(window.location.pathname);
    setIsVisible(false);
    setIsModalOpen(false);
    if (onCloseSettings) onCloseSettings();
  };

  const handleAcceptAll = () => {
    savePreferences({ essential: true, analytics: true, marketing: true });
  };

  const handleRejectOptional = () => {
    savePreferences({ essential: true, analytics: false, marketing: false });
  };

  return (
    <>
      {/* Gentle Floating Banner at Bottom */}
      {isVisible && !isModalOpen && (
        <aside
          role="region"
          aria-label="Nastavení souborů cookies"
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-40 bg-[#FAF8F5]/95 backdrop-blur-md rounded-[10px] p-5 shadow-[0_12px_36px_rgba(44,37,32,0.1)] border border-[#D9C9B8]/40 animate-fadeIn"
        >
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center text-xs uppercase tracking-wider font-medium text-[#8C7B6B] font-sans-jost">
              <ShieldCheck className="w-4 h-4 mr-1.5 text-[#2C2520]" />
              <span>Cookies</span>
            </div>
            <button
              onClick={handleRejectOptional}
              className="text-[#8C7B6B] hover:text-[#2C2520] p-1 cursor-pointer"
              aria-label="Odmítnout a zavřít"
            >
              <X className="w-4 h-4 stroke-[1.5]" />
            </button>
          </div>

          <p className="font-sans-jost text-xs text-[#2C2520]/80 leading-relaxed mb-4">
            {siteContent.cookieBar.text}
          </p>

          <div className="flex items-center flex-wrap gap-2 pt-1 border-t border-[#D9C9B8]/40">
            <button
              onClick={handleRejectOptional}
              className="btn-secondary !py-1.5 !px-3 !text-xs"
            >
              {siteContent.cookieBar.secondaryButton}
            </button>
            <button
              onClick={handleAcceptAll}
              className="btn-primary !py-1.5 !px-3.5 !text-xs"
            >
              {siteContent.cookieBar.primaryButton}
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center text-xs font-sans-jost text-[#8C7B6B] hover:text-[#2C2520] px-2 py-1 cursor-pointer ml-auto"
            >
              <Settings className="w-3.5 h-3.5 mr-1" />
              <span>Nastavit</span>
            </button>
          </div>
        </aside>
      )}

      {/* Detailed Settings Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#2C2520]/40 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#FAF8F5] rounded-[8px] border border-[#D9C9B8] max-w-lg w-full p-6 sm:p-8 relative shadow-[0_12px_40px_rgba(44,37,32,0.12)]">
            <button
              onClick={() => {
                setIsModalOpen(false);
                if (onCloseSettings) onCloseSettings();
              }}
              className="absolute top-5 right-5 p-1.5 rounded text-[#2C2520] hover:text-[#8C7B6B] hover:bg-[#EDE5D8] cursor-pointer"
              aria-label="Zavřít nastavení"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>

            <h3 className="font-serif-cormorant text-2xl font-light text-[#2C2520] mb-2">
              Nastavení souborů cookies
            </h3>
            <p className="font-sans-jost text-xs text-[#2C2520]/80 mb-6 leading-relaxed">
              {siteContent.cookieBar.text}
            </p>

            <div className="space-y-4 mb-6">
              {/* Essential */}
              <div className="p-3.5 rounded bg-[#EDE5D8]/40 border border-[#D9C9B8] flex items-center justify-between">
                <div>
                  <h4 className="font-sans-jost text-xs font-semibold uppercase tracking-wider text-[#2C2520]">
                    Nezbytné cookies
                  </h4>
                  <p className="font-sans-jost text-xs text-[#8C7B6B] mt-0.5">
                    Nutné pro fungování stránek a bezpečnost.
                  </p>
                </div>
                <span className="text-xs font-sans-jost text-[#8C7B6B] italic shrink-0 ml-3">
                  Aktivní
                </span>
              </div>

              {/* Analytics */}
              <label className="p-3.5 rounded bg-[#FAF8F5] border border-[#D9C9B8] flex items-center justify-between cursor-pointer">
                <div>
                  <h4 className="font-sans-jost text-xs font-semibold uppercase tracking-wider text-[#2C2520]">
                    Analytické cookies
                  </h4>
                  <p className="font-sans-jost text-xs text-[#8C7B6B] mt-0.5">
                    Pomáhají mi pochopit, co vás na webu zajímá.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.analytics}
                  onChange={(e) =>
                    setSettings({ ...settings, analytics: e.target.checked })
                  }
                  className="rounded border-[#D9C9B8] text-[#2C2520] focus:ring-0 cursor-pointer accent-[#2C2520] ml-3"
                />
              </label>

              {/* Marketing */}
              <label className="p-3.5 rounded bg-[#FAF8F5] border border-[#D9C9B8] flex items-center justify-between cursor-pointer">
                <div>
                  <h4 className="font-sans-jost text-xs font-semibold uppercase tracking-wider text-[#2C2520]">
                    Marketingové cookies
                  </h4>
                  <p className="font-sans-jost text-xs text-[#8C7B6B] mt-0.5">
                    Umožňují přizpůsobení obsahu a zpráv o novinkách.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.marketing}
                  onChange={(e) =>
                    setSettings({ ...settings, marketing: e.target.checked })
                  }
                  className="rounded border-[#D9C9B8] text-[#2C2520] focus:ring-0 cursor-pointer accent-[#2C2520] ml-3"
                />
              </label>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#D9C9B8]/40">
              <button
                onClick={() => savePreferences(settings)}
                className="btn-primary !text-xs !py-2.5 !px-5"
              >
                Uložit nastavení
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
