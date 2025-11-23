import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, PhoneCall, MapPin, Clock4, Languages } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import i18n from '@/locales';
import logo from '@/assets/logo.png';

export function SiteHeader() {
  const { t } = useTranslation();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const currentLanguage = i18n.language;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const navLinks = [
    { label: t('header.nav.home'), href: '/' },
    { label: t('header.nav.about'), href: '/about' },
    { label: t('header.nav.services'), href: '/services' },
    { label: t('header.nav.projects'), href: '/projects' },
    { label: t('header.nav.contact'), href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-200/50 relative overflow-hidden">
      {/* 背景图片 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2000&q=80)',
        }}
      />
      {/* 渐变遮罩层，确保文字可读性 */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/95 via-emerald-500/90 to-emerald-400/85 backdrop-blur-sm" />
      
      <div className="relative mx-auto flex h-[120px] w-full max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 md:gap-4 z-10 flex-shrink-0">
          <img src={logo} alt={t('common.companyName')} className="h-12 w-12 md:h-16 md:w-16 xl:h-16 xl:w-16 object-contain drop-shadow-lg" />
          <div>
            <p className="text-xl md:text-2xl xl:text-4xl font-bold tracking-[0.08em] text-white drop-shadow-lg whitespace-nowrap">{t('common.companyName')}</p>
            <p className="text-xs md:text-sm xl:text-base font-medium text-emerald-50 drop-shadow-md whitespace-nowrap">{t('common.companyNameEn')}</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium xl:flex z-10 min-w-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'transition-colors hover:text-white drop-shadow-md whitespace-nowrap',
                isActive(link.href) ? 'text-white font-semibold' : 'text-emerald-50'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 xl:flex z-10 flex-shrink-0">
          <button
            onClick={() => changeLanguage(currentLanguage === 'zh-TW' ? 'en' : 'zh-TW')}
            className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium text-emerald-50 transition-colors hover:bg-white/20 hover:text-white backdrop-blur-sm"
            aria-label="切换语言"
          >
            <Languages className="h-4 w-4" />
            <span className="text-xs">{currentLanguage === 'zh-TW' ? 'EN' : '繁中'}</span>
          </button>
          <Button variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm" asChild>
            <Link to="/projects">{t('header.viewProjects')}</Link>
          </Button>
          <Button className="bg-white text-emerald-600 hover:bg-emerald-50 shadow-lg" asChild>
            <Link to="/contact">{t('header.contactUs')}</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="h-10 w-10 p-0 xl:hidden z-10" aria-label={t('header.openMenu')}>
              <Menu className="h-6 w-6 text-white drop-shadow-lg" />
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="bg-white px-4 pt-6">
            <div className="space-y-4">
              <div>
                <p className="text-base font-semibold text-slate-900">{t('common.companyName')}</p>
                <p className="text-sm text-slate-600">{t('common.companyTagline')}</p>
              </div>
              <nav className="flex flex-col gap-2 text-base font-medium text-slate-700">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'rounded-md px-2 py-2 hover:bg-slate-100',
                      isActive(link.href) ? 'text-slate-900 font-semibold' : 'text-slate-700'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="rounded-lg bg-slate-50 p-4 text-sm text-slate-600">
                <p className="mb-2 font-semibold text-slate-900">{t('footer.contactInfo')}</p>
                <div className="flex items-center gap-2">
                  <PhoneCall className="h-4 w-4 text-slate-500" />
                  <a href={`tel:${t('about.contactInfo.phone.value').replace(/\s/g, '')}`} className="hover:text-slate-900">
                    {t('about.contactInfo.phone.value')}
                  </a>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-slate-500" />
                  <span>{t('about.contactInfo.address.value')}</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Clock4 className="h-4 w-4 text-slate-500" />
                  <span>{t('contact.info.hours.value')}</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 border-slate-700 text-slate-900"
                  onClick={() => changeLanguage(currentLanguage === 'zh-TW' ? 'en' : 'zh-TW')}
                >
                  <Languages className="mr-2 h-4 w-4" />
                  {currentLanguage === 'zh-TW' ? 'EN' : '繁中'}
                </Button>
                <Button variant="outline" className="flex-1 border-slate-700 text-slate-900" asChild>
                  <Link to="/projects" onClick={() => setOpen(false)}>
                    {t('header.viewProjects')}
                  </Link>
                </Button>
                <Button className="flex-1 bg-emerald-500 text-white hover:bg-emerald-600" asChild>
                    <Link to="/contact" onClick={() => setOpen(false)}>
                      {t('header.contactUs')}
                    </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
