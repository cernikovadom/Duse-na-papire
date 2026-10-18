import React, { useState } from 'react';
import { X, Check, Bell, ShoppingBag, ExternalLink } from 'lucide-react';
import { ProductItem } from '../content';

interface InterestModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: ProductItem | null;
  mode: 'notify' | 'buy';
}

export const InterestModal: React.FC<InterestModalProps> = ({
  isOpen,
  onClose,
  product,
  mode,
}) => {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen || !product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSuccess(true);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setEmail('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#2C2520]/40 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#FAF8F5] rounded-[8px] border border-[#D9C9B8] max-w-lg w-full p-6 sm:p-8 relative shadow-[0_12px_40px_rgba(44,37,32,0.12)]">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-1.5 rounded text-[#2C2520] hover:text-[#8C7B6B] hover:bg-[#EDE5D8] transition-colors cursor-pointer"
          aria-label="Zavřít"
        >
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>

        {mode === 'notify' ? (
          <div>
            <div className="w-10 h-10 rounded-full bg-[#EDE5D8] border border-[#D9C9B8] flex items-center justify-center mb-4 text-[#8C7B6B]">
              <Bell className="w-5 h-5 stroke-[1.5]" />
            </div>

            <h3 className="font-serif-cormorant text-2xl font-light text-[#2C2520] mb-1">
              Dát mi vědět o spuštění
            </h3>
            <p className="font-sans-jost text-xs uppercase tracking-wider text-[#8C7B6B] mb-4">
              {product.title} {product.price ? `· ${product.price}` : ''}
            </p>

            {isSuccess ? (
              <div className="bg-[#EDE5D8]/70 border border-[#D9C9B8] rounded-[6px] p-6 text-center">
                <Check className="w-8 h-8 text-[#2C2520] mx-auto mb-2" />
                <h4 className="font-serif-cormorant text-xl text-[#2C2520] mb-1">
                  Mám to poznamenané
                </h4>
                <p className="font-sans-jost text-xs text-[#2C2520]/80 mb-4">
                  Jakmile materiál dokončím a zveřejním, pošlu vám zprávu s přednostním přístupem.
                </p>
                <button onClick={handleClose} className="btn-primary !text-xs !py-2">
                  Rozumím
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="font-sans-jost text-sm text-[#2C2520]/80 leading-relaxed">
                  {product.shortDescription}
                </p>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8C7B6B] font-sans-jost mb-1">
                    Váš e-mail
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jmeno@domena.cz"
                    className="w-full bg-[#FAF8F5] border border-[#D9C9B8] rounded-[5px] px-3.5 py-2.5 text-sm font-sans-jost text-[#2C2520] focus:outline-none focus:border-[#2C2520]"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="btn-secondary !text-xs !py-2"
                  >
                    Zrušit
                  </button>
                  <button type="submit" className="btn-primary !text-xs !py-2">
                    Uložit a upozornit
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          <div>
            <div className="w-10 h-10 rounded-full bg-[#EDE5D8] border border-[#D9C9B8] flex items-center justify-center mb-4 text-[#8C7B6B]">
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            </div>

            <h3 className="font-serif-cormorant text-2xl font-light text-[#2C2520] mb-1">
              {product.title}
            </h3>
            {product.price && (
              <p className="font-serif-cormorant text-xl text-[#2C2520] mb-4">
                Cena: {product.price}
              </p>
            )}

            <div className="space-y-4 text-sm font-sans-jost text-[#2C2520]/80 mb-6">
              <p>
                {product.longDescription || product.shortDescription}
              </p>
              {product.buttonLink && (
                <div className="p-3 bg-[#EDE5D8]/50 rounded border border-[#D9C9B8] text-xs text-[#8C7B6B]">
                  Odkaz: {product.buttonLink}
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <button
                type="button"
                onClick={handleClose}
                className="btn-secondary !text-xs !py-2.5"
              >
                Zavřít
              </button>
              <a
                href={product.buttonLink || '#'}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="btn-primary !text-xs !py-2.5 inline-flex items-center justify-center"
              >
                <span>{product.buttonLabel}</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
