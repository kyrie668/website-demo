import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router';
import { routes } from '../route';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';
import { Toaster } from '@/components/ui/toaster';
import { MessageCircle, Facebook, ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FloatingSocialLinks = () => {
  const { t } = useTranslation();
  
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-30 flex-col gap-3 flex">
      <a
        href={`https://wa.me/${t('about.contactInfo.phone.value').replace(/\s|\+|\(|\)|-/g, '')}`}
        target="_blank"
        rel="noreferrer"
        className="grid h-12 w-12 place-items-center rounded-full bg-emerald-500 text-white shadow-lg transition hover:scale-105"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href={t('about.contactInfo.website.instagram')}
        target="_blank"
        rel="noreferrer"
        className="grid h-12 w-12 place-items-center rounded-full bg-blue-600 text-white shadow-lg transition hover:scale-105"
      >
        <Facebook className="h-5 w-5" />
      </a>
    </div>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 z-30 grid h-12 w-12 place-items-center rounded-full bg-emerald-600 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-emerald-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="滚动到顶部"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

const Layout: React.FC = () => {
  const element = useRoutes(routes);

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white">{element}</main>
      <SiteFooter />
      <FloatingSocialLinks />
      <ScrollToTop />
      <Toaster />
    </>
  );
};

export default Layout;
