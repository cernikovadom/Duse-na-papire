import React from 'react';
import { ArrowLeft, Calendar, Share2, BookOpen } from 'lucide-react';
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
          <div className="flex items-center justify-center text-xs font-sans-jost text-[#8C7B6B] mb-4">
            <span className="inline-flex items-center">
              <Calendar className="w-3.5 h-3.5 mr-1" />
              {post.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2C2520] font-serif-cormorant leading-[1.18] mb-6">
            {post.title}
          </h1>

          <p className="font-serif-cormorant text-xl italic text-[#8C7B6B] leading-relaxed">
            {post.excerpt}
          </p>

          <div className="w-12 h-[1px] bg-[#D9C9B8] mx-auto mt-8" />
        </header>

        {/* Featured Image placeholder */}
        <div className="mb-14 max-w-3xl mx-auto">
          <PlaceholderFrame
            label={post.imagePlaceholder}
            aspectRatio="landscape"
            iconType="landscape"
          />
        </div>

        {/* Editorial Body: [Text článku] */}
        <article className="max-w-[680px] mx-auto space-y-6 font-sans-jost text-base sm:text-lg text-[#2C2520] leading-[1.8] mb-16">
          <p>{post.content}</p>
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
