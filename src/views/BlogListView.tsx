import React from 'react';
import { ArrowLeft, Calendar, ArrowRight } from 'lucide-react';
import { siteContent, BlogPostItem } from '../content';
import { PlaceholderFrame } from '../components/PlaceholderFrame';

interface BlogListViewProps {
  onNavigateHome: () => void;
  onOpenPost: (post: BlogPostItem) => void;
}

export const BlogListView: React.FC<BlogListViewProps> = ({
  onNavigateHome,
  onOpenPost,
}) => {
  return (
    <main className="pt-32 pb-24 md:pt-40 md:pb-32 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Back navigation */}
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center text-xs font-sans-jost uppercase tracking-wider text-[#8C7B6B] hover:text-[#2C2520] transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Zpět na hlavní stránku</span>
        </button>

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="eyebrow mb-3 block">{siteContent.blog.eyebrow}</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#2C2520] font-serif-cormorant leading-tight mb-4">
            {siteContent.blog.title}
          </h1>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteContent.blog.posts.map((post) => (
            <article
              key={post.slug}
              onClick={() => onOpenPost(post)}
              className="group bg-[#FAF8F5]/90 rounded-[8px] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:bg-[#FAF8F5] hover:shadow-[0_16px_36px_rgba(44,37,32,0.06)] hover:-translate-y-0.5 cursor-pointer"
            >
              <div>
                <div className="p-4 pb-0">
                  <PlaceholderFrame
                    label={post.imagePlaceholder}
                    aspectRatio="landscape"
                    iconType="landscape"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center text-xs font-sans-jost text-[#8C7B6B] mb-3">
                    <Calendar className="w-3.5 h-3.5 mr-1.5 stroke-[1.5]" />
                    <span>{post.date}</span>
                  </div>

                  <h2 className="font-serif-cormorant text-2xl font-light text-[#2C2520] group-hover:text-[#8C7B6B] transition-colors leading-snug mb-3">
                    {post.title}
                  </h2>

                  <p className="font-sans-jost text-sm text-[#2C2520]/80 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <span className="text-xs uppercase tracking-wider font-medium text-[#2C2520] group-hover:text-[#8C7B6B] transition-colors inline-flex items-center">
                  <span>Přečíst článek</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};
