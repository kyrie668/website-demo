import { motion } from 'framer-motion';
import { PhoneCall, Mail, MapPin, Clock3, MessageCircle, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useTranslation } from 'react-i18next';

const fadeUp = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true, amount: 0.3 },
};

const Contact = () => {
  const { t } = useTranslation();
  
  const contactInfos = [
    {
      title: t('contact.info.phone.title'),
      value: t('contact.info.phone.value'),
      href: `tel:${t('contact.info.phone.value').replace(/\s/g, '')}`,
      icon: PhoneCall,
      note: t('contact.info.phone.note'),
    },
    {
      title: t('contact.info.email.title'),
      value: t('contact.info.email.value'),
      href: `mailto:${t('contact.info.email.value')}`,
      icon: Mail,
      note: t('contact.info.email.note'),
    },
    {
      title: t('contact.info.address.title'),
      value: t('contact.info.address.value'),
      href: 'https://maps.app.goo.gl/search?q=大角咀合桃街2號褔星工業大廈',
      icon: MapPin,
      note: t('contact.info.address.note'),
    },
    {
      title: t('contact.info.hours.title'),
      value: t('contact.info.hours.value'),
      href: '',
      icon: Clock3,
      note: t('contact.info.hours.note'),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-emerald-50 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-600">{t('contact.hero.subtitle')}</p>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">{t('contact.hero.title')}</h1>
            <p className="mt-4 text-base text-slate-600">
              {t('contact.hero.description')}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
              <span className="rounded-full bg-white px-4 py-2 shadow">{t('contact.hero.tags.inspection')}</span>
              <span className="rounded-full bg-white px-4 py-2 shadow">{t('contact.hero.tags.detection')}</span>
              <span className="rounded-full bg-white px-4 py-2 shadow">{t('contact.hero.tags.replacement')}</span>
            </div>
            <div className="mt-8 flex gap-4">
              <Button className="bg-emerald-600 text-white hover:bg-emerald-700" asChild>
                <a href={`https://wa.me/${t('contact.info.phone.value').replace(/\s|\+|\(|\)|-/g, '')}`} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {t('contact.hero.whatsapp')}
                </a>
              </Button>
              <Button variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50" asChild>
                <a href={`tel:${t('contact.info.phone.value').replace(/\s/g, '')}`}>
                  <PhoneCall className="mr-2 h-4 w-4" />
                  {t('contact.hero.callNow')}
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.div className="rounded-[32px] bg-white p-6 shadow-2xl" {...fadeUp} transition={{ delay: 0.1 }}>
            <iframe
              title={t('common.companyName')}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.123456789!2d114.1683456!3d22.3189123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404000000000000%3A0x0!2z6IuN5YCN5YCN5ZCN5ZCN5LqL6IuN!5e0!3m2!1szh-TW!2shk!4v1700000000000!5m2!1szh-TW!2shk"
              className="h-72 w-full rounded-3xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="mt-4 text-sm text-slate-500">{t('contact.mapNote')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_1.1fr]">
          <motion.div className="space-y-4" {...fadeUp}>
            {contactInfos.map((info) => (
              <Card key={info.title} className="border-slate-200">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="rounded-2xl bg-slate-100 p-3 text-slate-700">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
                      {info.title}
                    </p>
                    {info.href ? (
                      <a href={info.href} className="text-lg font-semibold text-slate-900 hover:underline">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold text-slate-900">{info.value}</p>
                    )}
                    <p className="text-sm text-slate-500">{info.note}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
          <motion.div {...fadeUp}>
            <Card className="border-slate-200 shadow-lg">
              <CardContent className="space-y-4 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">{t('contact.form.subtitle')}</p>
                <h2 className="text-2xl font-bold">{t('contact.form.title')}</h2>
                <p className="text-sm text-slate-600">
                  {t('contact.form.description')}
                </p>
                <form className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                      {t('contact.form.name')}
                    </label>
                    <Input placeholder={t('contact.form.namePlaceholder')} className="mt-2" />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{t('contact.form.phone')}</label>
                      <Input placeholder={t('contact.form.phonePlaceholder')} className="mt-2" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{t('contact.form.email')}</label>
                      <Input placeholder={t('contact.form.emailPlaceholder')} className="mt-2" type="email" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{t('contact.form.location')}</label>
                    <Input placeholder={t('contact.form.locationPlaceholder')} className="mt-2" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{t('contact.form.requirement')}</label>
                    <Textarea placeholder={t('contact.form.requirementPlaceholder')} className="mt-2 min-h-[120px]" />
                  </div>
                  <Button className="w-full bg-slate-900 text-white hover:bg-slate-800" type="button">
                    <FileText className="mr-2 h-4 w-4" />
                    {t('contact.form.submit')}
                  </Button>
                  <p className="text-xs text-slate-500">
                    {t('contact.form.note')}
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

