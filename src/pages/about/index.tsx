import { motion } from 'framer-motion';
import { ShieldCheck, Building2, Factory, Users, Wrench, Handshake, MapPin, PhoneCall, Mail, Instagram } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import logo from '@/assets/logo.png';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, amount: 0.3 },
};

const About = () => {
  const { t } = useTranslation();
  
  const values = [
    {
      title: t('about.values.safety.title'),
      description: t('about.values.safety.description'),
      icon: ShieldCheck,
    },
    {
      title: t('about.values.craftsmanship.title'),
      description: t('about.values.craftsmanship.description'),
      icon: Wrench,
    },
    {
      title: t('about.values.integrity.title'),
      description: t('about.values.integrity.description'),
      icon: Handshake,
    },
  ];

  const stats = [
    { value: '20+', label: t('about.stats.experience') },
    { value: '280+', label: t('about.stats.clients') },
    { value: '3,800+', label: t('about.stats.projects') },
    { value: t('about.stats.warrantyValue'), label: t('about.stats.warranty') },
  ];

  const contactInfo = [
    {
      title: t('about.contactInfo.address.title'),
      value: t('about.contactInfo.address.value'),
      href: 'https://maps.app.goo.gl/search?q=大角咀合桃街2號褔星工業大廈9F+A2',
      icon: MapPin,
    },
    {
      title: t('about.contactInfo.phone.title'),
      value: t('about.contactInfo.phone.value'),
      href: 'tel:+85266988964',
      icon: PhoneCall,
    },
    {
      title: t('about.contactInfo.email.title'),
      value: t('about.contactInfo.email.value'),
      href: 'mailto:maymaychu.mcc@gmail.com',
      icon: Mail,
    },
    {
      title: t('about.contactInfo.website.title'),
      value: 'Instagram',
      href: t('about.contactInfo.website.instagram'),
      icon: Instagram,
    },
  ];

  return (
    <div className="min-h-screen bg-emerald-50 text-slate-900">
      <section className="bg-emerald-100 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-600">{t('about.subtitle')}</p>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              {t('about.companyName')}
              <span className="block text-2xl font-medium">{t('about.companyNameEn')}</span>
            </h1>
            <p className="mt-4 text-base text-slate-700">
              {t('about.description')}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-slate-700">
              <span className="rounded-full bg-white/70 px-4 py-2 shadow">{t('about.registeredBadge')}</span>
              <span className="rounded-full bg-white/70 px-4 py-2 shadow">{t('about.emergencyBadge')}</span>
            </div>
            <div className="mt-8 flex gap-4">
              <Button className="bg-emerald-600 text-white hover:bg-emerald-700" asChild>
                <a href="/#/projects">{t('about.viewProjects')}</a>
              </Button>
              <Button variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50" asChild>
                <a href="/#/contact">{t('about.scheduleInspection')}</a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-[32px] bg-white shadow-2xl p-8 flex items-center justify-center"
            {...fadeUp}
            transition={{ delay: 0.1 }}
          >
            <img
              src={logo}
              alt={t('about.companyName')}
              className="w-full h-auto object-contain max-h-[400px]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <motion.div key={value.title} {...fadeUp}>
                <Card className="h-full border-slate-200 shadow-sm">
                  <CardContent className="space-y-4 p-6">
                    <div className="inline-flex rounded-2xl bg-emerald-100/80 p-3 text-emerald-600">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-sm text-slate-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">{t('about.timeline.subtitle')}</p>
            <h2 className="mt-3 text-3xl font-bold">{t('about.timeline.title')}</h2>
          </div>
          <div className="space-y-6 border-l border-slate-200 pl-6">
            <motion.div className="relative" {...fadeUp}>
              <span className="absolute -left-[33px] mt-1 h-3 w-3 rounded-full border-4 border-white bg-emerald-500 shadow"></span>
              <div className="rounded-2xl bg-slate-50 p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  2002
                </p>
                <h3 className="mt-1 text-xl font-semibold">{t('about.companyName')} {t('about.timeline.founded')}</h3>
                <p className="mt-2 text-sm text-slate-600">{t('about.timeline.foundedDetail')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <motion.div {...fadeUp}>
            <div className="rounded-3xl bg-emerald-700 p-8 text-white shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/70">{t('about.capability.subtitle')}</p>
              <h2 className="mt-4 text-3xl font-bold">{t('about.capability.title')}</h2>
              <p className="mt-3 text-sm text-white/80">
                {t('about.capability.description')}
              </p>
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
                  <Building2 className="h-5 w-5 text-emerald-300" />
                  <p>{t('about.capability.partners')}</p>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
                  <Factory className="h-5 w-5 text-emerald-200" />
                  <p>{t('about.capability.warehouse')}</p>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
                  <Users className="h-5 w-5 text-emerald-300" />
                  <p>{t('about.capability.service')}</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className="grid gap-6 sm:grid-cols-2" {...fadeUp}>
            {stats.map((stat) => (
              <Card key={stat.label} className="border-slate-200 bg-white/90">
                <CardContent className="p-6 text-center">
                  <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">CONTACT</p>
            <h2 className="mt-3 text-3xl font-bold">{t('about.contactInfo.website.title')}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info) => (
              <motion.div key={info.title} {...fadeUp}>
                <Card className="h-full border-slate-200 shadow-sm">
                  <CardContent className="flex flex-col items-start gap-4 p-6">
                    <div className="rounded-2xl bg-slate-100 p-3 text-slate-700">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
                        {info.title}
                      </p>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-lg font-semibold text-slate-900 hover:underline break-words"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold text-slate-900 break-words">{info.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-800 py-16 text-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/60">{t('about.contact.subtitle')}</p>
            <h2 className="mt-4 text-3xl font-bold">{t('about.contact.title')}</h2>
            <p className="mt-2 text-sm text-white/80">
              {t('about.contact.description')}
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
              <a href="/#/contact">{t('about.contact.contactAgent')}</a>
            </Button>
            <Button variant="default"  asChild>
              <a href="/#/services">{t('about.contact.serviceDetails')}</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

