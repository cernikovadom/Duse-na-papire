import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteContent, BlogPostItem } from '../content';
import { PlaceholderFrame } from './PlaceholderFrame';

interface BlogSectionProps {
  onOpenPost: (post: BlogPostItem) => void;
  onViewAllPosts: () => void;
  onScrollToNewsletter?: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  onOpenPost,
  onViewAllPosts,
  onScrollToNewsletter,
}) => {
  return (
    <section id="povidani" className="scroll-mt-24 pt-20 pb-20 md:pt-28 md:pb-28 bg-gradient-to-b from-[#FAF8F5] via-[#EDE5D8]/40 to-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
          <div>
            <span className="eyebrow mb-3 block">{siteContent.blog.eyebrow}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2C2520] font-serif-cormorant leading-tight">
              {siteContent.blog.title}
            </h2>
          </div>

          <button
            onClick={onViewAllPosts}
            className="mt-6 md:mt-0 inline-flex items-center text-sm font-sans-jost text-[#2C2520] hover:text-[#8C7B6B] transition-colors border-b border-[#2C2520] hover:border-[#8C7B6B] pb-0.5 self-start md:self-auto cursor-pointer"
          >
            <span>{siteContent.blog.viewAllLinkText}</span>
            <ArrowRight className="w-4 h-4 ml-1.5 stroke-[1.5]" />
          </button>
        </div>

        {/* 3 Latest Post Cards – volné přechody, žádné ohraničující rámečky */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteContent.blog.posts.slice(0, 3).map((post) => (
            <article
              key={post.slug}
              className="group bg-[#FAF8F5] border border-[#D9C9B8]/50 rounded-[8px] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_16px_36px_rgba(44,37,32,0.08)] hover:-translate-y-0.5 cursor-pointer"
              onClick={() => onOpenPost(post)}
            >
              <div>
                {/* Image */}
                <div className="p-4 pb-0">
                  {post.image ? (
                    <div className="relative aspect-[16/10] rounded-[6px] overflow-hidden bg-[#EDE5D8]/40 shadow-[0_2px_8px_rgba(44,37,32,0.04)]">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ) : (
                    <PlaceholderFrame
                      label={post.imagePlaceholder}
                      aspectRatio="landscape"
                      iconType="landscape"
                    />
                  )}
                </div>

                <div className="p-6">
                  {/* Title */}
                  <h3 className="font-serif-cormorant text-2xl font-light text-[#2C2520] group-hover:text-[#8C7B6B] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="font-sans-jost text-sm text-[#2C2520]/80 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read post link */}
              <div className="px-6 pb-6 pt-2">
                <span className="inline-flex items-center text-xs uppercase tracking-wider font-medium text-[#2C2520] group-hover:text-[#8C7B6B] transition-colors">
                  <span>Přečíst článek</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Note below articles – Plynulý přechod k odběru */}
        {onScrollToNewsletter && (
          <div className="text-center max-w-xl mx-auto mt-14 pt-8 border-t border-[#D9C9B8]/40">
            <p className="font-serif-cormorant text-lg italic text-[#8C7B6B]">
              Nové texty, úvahy a pohledy do tvůrčího zákulisí posílám čtenářům v e-mailových dopisech.
            </p>
            <button
              type="button"
              onClick={onScrollToNewsletter}
              className="mt-3 text-xs uppercase tracking-wider text-[#2C2520] hover:text-[#8C7B6B] transition-colors underline underline-offset-4 decoration-[#D9C9B8] font-sans-jost cursor-pointer font-medium"
            >
              Přihlásit se k odběru
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
