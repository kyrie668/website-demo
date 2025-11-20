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
  Facebook,
  MessageCircle,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: '鋁窗維修與更換',
    description: '零件老化、鬆脫更換、五金升級，確保開關順暢與安全鎖扣。',
    icon: Wrench,
  },
  {
    title: '窗台滲水檢測',
    description: '熱像與水測儀器定位滲漏，提供防水注膠與拆換修復方案。',
    icon: Droplets,
  },
  {
    title: '鋁門玻璃工程',
    description: '鋁門框、玻璃更換、鉸鏈調校，商舖及家用同步處理。',
    icon: ShieldCheck,
  },
  {
    title: '工程保養檢測',
    description: '定期巡檢、螺絲緊固、潤滑養護，延長鋁窗結構壽命。',
    icon: Hammer,
  },
];

const stats = [
  { value: '20+', label: '年專業經驗' },
  { value: '3,800+', label: '住宅維修案例' },
  { value: '98%', label: '客戶滿意度' },
  { value: '24H', label: '緊急支援' },
];

const cases = [
  {
    title: '觀塘海景大廈外窗翻新',
    description: '高層鋁窗更換、防撞膠條升級、增設兒童安全鎖。',
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80',
    tag: '住宅項目',
  },
  {
    title: '九龍灣商廈玻璃門維修',
    description: '更換自動門鋁合頁與防爆玻璃，確保開合順暢靜音。',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
    tag: '商業工程',
  },
  {
    title: '何文田屋苑滲水處理',
    description: '紅外線定位滲水源，重新打膠並加設排水槽。',
    image:
      'https://images.unsplash.com/photo-1469796466635-455ede028aca?auto=format&fit=crop&w=900&q=80',
    tag: '維修保養',
  },
];

const highlights = [
  '持有合資格註冊工程師團隊',
  '到場檢測最快 2 小時內安排',
  '按屋宇署規定提供安全報告',
  '工程完成後 180 日品質保養',
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
  viewport: { once: true, amount: 0.3 },
};

const FloatingSocialLinks = () => (
  <div className="fixed right-4 top-1/3 z-30 hidden flex-col gap-3 md:flex">
    <a
      href="https://wa.me/85268881688"
      target="_blank"
      rel="noreferrer"
      className="grid h-12 w-12 place-items-center rounded-full bg-emerald-500 text-white shadow-lg transition hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" />
    </a>
    <a
      href="https://www.facebook.com/"
      target="_blank"
      rel="noreferrer"
      className="grid h-12 w-12 place-items-center rounded-full bg-blue-600 text-white shadow-lg transition hover:scale-105"
    >
      <Facebook className="h-5 w-5" />
    </a>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <FloatingSocialLinks />
      <section id="hero" className="bg-[#d8f0ff] py-12">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow">
              <Sparkles className="mr-2 h-4 w-4 text-yellow-500" />
              專營鋁窗維修・窗台滲水
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-wide text-slate-900 md:text-5xl">
              為你提供維修服務，確保每一扇窗安全無慮
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              合益鋁窗公司擁有超過二十年樓宇維修經驗，提供快速到場檢測、鋁窗配件更換、玻璃工程與防漏保養，一次過處理你家居的煩惱。
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800" asChild>
                <a href="#projects">查看案例</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-400 bg-yellow-300/40 text-slate-900 hover:bg-yellow-300"
                asChild
              >
                <a href="#contact">聯絡我們</a>
              </Button>
            </div>
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
              ABOUT HOP YIK
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              簡潔、快速、透明是我們的服務核心
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              我們以嚴謹施工流程及完善的跟進系統，將每個維修步驟記錄在案，並向客戶交代檢測報告。
              不論是鋁窗鬆脫、玻璃爆裂或窗台滲水，均由持牌技工處理，確保安全。
            </p>
            <div className="mt-6 grid gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-sky-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="rounded-3xl bg-gradient-to-b from-sky-50 to-white p-6 shadow-inner"
            {...fadeUp}
          >
            <p className="text-sm font-semibold text-slate-500">服務特色</p>
            <ul className="mt-6 space-y-5 text-slate-700">
              <li>
                <span className="font-semibold text-slate-900">即時預約</span> ・ WhatsApp
                或電話快速回覆，提供初步報價。
              </li>
              <li>
                <span className="font-semibold text-slate-900">現場檢測</span> ・ 攜帶儀器全面檢視，提供修復方案。
              </li>
              <li>
                <span className="font-semibold text-slate-900">完工交付</span> ・ 提供照片及報告，附上保養提示。
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section id="services" className="bg-[#f5fbff] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div className="text-center" {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              PROFESSIONAL SERVICES
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">專業服務項目</h2>
            <p className="mt-2 text-slate-600">
              以 shadcn/ui 元件搭配 framer-motion 動效，帶來輕巧快速的瀏覽體驗。
            </p>
          </motion.div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <motion.div key={service.title} {...fadeUp}>
                <Card className="border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="rounded-2xl bg-sky-100 p-3 text-sky-600">
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
              PROJECT SHOWCASE
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">工程案例精選</h2>
            <p className="mt-2 text-slate-600">真實案例呈現，讓你更安心選擇我們。</p>
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

      <section id="contact" className="bg-[#eaf4ff] py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
          <motion.div className="rounded-3xl bg-white p-8 shadow-xl" {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              CONTACT
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">聯絡我們</h2>
            <p className="mt-2 text-slate-600">即時安排上門檢測或線上諮詢。</p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4">
                <PhoneCall className="h-10 w-10 rounded-full bg-slate-900 p-2 text-white" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">電話</p>
                  <a href="tel:+85223888888" className="text-lg font-semibold text-slate-900">
                    +852 2388 8888
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4">
                <Mail className="h-10 w-10 rounded-full bg-sky-100 p-2 text-sky-600" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">電郵</p>
                  <a href="mailto:service@hopyik.com" className="text-lg font-semibold text-slate-900">
                    service@hopyik.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4">
                <MapPin className="h-10 w-10 rounded-full bg-yellow-100 p-2 text-yellow-600" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">地址</p>
                  <p className="text-lg font-semibold text-slate-900">九龍觀塘成業街123號地鋪</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4">
                <Clock3 className="h-10 w-10 rounded-full bg-emerald-100 p-2 text-emerald-600" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">服務時間</p>
                  <p className="text-lg font-semibold text-slate-900">週一至週六 09:00 - 18:00</p>
                  <p className="text-sm text-slate-500">提供 24 小時緊急支援</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="flex-1 bg-slate-900 text-white hover:bg-slate-800">
                <a href="https://wa.me/85268881688" target="_blank" rel="noreferrer">
                  WhatsApp 即時回覆
                </a>
              </Button>
              <Button asChild variant="outline" className="flex-1 border-slate-700 text-slate-900">
                <a href="mailto:service@hopyik.com">提交維修需求</a>
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
              title="Hop Yik Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.5867343351!2d114.216!3d22.313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f8e1a332b4d7%3A0x4f3d8e7f9f39c9b8!2sKwun%20Tong!5e0!3m2!1szh-TW!2shk!4v1700000000000!5m2!1szh-TW!2shk"
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

