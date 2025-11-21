import { motion } from 'framer-motion';
import { Droplets, Wrench, Hammer, ShieldCheck, Layers, ClipboardCheck, Timer, PhoneCall } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const fadeUp = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true, amount: 0.2 },
};

const Services = () => {
  const { t } = useTranslation();
  
  const serviceItems = [
    {
      title: t('services.items.repair.title'),
      description: t('services.items.repair.description'),
      icon: Wrench,
      highlights: (t('services.items.repair.highlights') as string).split(','),
    },
    {
      title: t('services.items.waterproof.title'),
      description: t('services.items.waterproof.description'),
      icon: Droplets,
      highlights: (t('services.items.waterproof.highlights') as string).split(','),
    },
    {
      title: t('services.items.glass.title'),
      description: t('services.items.glass.description'),
      icon: Layers,
      highlights: (t('services.items.glass.highlights') as string).split(','),
    },
  ];

  const workflow = [
    { title: t('services.workflow.steps.consultation.title'), detail: t('services.workflow.steps.consultation.detail') },
    { title: t('services.workflow.steps.inspection.title'), detail: t('services.workflow.steps.inspection.detail') },
    { title: t('services.workflow.steps.delivery.title'), detail: t('services.workflow.steps.delivery.detail') },
    { title: t('services.workflow.steps.followup.title'), detail: t('services.workflow.steps.followup.detail') },
  ];

  const guarantees = [
    {
      title: t('services.guarantees.responsibility.title'),
      detail: t('services.guarantees.responsibility.detail'),
      icon: ClipboardCheck,
    },
    {
      title: t('services.guarantees.quality.title'),
      detail: t('services.guarantees.quality.detail'),
      icon: ShieldCheck,
    },
    {
      title: t('services.guarantees.timing.title'),
      detail: t('services.guarantees.timing.detail'),
      icon: Timer,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="bg-emerald-50 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-600">{t('services.hero.subtitle')}</p>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">{t('services.hero.title')}</h1>
            <p className="mt-4 text-base text-slate-600">
              {t('services.hero.description')}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-slate-700">
              <span className="rounded-full bg-white px-4 py-2 shadow">{t('services.hero.badges.registered')}</span>
              <span className="rounded-full bg-white px-4 py-2 shadow">{t('services.hero.badges.emergency')}</span>
            </div>
            <div className="mt-8 flex gap-4">
              <Button className="bg-emerald-600 text-white hover:bg-emerald-700" asChild>
                <a href="/#/contact">{t('services.hero.scheduleInspection')}</a>
              </Button>
              <Button variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50" asChild>
                <a href="/#/projects">{t('services.hero.viewProjects')}</a>
              </Button>
            </div>
          </motion.div>
          <motion.div className="rounded-[32px] bg-white p-6 shadow-2xl" {...fadeUp} transition={{ delay: 0.1 }}>
            <img
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
              alt={t('services.hero.title')}
              className="h-72 w-full rounded-3xl object-cover"
              loading="lazy"
            />
            <p className="mt-4 text-sm text-slate-500">
              {t('services.note')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">WHAT WE DO</p>
            <h2 className="mt-3 text-3xl font-bold">{t('services.workflow.title')}</h2>
            <p className="mt-2 text-sm text-slate-600">{t('services.workflow.description')}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {serviceItems.map((item) => (
              <motion.div key={item.title} {...fadeUp}>
                <Card className="h-full border-slate-200 shadow-sm">
                  <CardContent className="space-y-4 p-6">
                    <div className="inline-flex rounded-2xl bg-emerald-100 p-3 text-emerald-600">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.description}</p>
                    <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                      {item.highlights.map((tag) => (
                        <span key={tag} className="rounded-full bg-slate-100 px-3 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">{t('services.workflow.subtitle')}</p>
            <h2 className="mt-3 text-3xl font-bold">{t('services.workflow.title')}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {workflow.map((step) => (
              <motion.div key={step.title} {...fadeUp}>
                <Card className="border-slate-200">
                  <CardContent className="space-y-3 p-6">
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="text-sm text-slate-600">{step.detail}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">{t('services.guarantees.subtitle')}</p>
            <h2 className="mt-3 text-3xl font-bold">{t('services.guarantees.title')}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {guarantees.map((item) => (
              <motion.div key={item.title} {...fadeUp}>
                <Card className="border-slate-200">
                  <CardContent className="space-y-3 p-6">
                    <div className="inline-flex rounded-2xl bg-slate-100 p-3 text-slate-700">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.detail}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-800 py-16 text-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/60">{t('services.cta.subtitle')}</p>
            <h2 className="mt-3 text-3xl font-bold">{t('services.cta.title')}</h2>
            <p className="mt-2 text-sm text-white/80">
              {t('services.cta.description')}
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
              <a href={`https://wa.me/${t('about.contactInfo.phone.value').replace(/\s|\+|\(|\)|-/g, '')}`} target="_blank" rel="noreferrer">
                <PhoneCall className="mr-2 h-4 w-4" />
                {t('services.cta.whatsapp')}
              </a>
            </Button>
            <Button variant="default"  asChild>
              <a href="/#/contact">{t('services.cta.onlineForm')}</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

