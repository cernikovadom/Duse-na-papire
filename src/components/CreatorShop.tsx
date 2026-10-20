import React, { useState } from 'react';
import { ChevronDown, Check, Bell, ShoppingBag, Info, X, ExternalLink, Download } from 'lucide-react';
import { siteContent, ProductItem } from '../content';
import { PlaceholderFrame } from './PlaceholderFrame';

interface CreatorShopProps {
  onScrollToNewsletter: () => void;
  onNavigate?: (path: string, anchor?: string) => void;
  onNavigatePrivacy?: () => void;
}

export const CreatorShop: React.FC<CreatorShopProps> = ({
  onScrollToNewsletter,
  onNavigate,
  onNavigatePrivacy,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [detailProduct, setDetailProduct] = useState<ProductItem | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="pro-tvrce" className="scroll-mt-24 pt-16 pb-20 md:pt-24 md:pb-28 bg-gradient-to-b from-[#FAF8F5] via-[#EDE5D8]/35 to-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2C2520] font-serif-cormorant leading-tight mb-4">
            {siteContent.shop.title}
          </h2>
          <p className="font-serif-cormorant text-xl italic text-[#2C2520]/80">
            {siteContent.shop.intro}
          </p>
        </div>

        {/* 3 Product Cards Grid – volné přechody, žádné ohraničující rámečky */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 md:mb-28">
          {siteContent.shop.products.map((product) => {
            const isComingSoon = product.status === 'coming_soon';

            return (
              <div
                key={product.id}
                className="bg-[#FAF8F5]/90 rounded-[8px] p-7 flex flex-col justify-between transition-all duration-300 hover:bg-[#FAF8F5] hover:shadow-[0_16px_36px_rgba(44,37,32,0.06)] hover:-translate-y-0.5"
              >
                <div>
                  {/* Image / Mockup */}
                  <div className="mb-6 relative">
                    {product.image ? (
                      product.id === 'kampan-pointa' ? (
                        <a
                          href="/pruvodce-kampan-pointa"
                          onClick={(e) => {
                            if (onNavigate) {
                              e.preventDefault();
                              onNavigate('/pruvodce-kampan-pointa');
                            }
                          }}
                          className="block relative aspect-[16/10] rounded-[8px] overflow-hidden bg-[#EDE5D8]/60 shadow-[0_4px_16px_rgba(44,37,32,0.06)] group/img cursor-pointer"
                        >
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                          />
                        </a>
                      ) : product.id === 'sablony-autori' ? (
                        <a
                          href="/sablony-pro-autory"
                          onClick={(e) => {
                            if (onNavigate) {
                              e.preventDefault();
                              onNavigate('/sablony-pro-autory');
                            }
                          }}
                          className="block relative aspect-[16/10] rounded-[8px] overflow-hidden bg-[#EDE5D8]/60 shadow-[0_4px_16px_rgba(44,37,32,0.06)] group/img cursor-pointer"
                        >
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                          />
                        </a>
                      ) : (
                        <div className="relative aspect-[16/10] rounded-[8px] overflow-hidden bg-[#EDE5D8]/60 shadow-[0_4px_16px_rgba(44,37,32,0.06)]">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      )
                    ) : (
                      <PlaceholderFrame
                        label={product.imagePlaceholder}
                        aspectRatio="landscape"
                        iconType="book"
                      />
                    )}
                    {product.badge && (
                      <div
                        className={`absolute ${
                          product.badgePosition === 'right' ? 'top-3 right-3' : 'top-3 left-3'
                        } bg-[#FAF8F5]/95 backdrop-blur-xs px-2.5 py-1 rounded-[4px] text-[11px] font-sans-jost uppercase tracking-wider text-[#54463A] font-medium shadow-xs pointer-events-none`}
                      >
                        {product.badge}
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-cormorant text-2xl font-light text-[#2C2520] leading-snug mb-3">
                    {product.title}
                  </h3>

                  {/* Short description */}
                  <p className="font-sans-jost text-sm text-[#2C2520]/80 leading-relaxed mb-4">
                    {product.shortDescription}
                  </p>

                  {/* "Více" link for products with detailed long description */}
                  {product.longDescription && (
                    product.id === 'kampan-pointa' ? (
                      <a
                        href="/pruvodce-kampan-pointa"
                        onClick={(e) => {
                          if (onNavigate) {
                            e.preventDefault();
                            onNavigate('/pruvodce-kampan-pointa');
                          }
                        }}
                        className="inline-flex items-center text-xs font-sans-jost text-[#8C7B6B] hover:text-[#2C2520] mb-4 cursor-pointer underline underline-offset-4 decoration-[#D9C9B8]"
                      >
                        <Info className="w-3.5 h-3.5 mr-1" />
                        <span>Více informací o průvodci</span>
                      </a>
                    ) : product.id === 'sablony-autori' ? (
                      <a
                        href="/sablony-pro-autory"
                        onClick={(e) => {
                          if (onNavigate) {
                            e.preventDefault();
                            onNavigate('/sablony-pro-autory');
                          }
                        }}
                        className="inline-flex items-center text-xs font-sans-jost text-[#8C7B6B] hover:text-[#2C2520] mb-4 cursor-pointer underline underline-offset-4 decoration-[#D9C9B8]"
                      >
                        <Info className="w-3.5 h-3.5 mr-1" />
                        <span>Více informací o šablonách</span>
                      </a>
                    ) : (
                      <button
                        onClick={() => setDetailProduct(product)}
                        className="inline-flex items-center text-xs font-sans-jost text-[#8C7B6B] hover:text-[#2C2520] mb-4 cursor-pointer underline underline-offset-4 decoration-[#D9C9B8]"
                      >
                        <Info className="w-3.5 h-3.5 mr-1" />
                        <span>Více informací</span>
                      </button>
                    )
                  )}
                </div>

                {/* Card Footer: Price & Action */}
                <div className="pt-4 border-t border-[#D9C9B8]/40 flex items-center justify-between mt-auto">
                  {product.price ? (
                    <div>
                      <span className="font-sans-jost text-xs uppercase tracking-wider text-[#8C7B6B] block">
                        CENA
                      </span>
                      <span className="font-serif-cormorant text-2xl font-light text-[#2C2520]">
                        {product.price}
                      </span>
                    </div>
                  ) : (
                    <div />
                  )}

                  {isComingSoon ? (
                    <button
                      onClick={onScrollToNewsletter}
                      className="btn-secondary !py-2 !px-3.5 !text-xs group"
                    >
                      <Bell className="w-3.5 h-3.5 mr-1.5 text-[#8C7B6B]" />
                      <span>{product.buttonLabel}</span>
                    </button>
                  ) : product.id === 'kampan-pointa' ? (
                    <a
                      href={product.buttonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary !py-2 !px-4 !text-xs group inline-flex items-center cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 mr-1.5" />
                      <span>Stáhnout</span>
                    </a>
                  ) : product.id === 'sablony-autori' ? (
                    <a
                      href="/sablony-pro-autory"
                      onClick={(e) => {
                        if (onNavigate) {
                          e.preventDefault();
                          onNavigate('/sablony-pro-autory');
                        }
                      }}
                      className="btn-primary !py-2 !px-4 !text-xs group inline-flex items-center"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 mr-1.5" />
                      <span>{product.buttonLabel}</span>
                    </a>
                  ) : (
                    <a
                      href={product.buttonLink || '#'}
                      target={product.buttonLink?.startsWith('http') ? '_blank' : undefined}
                      rel={product.buttonLink?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      onClick={(e) => {
                        if (product.buttonLink?.startsWith('[')) {
                          e.preventDefault();
                          setDetailProduct(product);
                        }
                      }}
                      className="btn-primary !py-2 !px-4 !text-xs group inline-flex items-center"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 mr-1.5" />
                      <span>{product.buttonLabel}</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Pro koho to je Section – volně v prostoru, bez rámečku */}
        <div className="bg-[#FAF8F5]/85 rounded-[10px] p-8 sm:p-12 mb-16 md:mb-20 shadow-[0_4px_24px_rgba(44,37,32,0.02)]">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-serif-cormorant text-2xl sm:text-3xl font-light text-[#2C2520] mb-6 text-center">
              {siteContent.shop.whoIsItForTitle}
            </h3>

            <div className="space-y-4">
              {siteContent.shop.whoIsItForBullets.map((bullet, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#EDE5D8] flex items-center justify-center mr-3 mt-1 shrink-0">
                    <Check className="w-3 h-3 text-[#2C2520] stroke-[2.5]" />
                  </div>
                  <p className="font-sans-jost text-base text-[#2C2520]/85 leading-relaxed">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Accordion – čistý otevřený seznam bez krabiček a rámečků */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-serif-cormorant text-2xl sm:text-3xl font-light text-[#2C2520] mb-8 text-center">
            {siteContent.shop.faqTitle}
          </h3>

          <div className="divide-y divide-[#D9C9B8]/40">
            {siteContent.shop.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div key={index} className="py-2 transition-colors">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-4 px-2 text-left flex items-center justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8C7B6B] hover:text-[#8C7B6B] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif-cormorant text-xl font-normal text-[#2C2520]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#8C7B6B] transition-transform duration-200 shrink-0 ml-4 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-2 pb-5 pt-1 text-sm text-[#2C2520]/80 leading-relaxed font-sans-jost">
                      {faq.isEmailAnswer ? (
                        <p>
                          Napište mi na{' '}
                          <a
                            href={`mailto:${siteContent.meta.email}`}
                            className="underline underline-offset-2 hover:text-[#2C2520] text-[#2C2520] font-medium"
                          >
                            {siteContent.meta.email}
                          </a>
                          , ráda odpovím.
                        </p>
                      ) : (
                        <p>{faq.answer}</p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {detailProduct && (
        <div
          className="fixed inset-0 z-50 bg-[#2C2520]/40 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#FAF8F5] rounded-[10px] max-w-lg w-full p-6 sm:p-8 relative shadow-[0_20px_50px_rgba(44,37,32,0.15)]">
            <button
              onClick={() => setDetailProduct(null)}
              className="absolute top-5 right-5 p-1.5 rounded text-[#2C2520] hover:text-[#8C7B6B] hover:bg-[#EDE5D8] cursor-pointer"
              aria-label="Zavřít detail"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>

            <span className="eyebrow mb-2 block">{siteContent.shop.eyebrow}</span>
            <h3 className="font-serif-cormorant text-3xl font-light text-[#2C2520] mb-2 leading-snug">
              {detailProduct.title}
            </h3>

            {detailProduct.price && (
              <p className="font-serif-cormorant text-2xl font-light text-[#2C2520] mb-4">
                {detailProduct.price}
              </p>
            )}

            <div className="space-y-3 font-sans-jost text-sm text-[#2C2520]/80 leading-relaxed mb-6">
              <p>{detailProduct.shortDescription}</p>
              {detailProduct.longDescription && (
                <p className="text-xs text-[#8C7B6B] italic pt-2 border-t border-[#D9C9B8]/40">
                  {detailProduct.longDescription}
                </p>
              )}
              {detailProduct.id === 'sablony-autori' && (
                <div className="pt-1">
                  <a
                    href="/sablony-pro-autory"
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        setDetailProduct(null);
                        onNavigate('/sablony-pro-autory');
                      }
                    }}
                    className="inline-flex items-center text-xs font-sans-jost text-[#8C7B6B] hover:text-[#2C2520] underline underline-offset-4 decoration-[#D9C9B8]"
                  >
                    <Info className="w-3.5 h-3.5 mr-1" />
                    <span>Přejít na celou podstránku o šablonách</span>
                  </a>
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#D9C9B8]/40">
              <button
                onClick={() => setDetailProduct(null)}
                className="btn-secondary !text-xs !py-2"
              >
                Zavřít
              </button>

              {detailProduct.status === 'available' ? (
                detailProduct.id === 'kampan-pointa' ? (
                  <a
                    href={detailProduct.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setDetailProduct(null)}
                    className="btn-primary !text-xs !py-2 inline-flex items-center cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 mr-1.5" />
                    <span>Stáhnout</span>
                  </a>
                ) : (
                  <a
                    href={detailProduct.buttonLink || '#'}
                    target={detailProduct.buttonLink?.startsWith('http') ? '_blank' : undefined}
                    rel={detailProduct.buttonLink?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={() => {
                      setDetailProduct(null);
                    }}
                    className="btn-primary !text-xs !py-2 inline-flex items-center"
                  >
                    <span>{detailProduct.buttonLabel}</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                )
              ) : (
                <button
                  onClick={() => {
                    setDetailProduct(null);
                    onScrollToNewsletter();
                  }}
                  className="btn-primary !text-xs !py-2 inline-flex items-center"
                >
                  <Bell className="w-3.5 h-3.5 mr-1.5" />
                  <span>Dát mi vědět</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
