import React, { useState } from 'react';
import { Mail, Check, BookOpen, ArrowRight } from 'lucide-react';
import { siteContent } from '../content';

interface NewsletterSectionProps {
  onOpenSampleChapter: () => void;
  onNavigatePrivacy: () => void;
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  onOpenSampleChapter,
  onNavigatePrivacy,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedGift, setSelectedGift] = useState<'prvni-kapitola' | 'pruvodce-predprodej'>('prvni-kapitola');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);

    if (!trimmedEmail || !isValidEmail || !consent) {
      setErrorMessage(siteContent.newsletter.errorMessage);
      return;
    }

    setErrorMessage(null);
    setIsSubmitting(true);

    const endpoint = siteContent.newsletter.endpoints[selectedGift];

    try {
      const formData = new FormData();
      formData.append('fields[email]', trimmedEmail);
      if (name.trim()) {
        formData.append('fields[name]', name.trim());
      }

      await fetch(endpoint, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

      setIsSubmitted(true);
    } catch {
      setErrorMessage(siteContent.newsletter.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="scroll-mt-24 pt-16 pb-20 md:pt-24 md:pb-28 bg-gradient-to-b from-[#FAF8F5] to-[#EDE5D8]/70">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="bg-[#FAF8F5] rounded-[12px] p-8 sm:p-12 md:p-16 text-center shadow-[0_16px_44px_rgba(44,37,32,0.04)]">
          <div className="w-12 h-12 rounded-full bg-[#EDE5D8] mx-auto mb-6 flex items-center justify-center">
            <Mail className="w-5 h-5 text-[#8C7B6B] stroke-[1.5]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2C2520] font-serif-cormorant leading-tight mb-4">
            {siteContent.newsletter.title}
          </h2>

          <p className="font-sans-jost text-base sm:text-lg text-[#2C2520]/80 max-w-xl mx-auto leading-relaxed mb-8">
            {siteContent.newsletter.text}
          </p>

          {isSubmitted ? (
            <div className="bg-[#EDE5D8]/60 rounded-[8px] p-8 text-center max-w-lg mx-auto">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] mx-auto mb-3 flex items-center justify-center text-[#2C2520]">
                <Check className="w-5 h-5 stroke-[2]" />
              </div>
              <p className="font-sans-jost text-base text-[#2C2520] mb-6 leading-relaxed">
                {selectedGift === 'prvni-kapitola'
                  ? 'Děkuji, že jste tady. Do e-mailu vám právě letí první kapitola knihy.'
                  : 'Děkuji, že jste tady. Průvodce vám právě letí do e-mailové schránky. Za pár minut ho najdete ve své poště (pokud nedorazí, mrkněte do spamu).'}
              </p>
              {selectedGift === 'prvni-kapitola' && (
                <button
                  onClick={onOpenSampleChapter}
                  className="btn-primary !text-xs !py-2.5 inline-flex items-center cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span>Přečíst první kapitolu</span>
                </button>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto text-left">
              {errorMessage && (
                <div className="mb-4 p-3 rounded-[5px] bg-red-50 text-xs text-red-700 font-sans-jost">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="newsletter-name" className="block text-xs uppercase tracking-wider text-[#8C7B6B] font-sans-jost mb-1.5">
                    {siteContent.newsletter.nameLabel}
                  </label>
                  <input
                    id="newsletter-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Vaše jméno"
                    className="w-full bg-[#FAF8F5] border border-[#D9C9B8]/70 rounded-[5px] px-4 py-3 text-sm font-sans-jost text-[#2C2520] placeholder:text-[#8C7B6B]/60 focus:outline-none focus:border-[#2C2520]"
                  />
                </div>

                <div>
                  <label htmlFor="newsletter-email" className="block text-xs uppercase tracking-wider text-[#8C7B6B] font-sans-jost mb-1.5">
                    {siteContent.newsletter.emailLabel} <span className="text-[#2C2520]">*</span>
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Váš e-mail"
                    className="w-full bg-[#FAF8F5] border border-[#D9C9B8]/70 rounded-[5px] px-4 py-3 text-sm font-sans-jost text-[#2C2520] placeholder:text-[#8C7B6B]/60 focus:outline-none focus:border-[#2C2520]"
                  />
                </div>
              </div>

              {/* Gift Selection (Two Radios) */}
              <div className="mb-5">
                <span className="block text-xs uppercase tracking-wider text-[#8C7B6B] font-sans-jost mb-2">
                  Dárek k odběru
                </span>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 rounded-[5px] border border-[#D9C9B8]/70 bg-[#FAF8F5] cursor-pointer transition-colors hover:border-[#2C2520]/60 select-none">
                    <input
                      type="radio"
                      name="newsletter-gift"
                      value="prvni-kapitola"
                      checked={selectedGift === 'prvni-kapitola'}
                      onChange={() => setSelectedGift('prvni-kapitola')}
                      className="text-[#2C2520] focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#2C2520]"
                    />
                    <span className="font-sans-jost text-sm text-[#2C2520]">
                      První kapitola knihy Mléčné zuby duše
                    </span>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-[5px] border border-[#D9C9B8]/70 bg-[#FAF8F5] cursor-pointer transition-colors hover:border-[#2C2520]/60 select-none">
                    <input
                      type="radio"
                      name="newsletter-gift"
                      value="pruvodce-predprodej"
                      checked={selectedGift === 'pruvodce-predprodej'}
                      onChange={() => setSelectedGift('pruvodce-predprodej')}
                      className="text-[#2C2520] focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#2C2520]"
                    />
                    <span className="font-sans-jost text-sm text-[#2C2520]">
                      Průvodce Jak zvládnout předprodej knihy
                    </span>
                  </label>
                </div>
              </div>

              {/* Consent checkbox with link to /ochrana-osobnich-udaju */}
              <div className="mb-6">
                <label className="flex items-start cursor-pointer select-none text-xs text-[#2C2520]/75 font-sans-jost leading-relaxed">
                  <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 mr-2.5 rounded border-[#D9C9B8] text-[#2C2520] focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#2C2520]"
                  />
                  <span>
                    {siteContent.newsletter.consentPrefix}
                    <button
                      type="button"
                      onClick={onNavigatePrivacy}
                      className="underline underline-offset-2 hover:text-[#2C2520] text-[#2C2520] font-medium inline cursor-pointer"
                    >
                      {siteContent.newsletter.consentLinkText}
                    </button>
                    {siteContent.newsletter.consentSuffix}
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full sm:w-auto !py-3 !px-8 text-sm group cursor-pointer"
                >
                  <span>{isSubmitting ? 'Odesílám...' : siteContent.newsletter.buttonText}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
