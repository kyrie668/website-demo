import { motion } from 'framer-motion';
import { ShieldCheck, Building2, Factory, Users, Wrench, Handshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const values = [
  {
    title: '安全至上',
    description: '所有維修流程遵循屋宇署及強制驗窗規範，材料與配件均通過國際安全標準。',
    icon: ShieldCheck,
  },
  {
    title: '匠心工藝',
    description: '每位技師平均有 10 年以上現場經驗，對鋁窗結構與防水細節保持極高要求。',
    icon: Wrench,
  },
  {
    title: '真誠同行',
    description: '透明報價、即時回覆，與業主、物業管理及建築顧問保持緊密合作。',
    icon: Handshake,
  },
];

const timeline = [
  {
    year: '2002',
    title: '成立合益鋁窗公司',
    detail: '自九龍觀塘起步，提供住宅鋁窗維修及玻璃更換服務。',
  },
  {
    year: '2010',
    title: '設立檢測小組',
    detail: '引入熱像儀、滲水測試裝備，擴展至大型屋苑與商廈長約。',
  },
  {
    year: '2016',
    title: '專案管理系統',
    detail: '建立雲端工單與圖片存檔，讓客戶隨時掌握工程進度與保養記錄。',
  },
  {
    year: '2023',
    title: '一站式維修中心',
    detail: '整合鋁窗、幕牆、防漏及玻璃加工夥伴，提供更完善的支援。',
  },
];

const stats = [
  { value: '20+', label: '年專業經驗' },
  { value: '280+', label: '屋苑／商廈客戶' },
  { value: '3,800+', label: '年度維修工單' },
  { value: '180日', label: '工程保養期' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, amount: 0.3 },
};

const About = () => {
  return (
    <div className="min-h-screen bg-[#f3f8ff] text-slate-900">
      <section className="bg-[#cfe7ff] py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-600">ABOUT</p>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              合益鋁窗公司
              <span className="block text-2xl font-medium">Hop Yik Engineering Co., Ltd.</span>
            </h1>
            <p className="mt-4 text-base text-slate-700">
              我們深耕香港鋁窗與建築維修領域已逾二十年，擅長處理鋁窗鬆動、窗台滲水、玻璃爆裂及幕牆保養等疑難雜症。
              以「準確檢測、坦誠報價、負責保養」為原則，服務住宅、商舖與物業管理公司。
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-slate-700">
              <span className="rounded-full bg-white/70 px-4 py-2 shadow">註冊小型工程承辦商</span>
              <span className="rounded-full bg-white/70 px-4 py-2 shadow">24 小時緊急支援</span>
            </div>
            <div className="mt-8 flex gap-4">
              <Button className="bg-slate-900 text-white hover:bg-slate-800" asChild>
                <a href="/#/projects">查看工程紀錄</a>
              </Button>
              <Button variant="outline" className="border-slate-900 text-slate-900" asChild>
                <a href="/#/contact">預約現場檢測</a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-[32px] bg-white shadow-2xl"
            {...fadeUp}
            transition={{ delay: 0.1 }}
          >
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
              alt="Hop Yik team"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-4 py-3 text-sm text-slate-700 shadow">
              <p className="font-semibold">工程督導巡查</p>
              <p>每日派員檢視施工品質，並更新雲端報告。</p>
            </div>
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
                    <div className="inline-flex rounded-2xl bg-sky-100/80 p-3 text-sky-600">
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
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">TIMELINE</p>
            <h2 className="mt-3 text-3xl font-bold">里程碑見證我們的承諾</h2>
          </div>
          <div className="space-y-6 border-l border-slate-200 pl-6">
            {timeline.map((event) => (
              <motion.div key={event.year} className="relative" {...fadeUp}>
                <span className="absolute -left-[33px] mt-1 h-3 w-3 rounded-full border-4 border-white bg-sky-500 shadow"></span>
                <div className="rounded-2xl bg-slate-50 p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    {event.year}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold">{event.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{event.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <motion.div {...fadeUp}>
            <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/70">CAPABILITY</p>
              <h2 className="mt-4 text-3xl font-bold">專案與團隊配置</h2>
              <p className="mt-3 text-sm text-white/80">
                我們的項目主任、工程督導及持牌技工形成三層檢查機制，從檢測、報價、施工到保養，皆有明確的責任分工與紀錄。
              </p>
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
                  <Building2 className="h-5 w-5 text-yellow-300" />
                  <p>物業與設計顧問合作超過 50 組</p>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
                  <Factory className="h-5 w-5 text-emerald-300" />
                  <p>自設零件倉與玻璃加工夥伴，縮短等待時間</p>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
                  <Users className="h-5 w-5 text-sky-300" />
                  <p>專業客戶服務團隊 7x13 小時待命</p>
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

      <section className="bg-[#0f1f35] py-16 text-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/60">TOGETHER</p>
            <h2 className="mt-4 text-3xl font-bold">想了解更多專案細節？</h2>
            <p className="mt-2 text-sm text-white/80">
              我們可以提供現場評估、維修報告範本與保養建議，協助您快速定案。
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
              <a href="/#/contact">聯絡專員</a>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <a href="/#/services">服務詳情</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

