import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { siteContent, BlogPostItem } from '../content';
import { PlaceholderFrame } from './PlaceholderFrame';

interface BlogSectionProps {
  onOpenPost: (post: BlogPostItem) => void;
  onViewAllPosts: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  onOpenPost,
  onViewAllPosts,
}) => {
  return (
    <section id="povidani" className="scroll-mt-24 pt-16 pb-20 md:pt-24 md:pb-28 bg-gradient-to-b from-[#FAF8F5] via-[#EDE5D8]/25 to-[#FAF8F5]">
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
              className="group bg-[#FAF8F5]/90 rounded-[8px] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:bg-[#FAF8F5] hover:shadow-[0_16px_36px_rgba(44,37,32,0.06)] hover:-translate-y-0.5 cursor-pointer"
              onClick={() => onOpenPost(post)}
            >
              <div>
                {/* Image Placeholder */}
                <div className="p-4 pb-0">
                  <PlaceholderFrame
                    label={post.imagePlaceholder}
                    aspectRatio="landscape"
                    iconType="landscape"
                  />
                </div>

                <div className="p-6">
                  {/* Date metadata */}
                  <div className="flex items-center text-xs font-sans-jost text-[#8C7B6B] mb-3">
                    <Calendar className="w-3 h-3 mr-1.5 stroke-[1.5]" />
                    <span>{post.date}</span>
                  </div>

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
      </div>
    </section>
  );
};
