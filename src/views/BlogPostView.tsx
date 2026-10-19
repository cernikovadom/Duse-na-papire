import React from 'react';
import { ArrowLeft, Share2, BookOpen } from 'lucide-react';
import { BlogPostItem, siteContent } from '../content';
import { PlaceholderFrame } from '../components/PlaceholderFrame';

interface BlogPostViewProps {
  post: BlogPostItem;
  onNavigateBack: () => void;
  onOpenSampleChapter: () => void;
}

export const BlogPostView: React.FC<BlogPostViewProps> = ({
  post,
  onNavigateBack,
  onOpenSampleChapter,
}) => {
  return (
    <main className="pt-32 pb-24 md:pt-40 md:pb-32 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Back navigation */}
        <button
          onClick={onNavigateBack}
          className="inline-flex items-center text-xs font-sans-jost uppercase tracking-wider text-[#8C7B6B] hover:text-[#2C2520] transition-colors mb-10 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Zpět na přehled článků</span>
        </button>

        {/* Article Header */}
        <header className="mb-12 text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2C2520] font-serif-cormorant leading-[1.18] mb-6">
            {post.title}
          </h1>

          <p className="font-sans-jost text-base sm:text-lg text-[#8C7B6B] leading-relaxed">
            {post.excerpt}
          </p>

          <div className="w-12 h-[1px] bg-[#D9C9B8] mx-auto mt-8" />
        </header>

        {/* Featured Image */}
        {post.image ? (
          <div className="mb-14 max-w-3xl mx-auto rounded-[10px] overflow-hidden shadow-[0_16px_40px_rgba(44,37,32,0.08)] bg-[#EDE5D8]/40">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover max-h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        ) : (
          <div className="mb-14 max-w-3xl mx-auto">
            <PlaceholderFrame
              label={post.imagePlaceholder}
              aspectRatio="landscape"
              iconType="landscape"
            />
          </div>
        )}

        {/* Editorial Body: [Text článku] */}
        <article className="max-w-[680px] mx-auto space-y-6 font-sans-jost text-base sm:text-lg text-[#2C2520]/90 leading-relaxed mb-16">
          {Array.isArray(post.content) ? (
            post.content.map((paragraph, idx) => (
              <p key={idx} className="font-sans-jost leading-relaxed">{paragraph}</p>
            ))
          ) : (
            (() => {
              const renderFormattedText = (text: string) => {
                const parts: React.ReactNode[] = [];
                const regex = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
                let lastIndex = 0;
                let match;

                while ((match = regex.exec(text)) !== null) {
                  if (match.index > lastIndex) {
                    parts.push(text.slice(lastIndex, match.index));
                  }
                  const token = match[0];
                  if (token.startsWith('**') && token.endsWith('**')) {
                    parts.push(
                      <strong key={match.index} className="font-semibold text-[#2C2520]">
                        {token.slice(2, -2)}
                      </strong>
                    );
                  } else if (token.startsWith('*') && token.endsWith('*')) {
                    parts.push(
                      <em key={match.index} className="italic text-[#2C2520]">
                        {token.slice(1, -1)}
                      </em>
                    );
                  }
                  lastIndex = regex.lastIndex;
                }
                if (lastIndex < text.length) {
                  parts.push(text.slice(lastIndex));
                }
                return parts;
              };

              return post.content
                .trim()
                .split('\n\n')
                .map((block, idx) => {
                  const trimmed = block.trim();

                  // Standalone markdown heading: ## Heading or ### Heading
                  if (/^#{1,3}\s+/.test(trimmed)) {
                    const headingTitle = trimmed.replace(/^#{1,3}\s+/, '');
                    return (
                      <h2 key={idx} className="font-sans-jost text-xl sm:text-2xl font-medium text-[#2C2520] pt-6 first:pt-0 mb-2">
                        {renderFormattedText(headingTitle)}
                      </h2>
                    );
                  }

                  // Numbered or named section with following text on next line
                  const headingMatch = trimmed.match(/^(\d+\.\s+[^\n]+|Co bych řekla[^\n]*)\n([\s\S]*)$/);
                  if (headingMatch) {
                    return (
                      <div key={idx} className="pt-4 first:pt-0">
                        <h2 className="font-sans-jost text-xl sm:text-2xl font-medium text-[#2C2520] mb-3">
                          {renderFormattedText(headingMatch[1])}
                        </h2>
                        <p className="font-sans-jost whitespace-pre-line leading-relaxed">
                          {renderFormattedText(headingMatch[2])}
                        </p>
                      </div>
                    );
                  }

                  return (
                    <p key={idx} className="font-sans-jost whitespace-pre-line leading-relaxed">
                      {renderFormattedText(trimmed)}
                    </p>
                  );
                });
            })()
          )}
        </article>

        {/* Author sign-off & Book box */}
        <div className="max-w-[680px] mx-auto pt-8 border-t border-[#D9C9B8]/60 mb-16">
          <div className="flex items-center justify-between">
            <span className="font-serif-cormorant italic text-lg text-[#8C7B6B]">
              Dominika Černíková · Duše na papíře
            </span>
            <button
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                }
              }}
              className="inline-flex items-center text-xs font-sans-jost text-[#8C7B6B] hover:text-[#2C2520] transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 mr-1.5" />
              <span>Sdílet odkaz</span>
            </button>
          </div>
        </div>

        {/* Bottom invitation to book – volný přechod */}
        <div className="max-w-2xl mx-auto bg-[#EDE5D8]/50 rounded-[10px] p-8 sm:p-10 text-center shadow-xs">
          <h3 className="font-serif-cormorant text-2xl font-light text-[#2C2520] mb-2">
            {siteContent.book.title}
          </h3>
          <p className="font-sans-jost text-sm text-[#2C2520]/80 mb-6 max-w-md mx-auto leading-relaxed">
            {siteContent.book.tagline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={siteContent.book.primaryButtonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !text-xs !py-2.5"
            >
              {siteContent.book.primaryButton}
            </a>
            <button
              onClick={onOpenSampleChapter}
              className="btn-secondary !text-xs !py-2.5"
            >
              <BookOpen className="w-3.5 h-3.5 mr-1.5 text-[#8C7B6B]" />
              <span>{siteContent.book.secondaryButton}</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
