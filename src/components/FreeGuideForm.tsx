import React, { useState } from 'react';
import { Check, ArrowRight, AlertCircle } from 'lucide-react';
import { siteContent } from '../content';

interface FreeGuideFormProps {
  onNavigatePrivacy?: () => void;
  className?: string;
  variant?: 'sand' | 'cream';
  onSuccess?: () => void;
}

export const FreeGuideForm: React.FC<FreeGuideFormProps> = ({
  onNavigatePrivacy,
  className = '',
  variant = 'sand',
  onSuccess,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const product =
    siteContent.shop.products.find((p) => p.id === 'kampan-pointa') ||
    siteContent.shop.products[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);

    if (!trimmedEmail || !isValidEmail || !consent) {
      setErrorMessage('Něco se nepovedlo. Zkuste to prosím znovu.');
      return;
    }

    setErrorMessage(null);
    setIsSubmitting(true);

    const endpoint =
      product.freeDelivery?.endpoint ||
      'https://assets.mailerlite.com/jsonp/2393780/forms/201475959156639036/subscribe';

    try {
      const formData = new FormData();
      formData.append('ml-submit', '1');
      formData.append('anticsrf', 'true');
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
      if (onSuccess) {
        onSuccess();
      }
    } catch {
      setErrorMessage('Něco se nepovedlo. Zkuste to prosím znovu.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrivacyClick = (e: React.MouseEvent) => {
    if (onNavigatePrivacy) {
      e.preventDefault();
      onNavigatePrivacy();
    }
  };

  const inputBgClass =
    variant === 'cream'
      ? 'bg-white border-[#D9C9B8]'
      : 'bg-[#FAF8F5] border-[#D9C9B8]/70';

  if (isSubmitted) {
    return (
      <div className={`transition-opacity duration-500 ease-out opacity-100 py-4 text-center ${className}`}>
        <div className="w-12 h-12 rounded-full bg-[#FAF8F5] mx-auto mb-4 flex items-center justify-center text-[#2C2520] shadow-xs">
          <Check className="w-6 h-6 stroke-[2]" />
        </div>
        <h3 className="font-serif-cormorant text-2xl sm:text-3xl font-light text-[#2C2520] mb-3">
          Průvodce je na cestě
        </h3>
        <p className="font-sans-jost text-base text-[#2C2520]/80 max-w-md mx-auto leading-relaxed">
          Ještě jeden krok: potvrďte prosím svůj e-mail v zprávě, kterou jsem vám právě poslala. Hned potom vám přijde průvodce.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`text-left ${className}`}>
      {errorMessage && (
        <div className="mb-5 p-3.5 rounded-[6px] bg-red-50/90 border border-red-200/60 flex items-center gap-2 text-xs sm:text-sm text-red-700 font-sans-jost">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="guide-name"
            className="block text-xs uppercase tracking-wider text-[#8C7B6B] font-sans-jost mb-1.5"
          >
            Jméno
          </label>
          <input
            id="guide-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Vaše jméno (nepovinné)"
            className={`w-full border rounded-[5px] px-4 py-3 text-sm font-sans-jost text-[#2C2520] placeholder:text-[#8C7B6B]/60 focus:outline-none focus:border-[#2C2520] transition-colors ${inputBgClass}`}
          />
        </div>

        <div>
          <label
            htmlFor="guide-email"
            className="block text-xs uppercase tracking-wider text-[#8C7B6B] font-sans-jost mb-1.5"
          >
            E-mail <span className="text-[#2C2520]">*</span>
          </label>
          <input
            id="guide-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Váš e-mail"
            className={`w-full border rounded-[5px] px-4 py-3 text-sm font-sans-jost text-[#2C2520] placeholder:text-[#8C7B6B]/60 focus:outline-none focus:border-[#2C2520] transition-colors ${inputBgClass}`}
          />
        </div>
      </div>

      {/* Consent Checkbox */}
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
            Souhlasím se zasíláním průvodce a občasných novinek a se{' '}
            <a
              href="/ochrana-osobnich-udaju"
              onClick={handlePrivacyClick}
              className="underline underline-offset-2 hover:text-[#2C2520] text-[#2C2520] font-medium inline"
            >
              zpracováním osobních údajů
            </a>
            .
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full sm:w-auto !py-3 !px-8 text-sm group cursor-pointer inline-flex items-center justify-center gap-2"
        >
          <span>{isSubmitting ? 'Odesílám...' : 'Poslat průvodce'}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </form>
  );
};
