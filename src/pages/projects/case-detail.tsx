import { useParams, Link } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

// 导入case图片
import case1Img1 from '@/assets/images/case1/1.png';
import case1Img2 from '@/assets/images/case1/2.png';
import case1Img3 from '@/assets/images/case1/3.png';
import case1Img4 from '@/assets/images/case1/4.png';
import case2Img1 from '@/assets/images/case2/1.png';
import case2Img2 from '@/assets/images/case2/2.png';
import case2Img3 from '@/assets/images/case2/3.png';
import case2Img4 from '@/assets/images/case2/4.png';

const fadeUp = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true, amount: 0.3 },
};

const CaseDetail = () => {
  const { caseId } = useParams<{ caseId: string }>();
  const { t } = useTranslation();

  // Case数据
  const caseData: Record<string, any> = {
    '1': {
      images: [case1Img1, case1Img2, case1Img3, case1Img4],
      title: t('projects.cases.case1.title'),
      type: t('projects.cases.case1.type'),
      location: t('projects.cases.case1.location'),
      description: t('projects.cases.case1.description'),
      details: (t('projects.cases.case1.details') as string).split(','),
    },
    '2': {
      images: [case2Img1, case2Img2, case2Img3, case2Img4],
      title: t('projects.cases.case2.title'),
      type: t('projects.cases.case2.type'),
      location: t('projects.cases.case2.location'),
      description: t('projects.cases.case2.description'),
      details: (t('projects.cases.case2.details') as string).split(','),
    },
  };

  const currentCase = caseData[caseId || '1'];

  if (!currentCase) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Not Found</h1>
          <Link to="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div {...fadeUp}>
            <Link to="/projects">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t('projects.detail.back')}
              </Button>
            </Link>
          </motion.div>

          <motion.div {...fadeUp} className="mb-8">
            <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 font-semibold">
                {currentCase.type}
              </span>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {currentCase.location}
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">{currentCase.title}</h1>
            <p className="text-lg text-slate-600">{currentCase.description}</p>
          </motion.div>

          <motion.div {...fadeUp} className="grid gap-6 md:grid-cols-2 mb-12">
            {currentCase.images.map((image: string, index: number) => (
              <motion.div
                key={index}
                {...fadeUp}
                transition={{ delay: index * 0.1 }}
                className="overflow-hidden rounded-2xl shadow-lg aspect-[4/3] bg-slate-100"
              >
                <img
                  src={image}
                  alt={`${currentCase.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>

          {currentCase.details && currentCase.details.length > 0 && (
            <motion.div {...fadeUp}>
              <Card className="border-slate-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Wrench className="h-5 w-5 text-emerald-600" />
                    <h2 className="text-2xl font-bold">{t('projects.detail.workDetails')}</h2>
                  </div>
                  <ul className="space-y-3">
                    {currentCase.details.map((detail: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-1">•</span>
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          )}

          <motion.div {...fadeUp} className="mt-8 flex gap-4">
            <Button className="bg-emerald-600 text-white hover:bg-emerald-700" asChild>
              <Link to="/contact">{t('projects.detail.contactUs')}</Link>
            </Button>
            <Button variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50" asChild>
              <Link to="/projects">{t('projects.detail.viewMore')}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseDetail;

