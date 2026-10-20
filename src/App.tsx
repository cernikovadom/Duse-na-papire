import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { BlogListView } from './views/BlogListView';
import { BlogPostView } from './views/BlogPostView';
import { StoryView } from './views/StoryView';
import { LegalTermsView } from './views/LegalTermsView';
import { PrivacyPolicyView } from './views/PrivacyPolicyView';
import { GuidePointaView } from './views/GuidePointaView';
import { TemplatesView } from './views/TemplatesView';
import { SampleChapterView } from './views/SampleChapterView';
import { CookieConsentBanner } from './components/CookieConsentBanner';
import { siteContent, BlogPostItem, StoryCardItem } from './content';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [activePostSlug, setActivePostSlug] = useState<string | null>(null);
  const [activeStorySlug, setActiveStorySlug] = useState<string | null>(null);

  // Modals state
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false);

  // Sync with browser navigation
  useEffect(() => {
    const parseUrl = () => {
      const path = window.location.pathname || '/';
      setCurrentPath(path);

      if (path.startsWith('/povidani/')) {
        const slug = path.replace('/povidani/', '');
        setActivePostSlug(slug);
      } else if (path.startsWith('/povidky/')) {
        const slug = path.replace('/povidky/', '');
        setActiveStorySlug(slug);
      } else {
        setActivePostSlug(null);
        setActiveStorySlug(null);
      }

      if (window.location.hash) {
        const anchor = window.location.hash.replace('#', '');
        setTimeout(() => {
          const el = document.getElementById(anchor);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      }
    };

    parseUrl();
    window.addEventListener('popstate', parseUrl);
    return () => window.removeEventListener('popstate', parseUrl);
  }, []);

  const navigateTo = (path: string, anchor?: string) => {
    window.history.pushState({}, '', path + (anchor ? `#${anchor}` : ''));
    setCurrentPath(path);

    if (path.startsWith('/povidani/')) {
      const slug = path.replace('/povidani/', '');
      setActivePostSlug(slug);
      setActiveStorySlug(null);
    } else if (path.startsWith('/povidky/')) {
      const slug = path.replace('/povidky/', '');
      setActiveStorySlug(slug);
      setActivePostSlug(null);
    } else {
      setActivePostSlug(null);
      setActiveStorySlug(null);
    }

    if (anchor) {
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToNewsletter = () => {
    if (currentPath !== '/') {
      navigateTo('/', 'kontakt');
    } else {
      const el = document.getElementById('kontakt');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenPost = (post: BlogPostItem) => {
    navigateTo(`/povidani/${post.slug}`);
  };

  const handleOpenStory = (story: StoryCardItem) => {
    navigateTo(`/povidky/${story.slug}`);
  };

  // Determine current active post or story
  const currentPost = activePostSlug
    ? siteContent.blog.posts.find(
        (p) =>
          p.slug === activePostSlug ||
          (activePostSlug === 'psani-mezi-kojenim-a-uspavanim' &&
            p.slug === 'psani-mezi-krmenim-a-uspavanim')
      ) || siteContent.blog.posts[0]
    : null;

  const currentStory = activeStorySlug
    ? siteContent.shortStories.cards.find((s) => s.slug === activeStorySlug) || siteContent.shortStories.cards[0]
    : null;

  const openSampleChapter = () => navigateTo('/prvni-kapitola');

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C2520] flex flex-col justify-between selection:bg-[#EDE5D8] selection:text-[#2C2520]">
      {/* Sticky Header */}
      <Navbar
        currentPath={currentPath}
        onNavigate={(path, anchor) => navigateTo(path, anchor)}
      />

      {/* Main View Router */}
      <div className="flex-1">
        {currentPath === '/' && (
          <HomeView
            onOpenSampleChapter={openSampleChapter}
            onOpenStory={handleOpenStory}
            onOpenPost={handleOpenPost}
            onViewAllPosts={() => navigateTo('/povidani')}
            onScrollToNewsletter={scrollToNewsletter}
            onNavigatePrivacy={() => navigateTo('/ochrana-osobnich-udaju')}
            onNavigate={(path, anchor) => navigateTo(path, anchor)}
          />
        )}

        {currentPath === '/pruvodce-kampan-pointa' && (
          <GuidePointaView
            onNavigateHome={() => navigateTo('/', 'pro-tvrce')}
            onNavigatePrivacy={() => navigateTo('/ochrana-osobnich-udaju')}
            onNavigateTerms={() => navigateTo('/obchodni-podminky')}
          />
        )}

        {(currentPath === '/sablony-pro-autory' || currentPath === '/sablony-autori') && (
          <TemplatesView
            onNavigateHome={() => navigateTo('/', 'pro-tvrce')}
            onNavigate={(path, anchor) => navigateTo(path, anchor)}
            onNavigatePrivacy={() => navigateTo('/ochrana-osobnich-udaju')}
            onNavigateTerms={() => navigateTo('/obchodni-podminky')}
          />
        )}

        {currentPath === '/povidani' && (
          <BlogListView
            onNavigateHome={() => navigateTo('/')}
            onOpenPost={handleOpenPost}
          />
        )}

        {currentPath.startsWith('/povidani/') && currentPost && (
          <BlogPostView
            post={currentPost}
            onNavigateBack={() => navigateTo('/povidani')}
            onOpenSampleChapter={openSampleChapter}
          />
        )}

        {(currentPath === '/prvni-kapitola' || currentPath === '/kapitola-zdarma') && (
          <SampleChapterView onNavigateBack={() => navigateTo('/', 'kniha')} />
        )}

        {currentPath.startsWith('/povidky/') && currentStory && (
          <StoryView
            story={currentStory}
            onNavigateBack={() => navigateTo('/', 'povidky')}
          />
        )}

        {currentPath === '/obchodni-podminky' && (
          <LegalTermsView
            onNavigateHome={() => navigateTo('/')}
            onNavigate={(path) => navigateTo(path)}
          />
        )}

        {currentPath === '/ochrana-osobnich-udaju' && (
          <PrivacyPolicyView
            onNavigateHome={() => navigateTo('/')}
            onNavigate={(path) => navigateTo(path)}
          />
        )}
      </div>

      {/* Footer */}
      <Footer
        onNavigate={(path) => navigateTo(path)}
        onOpenCookieSettings={() => setIsCookieSettingsOpen(true)}
      />

      {/* GDPR Cookie Consent Banner & Settings Modal */}
      <CookieConsentBanner
        forceOpenSettings={isCookieSettingsOpen}
        onCloseSettings={() => setIsCookieSettingsOpen(false)}
      />
    </div>
  );
}
