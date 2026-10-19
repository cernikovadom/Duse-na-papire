import React from 'react';
import { Hero } from '../components/Hero';
import { BookSection } from '../components/BookSection';
import { BookJourneyTimeline } from '../components/BookJourneyTimeline';
import { CreatorShop } from '../components/CreatorShop';
import { ShortStories } from '../components/ShortStories';
import { BlogSection } from '../components/BlogSection';
import { AboutSection } from '../components/AboutSection';
import { PressAndTestimonials } from '../components/PressAndTestimonials';
import { NewsletterSection } from '../components/NewsletterSection';
import { StoryCardItem, BlogPostItem } from '../content';

interface HomeViewProps {
  onOpenSampleChapter: () => void;
  onOpenStory: (story: StoryCardItem) => void;
  onOpenPost: (post: BlogPostItem) => void;
  onViewAllPosts: () => void;
  onScrollToNewsletter: () => void;
  onNavigatePrivacy: () => void;
  onNavigate?: (path: string, anchor?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onOpenSampleChapter,
  onOpenStory,
  onOpenPost,
  onViewAllPosts,
  onScrollToNewsletter,
  onNavigatePrivacy,
  onNavigate,
}) => {
  const scrollToBook = () => {
    const el = document.getElementById('kniha');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      {/* 1. Hero Section */}
      <Hero
        onOpenSampleChapter={onOpenSampleChapter}
        onExploreBook={scrollToBook}
      />

      {/* 2. Book Section – Mléčné zuby duše */}
      <BookSection onOpenSampleChapter={onOpenSampleChapter} />

      {/* 3. The Book's Journey (Timeline) */}
      <BookJourneyTimeline />

      {/* 4. Pro tvůrce (Shop) */}
      <CreatorShop
        onScrollToNewsletter={onScrollToNewsletter}
        onNavigate={onNavigate}
        onNavigatePrivacy={onNavigatePrivacy}
      />

      {/* 5. Povídky – úsek Příběhy na jeden šálek čaje prozatím skryt */}
      {/* 
      <ShortStories
        onOpenStory={onOpenStory}
        onScrollToNewsletter={onScrollToNewsletter}
      /> 
      */}

      {/* 6. Povídání (Blog) */}
      <BlogSection
        onOpenPost={onOpenPost}
        onViewAllPosts={onViewAllPosts}
        onScrollToNewsletter={onScrollToNewsletter}
      />

      {/* 7. O mně */}
      <AboutSection />

      {/* 8. Napsali o mně – sekce prozatím skryta */}
      {/* <PressAndTestimonials /> */}

      {/* 9. Newsletter */}
      <NewsletterSection
        onOpenSampleChapter={onOpenSampleChapter}
        onNavigatePrivacy={onNavigatePrivacy}
      />
    </main>
  );
};
