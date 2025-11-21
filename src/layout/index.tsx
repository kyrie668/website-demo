import React from 'react';
import { useRoutes } from 'react-router';
import { routes } from '../route';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';
import { Toaster } from '@/components/ui/toaster';

const Layout: React.FC = () => {
  const element = useRoutes(routes);

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white">{element}</main>
      <SiteFooter />
      <Toaster />
    </>
  );
};

export default Layout;
