import { motion } from 'framer-motion';
import {
  Wrench,
  Droplets,
  ShieldCheck,
  Hammer,
  PhoneCall,
  Mail,
  MapPin,
  Clock3,
  Instagram,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';


import CaseImg from '@/assets/images/case1/1.png';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
  viewport: { once: true, amount: 0.3 },
};

const Home = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      title: t('home.services.items.repair.title'),
      description: t('home.services.items.repair.description'),
      icon: Wrench,
    },
    {
      title: t('home.services.items.detection.title'),
      description: t('home.services.items.detection.description'),
      icon: Droplets,
    },
    {
      title: t('home.services.items.glass.title'),
      description: t('home.services.items.glass.description'),
      icon: ShieldCheck,
    },
    {
      title: t('home.services.items.maintenance.title'),
      description: t('home.services.items.maintenance.description'),
      icon: Hammer,
    },
  ];

  const stats = [
    { value: '20+', label: t('home.stats.experience') },
    { value: '3,800+', label: t('home.stats.cases') },
    { value: '98%', label: t('home.stats.satisfaction') },
    { value: '24H', label: t('home.stats.support') },
  ];

  const cases = [
    {
      title: t('home.projects.cases.kwunTong.title'),
      description: t('home.projects.cases.kwunTong.description'),
      image:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80',
      tag: t('home.projects.tags.residential'),
    },
    {
      title: t('home.projects.cases.kowloonBay.title'),
      description: t('home.projects.cases.kowloonBay.description'),
      image:
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
      tag: t('home.projects.tags.commercial'),
    },
    {
      title: t('home.projects.cases.homantin.title'),
      description: t('home.projects.cases.homantin.description'),
      image:
        'https://images.unsplash.com/photo-1469796466635-455ede028aca?auto=format&fit=crop&w=900&q=80',
      tag: t('home.projects.tags.maintenance'),
    },
  ];

  const highlights = [
    t('home.about.highlights.team'),
    t('home.about.highlights.response'),
    t('home.about.highlights.report'),
    t('home.about.highlights.warranty'),
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section id="hero" className="bg-emerald-50 py-12">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow">
              <Sparkles className="mr-2 h-4 w-4 text-emerald-500" />
              {t('home.hero.badge')}
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-wide text-slate-900 md:text-5xl">
              {t('home.hero.title')}
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              {t('home.hero.description')}
            </p>
            <div className="mt-8 flex flex-col mb-4 gap-4 sm:flex-row">
              <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700" asChild>
                <a href="#projects">{t('home.hero.viewProjects')}</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-500 bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                asChild
              >
                <a href="#contact">{t('home.hero.contactUs')}</a>
              </Button>
            </div>
            <img src={CaseImg} alt="CaseImg" className="w-full aspect-square object-cover" />
            <div className="mt-8 grid gap-4 rounded-2xl bg-white/70 p-4 shadow-sm sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-slate-200 p-4 text-center">
                  <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-[32px] bg-white shadow-2xl"
            {...fadeUp}
            transition={{ duration: 0.9 }}
          >
            <img
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
              alt="鋁窗維修現場"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 p-4 text-sm text-slate-700 shadow-lg">
              <p className="font-semibold text-slate-900">工程師現場檢測</p>
              <p>以熱像儀測試滲水源，記錄螺絲鬆動點，現場即時安排維修。</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1.2fr_0.8fr]">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t('home.about.subtitle')}
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              {t('home.about.title')}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {t('home.about.description')}
            </p>
            <div className="mt-6 grid gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="rounded-3xl bg-gradient-to-b from-sky-50 to-white p-6 shadow-inner"
            {...fadeUp}
          >
            <p className="text-sm font-semibold text-slate-500">{t('home.about.features.title')}</p>
            <ul className="mt-6 space-y-5 text-slate-700">
              <li>
                <span className="font-semibold text-slate-900">{t('home.about.features.instant.title')}</span> ・ {t('home.about.features.instant.description')}
              </li>
              <li>
                <span className="font-semibold text-slate-900">{t('home.about.features.inspection.title')}</span> ・ {t('home.about.features.inspection.description')}
              </li>
              <li>
                <span className="font-semibold text-slate-900">{t('home.about.features.delivery.title')}</span> ・ {t('home.about.features.delivery.description')}
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section id="services" className="bg-emerald-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div className="text-center" {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t('home.services.subtitle')}
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">{t('home.services.title')}</h2>
            <p className="mt-2 text-slate-600">
              {t('home.services.description')}
            </p>
          </motion.div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <motion.div key={service.title} {...fadeUp}>
                <Card className="border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-600">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div className="mb-10 text-center" {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t('home.projects.subtitle')}
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">{t('home.projects.title')}</h2>
            <p className="mt-2 text-slate-600">{t('home.projects.description')}</p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {cases.map((item) => (
              <motion.div key={item.title} {...fadeUp}>
                <Card className="h-full overflow-hidden border-slate-200 shadow-lg">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700">
                      {item.tag}
                    </span>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-emerald-50 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
          <motion.div className="rounded-3xl bg-white p-8 shadow-xl" {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t('home.contact.subtitle')}
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">{t('home.contact.title')}</h2>
            <p className="mt-2 text-slate-600">{t('home.contact.description')}</p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4">
                <PhoneCall className="h-10 w-10 rounded-full bg-emerald-600 p-2 text-white" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">{t('home.contact.phone.label')}</p>
                  <a href={`tel:${t('home.contact.phone.value').replace(/\s/g, '')}`} className="text-lg font-semibold text-slate-900">
                    {t('home.contact.phone.value')}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4">
                <Mail className="h-10 w-10 rounded-full bg-emerald-100 p-2 text-emerald-600" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">{t('home.contact.email.label')}</p>
                  <a href={`mailto:${t('home.contact.email.value')}`} className="text-lg font-semibold text-slate-900">
                    {t('home.contact.email.value')}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4">
                <MapPin className="h-10 w-10 rounded-full bg-emerald-100 p-2 text-emerald-600" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">{t('home.contact.address.label')}</p>
                  <p className="text-lg font-semibold text-slate-900">{t('home.contact.address.value')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4">
                <Clock3 className="h-10 w-10 rounded-full bg-emerald-100 p-2 text-emerald-600" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">{t('home.contact.hours.label')}</p>
                  <p className="text-lg font-semibold text-slate-900">{t('home.contact.hours.value')}</p>
                  <p className="text-sm text-slate-500">{t('home.contact.hours.note')}</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="flex-1 bg-emerald-600 text-white hover:bg-emerald-700">
                <a href={`https://wa.me/${t('home.contact.phone.value').replace(/\s|\+|\(|\)|-/g, '')}`} target="_blank" rel="noreferrer">
                  {t('home.contact.whatsapp')}
                </a>
              </Button>
              <Button asChild variant="outline" className="flex-1 border-slate-700 text-slate-900">
                <a href={`mailto:${t('home.contact.email.value')}`}>{t('home.contact.submitRequest')}</a>
              </Button>
            </div>
          </motion.div>
          <motion.div className="space-y-4" {...fadeUp}>
            {/* <a
              href="https://maps.app.goo.gl/R4i7u3gk8Aap"
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-3xl shadow-xl"
            >
              <img
                src="https://static-maps.yandex.ru/1.x/?lang=zh_Hant&ll=114.216,22.313&z=14&l=map&size=650,400"
                alt="合益鋁窗公司地圖"
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              
            </a> */}
            <iframe
              title={t('common.companyName')}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.123456789!2d114.1683456!3d22.3189123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404000000000000%3A0x0!2z6IuN5YCN5YCN5ZCN5ZCN5LqL6IuN!5e0!3m2!1szh-TW!2shk!4v1700000000000!5m2!1szh-TW!2shk"
              className="h-full w-full rounded-3xl border-0 shadow-lg"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

