import { motion } from 'framer-motion';
import { MapPin, Building, Home, Store, FileText, ShieldHalf, Wrench, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import case1Img1 from '@/assets/images/case1/1.png';
import case2Img1 from '@/assets/images/case2/1.png';

const fadeUp = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true, amount: 0.3 },
};

const Projects = () => {
  const { t } = useTranslation();
  
  const caseStudies = [
    {
      id: '1',
      title: t('projects.cases.case1.title'),
      type: t('projects.cases.case1.type'),
      location: t('projects.cases.case1.location'),
      description: t('projects.cases.case1.description'),
      image: case1Img1,
    },
    {
      id: '2',
      title: t('projects.cases.case2.title'),
      type: t('projects.cases.case2.type'),
      location: t('projects.cases.case2.location'),
      description: t('projects.cases.case2.description'),
      image: case2Img1,
    },
  ];

  const inspectionSteps = [
    { title: t('projects.inspection.steps.survey.title'), detail: t('projects.inspection.steps.survey.detail') },
    { title: t('projects.inspection.steps.proposal.title'), detail: t('projects.inspection.steps.proposal.detail') },
    { title: t('projects.inspection.steps.progress.title'), detail: t('projects.inspection.steps.progress.detail') },
    { title: t('projects.inspection.steps.acceptance.title'), detail: t('projects.inspection.steps.acceptance.detail') },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-emerald-800 py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/60">{t('projects.hero.subtitle')}</p>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              {t('projects.hero.title')}
            </h1>
            <p className="mt-4 text-base text-white/80">
              {t('projects.hero.description')}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/80">
              <span className="inline-flex items-center gap-2">
                <Building className="h-4 w-4" />
                {t('projects.hero.tags.building')}
              </span>
              <span className="inline-flex items-center gap-2">
                <Home className="h-4 w-4" />
                {t('projects.hero.tags.estate')}
              </span>
              <span className="inline-flex items-center gap-2">
                <Store className="h-4 w-4" />
                {t('projects.hero.tags.shop')}
              </span>
            </div>
          </motion.div>
          <motion.div
            className="rounded-[32px] bg-white/10 p-6 shadow-2xl backdrop-blur"
            {...fadeUp}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-white">{t('projects.hero.info.title')}</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-emerald-300" />
                {t('projects.hero.info.reports')}
              </li>
              <li className="flex items-center gap-2">
                <ShieldHalf className="h-4 w-4 text-emerald-300" />
                {t('projects.hero.info.safety')}
              </li>
              <li className="flex items-center gap-2">
                <Wrench className="h-4 w-4 text-emerald-300" />
                {t('projects.hero.info.records')}
              </li>
            </ul>
            <Button className="mt-6 w-full bg-white text-slate-900 hover:bg-slate-100" asChild>
              <a href="/#/contact">{t('projects.hero.request')}</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">{t('projects.showcase.subtitle')}</p>
            <h2 className="mt-3 text-3xl font-bold">{t('projects.showcase.title')}</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((project) => (
              <motion.div key={project.id} {...fadeUp}>
                <Link to={`/projects/case/${project.id}`}>
                  <Card className="h-full overflow-hidden border-0 shadow-lg transition-transform hover:scale-105 cursor-pointer">
                    <div className="relative h-64 w-full">
                      <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700">
                        {project.type}
                      </span>
                    </div>
                    <CardContent className="space-y-4 p-6">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <MapPin className="h-3.5 w-3.5" />
                        {project.location}
                      </div>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <p className="text-sm text-slate-600">{project.description}</p>
                      <div className="pt-2">
                        <span className="text-sm text-emerald-600 font-semibold hover:underline">
                          {t('projects.detail.viewMore')} →
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">{t('projects.inspection.subtitle')}</p>
            <h2 className="mt-3 text-3xl font-bold">{t('projects.inspection.title')}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {inspectionSteps.map((step) => (
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

      <section className="bg-emerald-50 py-16 px-4">
        <div className="mx-auto max-w-5xl text-center">
          <Star className="mx-auto h-10 w-10 text-emerald-500" />
          <p className="mt-6 text-xl text-slate-700">
            {t('projects.testimonial.quote')}
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-500">{t('projects.testimonial.author')}</p>
        </div>
      </section>
    </div>
  );
};

export default Projects;

