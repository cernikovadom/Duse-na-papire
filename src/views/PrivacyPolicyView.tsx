import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { siteContent } from '../content';

interface PrivacyPolicyViewProps {
  onNavigateHome: () => void;
}

export const PrivacyPolicyView: React.FC<PrivacyPolicyViewProps> = ({
  onNavigateHome,
}) => {
  return (
    <main className="pt-32 pb-24 md:pt-40 md:pb-32 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center text-xs font-sans-jost uppercase tracking-wider text-[#8C7B6B] hover:text-[#2C2520] transition-colors mb-10 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Zpět na hlavní stránku</span>
        </button>

        <header className="mb-12 pb-6 border-b border-[#D9C9B8]/50">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2C2520] font-serif-cormorant leading-tight mb-2">
            {siteContent.legalPages.privacy.title}
          </h1>
        </header>

        <div className="max-w-[720px] font-sans-jost text-base sm:text-lg text-[#2C2520]/85 leading-[1.8]">
          <p>{siteContent.legalPages.privacy.body}</p>
        </div>
      </div>
    </main>
  );
};
