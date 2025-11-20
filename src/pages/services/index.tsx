import { motion } from 'framer-motion';
import { Droplets, Wrench, Hammer, ShieldCheck, Layers, ClipboardCheck, Timer, PhoneCall } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const serviceItems = [
  {
    title: '鋁窗維修／零件更換',
    description: '處理鉸鏈鬆脫、滑輪受損、氣密膠條老化等狀況，搭配原廠或升級配件。',
    icon: Wrench,
    highlights: ['兒童安全鎖', '防撞膠條', '無障礙改裝'],
  },
  {
    title: '窗台滲水檢測與防水工程',
    description: '以熱像儀、蓮蓬水測試定位滲漏源，提供注膠、重鋪砂漿或鋁飾板處理方案。',
    icon: Droplets,
    highlights: ['紅外線檢測', '詳細測試報告', '180 日保養'],
  },
  {
    title: '玻璃與幕牆服務',
    description: '支援鋁門玻璃、趟門、幕牆矽膠翻新與玻璃防爆貼膜安裝。',
    icon: Layers,
    highlights: ['安全玻璃代工', '超長尺寸吊運', '夜間施工'],
  },
];

const workflow = [
  { title: '1. 線上諮詢', detail: 'WhatsApp 或電話提供影像，初步估算費用並安排上門時間。' },
  { title: '2. 現場檢測', detail: '技師攜帶儀器檢視，於 24 小時內提交圖文報告與正式報價。' },
  { title: '3. 施工交付', detail: '由專責督導把關，完成後提供照片及保養建議，並與客戶確認。' },
  { title: '4. 保養跟進', detail: '180 日內主動回訪，如有保養需求以專線快速處理。' },
];

const guarantees = [
  {
    title: '專案責任',
    detail: '項目主任全程跟進，同步屋宇署報告、物管審批與安全文件。',
    icon: ClipboardCheck,
  },
  {
    title: '品質保護',
    detail: '採購 ISO 認證物料，並保留施工紀錄與批號以便追蹤。',
    icon: ShieldCheck,
  },
  {
    title: '時效承諾',
    detail: '緊急服務 2 小時內回覆，住宅工單最快三天內完成。',
    icon: Timer,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true, amount: 0.2 },
};

const Services = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="bg-[#dff0ff] py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-600">SERVICES</p>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">專業維修方案，為每一扇窗守護安全</h1>
            <p className="mt-4 text-base text-slate-600">
              合益鋁窗公司提供一站式維修、檢測與保養，從屋苑驗窗、家居滲水、商廈幕牆到店舖玻璃，都有專屬隊伍支援。
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-slate-700">
              <span className="rounded-full bg-white px-4 py-2 shadow">屋宇署註冊小型工程</span>
              <span className="rounded-full bg-white px-4 py-2 shadow">24/7 緊急維修</span>
            </div>
            <div className="mt-8 flex gap-4">
              <Button className="bg-slate-900 text-white hover:bg-slate-800" asChild>
                <a href="/#/contact">預約檢測</a>
              </Button>
              <Button variant="outline" className="border-slate-900 text-slate-900" asChild>
                <a href="/#/projects">查看案例</a>
              </Button>
            </div>
          </motion.div>
          <motion.div className="rounded-[32px] bg-white p-6 shadow-2xl" {...fadeUp} transition={{ delay: 0.1 }}>
            <img
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
              alt="services"
              className="h-72 w-full rounded-3xl object-cover"
              loading="lazy"
            />
            <p className="mt-4 text-sm text-slate-500">
              施工前後均拍攝記錄，並上傳至雲端供物管及客戶查閱。
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">WHAT WE DO</p>
            <h2 className="mt-3 text-3xl font-bold">核心服務內容</h2>
            <p className="mt-2 text-sm text-slate-600">可依照屋苑、村屋、商舖或工廠大廈需求客制。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {serviceItems.map((item) => (
              <motion.div key={item.title} {...fadeUp}>
                <Card className="h-full border-slate-200 shadow-sm">
                  <CardContent className="space-y-4 p-6">
                    <div className="inline-flex rounded-2xl bg-sky-100 p-3 text-sky-600">
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
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">PROCESS</p>
            <h2 className="mt-3 text-3xl font-bold">服務流程</h2>
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
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">GUARANTEE</p>
            <h2 className="mt-3 text-3xl font-bold">品質承諾</h2>
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

      <section className="bg-[#0f1f35] py-16 text-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/60">Need Help?</p>
            <h2 className="mt-3 text-3xl font-bold">和工程師聊聊你的維修需求</h2>
            <p className="mt-2 text-sm text-white/80">
              將現場照片、樓宇地址與可預約時段傳給我們，最快可在 2 小時內安排上門。
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
              <a href="https://wa.me/85268881688" target="_blank" rel="noreferrer">
                <PhoneCall className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <a href="/#/contact">線上表單</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

