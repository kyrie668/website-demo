import { motion } from 'framer-motion';
import { MapPin, Building, Home, Store, FileText, ShieldHalf, Wrench, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    title: '觀塘海景大廈外牆鋁窗翻新',
    type: '住宅屋苑',
    location: '觀塘成業街',
    description:
      '為三座 35 層大廈進行鋁窗安全檢測及更換鬆動五金，並增設兒童安全鎖及防撞膠條。',
    image:
      'https://images.unsplash.com/photo-1465768741625-1c015a4ba437?auto=format&fit=crop&w=900&q=80',
    stats: ['780 扇鋁窗', '45 日完成', '180 日保養'],
  },
  {
    title: '九龍灣商廈幕牆矽膠翻新',
    type: '商業大樓',
    location: '九龍灣臨興街',
    description:
      '針對 25 年樓齡幕牆，重新打矽膠與加設滴水槽，並提供熱像儀檢測報告予物管。',
    image:
      'https://images.unsplash.com/photo-1529429617124-aee711a70412?auto=format&fit=crop&w=900&q=80',
    stats: ['5,000 米矽膠', '夜間施工', '紅外線檢測'],
  },
  {
    title: '中環精品店玻璃門維修',
    type: '地舖商戶',
    location: '中環歌賦街',
    description:
      '更換自動門感應器與防爆玻璃，並調整門夾，確保開門角度與靜音需求符合品牌要求。',
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
    stats: ['1 日交付', '原廠零件', '24/7 支援'],
  },
];

const inspectionSteps = [
  { title: '現場勘察', detail: '技師與項目主任一同勘察鋁窗及結構安全，並記錄照片。' },
  { title: '方案建議', detail: '提供至少兩個修復方案（維修／更換），附上工期與保養。' },
  { title: '進度共享', detail: '每天上傳施工照片與紀錄，供客戶或物管於雲端查看。' },
  { title: '驗收保養', detail: '簽發完工報告並啟動 180 日保養責任，必要時安排複檢。' },
];

const fadeUp = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true, amount: 0.3 },
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-[#0f1f35] py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/60">PROJECTS</p>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              工程案例與驗收紀錄
            </h1>
            <p className="mt-4 text-base text-white/80">
              從屋苑驗窗到商廈幕牆翻新，我們以透明流程與完整紀錄取得客戶信任。以下僅列出部分案例，更多資料可向我們索取。
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/80">
              <span className="inline-flex items-center gap-2">
                <Building className="h-4 w-4" />
                住宅／商廈
              </span>
              <span className="inline-flex items-center gap-2">
                <Home className="h-4 w-4" />
                屋苑驗窗
              </span>
              <span className="inline-flex items-center gap-2">
                <Store className="h-4 w-4" />
                店舖玻璃
              </span>
            </div>
          </motion.div>
          <motion.div
            className="rounded-[32px] bg-white/10 p-6 shadow-2xl backdrop-blur"
            {...fadeUp}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-white">工程資料提供</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-yellow-300" />
                詳細檢測與報價報告
              </li>
              <li className="flex items-center gap-2">
                <ShieldHalf className="h-4 w-4 text-emerald-300" />
                安全計劃與風險評估
              </li>
              <li className="flex items-center gap-2">
                <Wrench className="h-4 w-4 text-sky-300" />
                施工前後影像紀錄
              </li>
            </ul>
            <Button className="mt-6 w-full bg-white text-slate-900 hover:bg-slate-100" asChild>
              <a href="/#/contact">索取完整案例</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">SHOWCASE</p>
            <h2 className="mt-3 text-3xl font-bold">近期代表工程</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {caseStudies.map((project) => (
              <motion.div key={project.title} {...fadeUp}>
                <Card className="h-full overflow-hidden border-0 shadow-lg">
                  <div className="relative h-48 w-full">
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
                    <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                      {project.stats.map((stat) => (
                        <span key={stat} className="rounded-full bg-slate-100 px-3 py-1">
                          {stat}
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

      <section className="bg-white py-16 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">INSPECTION</p>
            <h2 className="mt-3 text-3xl font-bold">驗收與報告流程</h2>
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

      <section className="bg-[#fef7e5] py-16 px-4">
        <div className="mx-auto max-w-5xl text-center">
          <Star className="mx-auto h-10 w-10 text-amber-500" />
          <p className="mt-6 text-xl text-slate-700">
            「合益團隊提供了完整的滲水檢測報告與施工影像，令屋苑住戶與物管都非常安心。」
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-500">- 某大型屋苑物業經理</p>
        </div>
      </section>
    </div>
  );
};

export default Projects;

