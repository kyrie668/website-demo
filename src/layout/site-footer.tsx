import { PhoneCall, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export function SiteFooter() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-800 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold tracking-[0.08em]">{t('common.companyName')}</p>
          <p className="text-sm font-medium text-white/70">{t('common.companyNameEn')}</p>
          <p className="mt-4 text-sm text-white/70">
            {t('footer.description')}
          </p>
        </div>
        <div>
          <p className="text-base font-semibold">{t('footer.quickLinks')}</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-white/70">
            <Link to="/" className="hover:text-white">
              {t('header.nav.home')}
            </Link>
            <Link to="/about" className="hover:text-white">
              {t('header.nav.about')}
            </Link>
            <Link to="/services" className="hover:text-white">
              {t('header.nav.services')}
            </Link>
            <Link to="/projects" className="hover:text-white">
              {t('header.nav.projects')}
            </Link>
            <Link to="/contact" className="hover:text-white">
              {t('header.nav.contact')}
            </Link>
          </div>
        </div>
        <div>
          <p className="text-base font-semibold">{t('footer.contactInfo')}</p>
          <div className="mt-4 space-y-3 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <PhoneCall className="h-4 w-4" />
              <a href={`tel:${t('about.contactInfo.phone.value').replace(/\s/g, '')}`} className="hover:text-white">
                {t('about.contactInfo.phone.value')}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${t('about.contactInfo.email.value')}`} className="hover:text-white">
                {t('about.contactInfo.email.value')}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{t('about.contactInfo.address.value')}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <span>© {currentYear} {t('common.companyNameEn')} {t('footer.copyright')}</span>
          <span>{t('footer.emergencyHotline')}：{t('about.contactInfo.phone.value')}</span>
        </div>
      </div>
    </footer>
  );
}
