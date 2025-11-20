import { motion } from 'framer-motion';
import { PhoneCall, Mail, MapPin, Clock3, MessageCircle, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactInfos = [
  {
    title: '電話',
    value: '+852 2388 8888',
    href: 'tel:+85223888888',
    icon: PhoneCall,
    note: '24 小時緊急支援熱線：+852 6888 1688',
  },
  {
    title: '電郵',
    value: 'service@hopyik.com',
    href: 'mailto:service@hopyik.com',
    icon: Mail,
    note: '歡迎附上圖像或圖紙，方便預先評估',
  },
  {
    title: '地址',
    value: '九龍觀塘成業街123號地鋪',
    href: 'https://maps.app.goo.gl/R4i7u3gk8Aap',
    icon: MapPin,
    note: '歡迎預約到訪展示廳了解物料',
  },
  {
    title: '服務時間',
    value: '週一至週六 09:00-18:00',
    href: '',
    icon: Clock3,
    note: '星期日及公眾假期接受預約工程',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true, amount: 0.3 },
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-[#dff0ff] py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-600">CONTACT</p>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">快速聯絡合益鋁窗團隊</h1>
            <p className="mt-4 text-base text-slate-600">
              填寫表單或透過 WhatsApp 與我們分享現場需求，我們會在 2 小時內回覆預約時間與初步報價。
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
              <span className="rounded-full bg-white px-4 py-2 shadow">屋苑驗窗</span>
              <span className="rounded-full bg-white px-4 py-2 shadow">滲水偵測</span>
              <span className="rounded-full bg-white px-4 py-2 shadow">玻璃更新</span>
            </div>
            <div className="mt-8 flex gap-4">
              <Button className="bg-slate-900 text-white hover:bg-slate-800" asChild>
                <a href="https://wa.me/85268881688" target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
              <Button variant="outline" className="border-slate-900 text-slate-900" asChild>
                <a href="tel:+85223888888">
                  <PhoneCall className="mr-2 h-4 w-4" />
                  立即致電
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.div className="rounded-[32px] bg-white p-6 shadow-2xl" {...fadeUp} transition={{ delay: 0.1 }}>
            <iframe
              title="Hop Yik Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.5867343351!2d114.216!3d22.313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f8e1a332b4d7%3A0x4f3d8e7f9f39c9b8!2sKwun%20Tong!5e0!3m2!1szh-TW!2shk!4v1700000000000!5m2!1szh-TW!2shk"
              className="h-72 w-full rounded-3xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="mt-4 text-sm text-slate-500">點擊放大地圖，可規劃自駕或公共交通路線。</p>
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
                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">REQUEST</p>
                <h2 className="text-2xl font-bold">線上報價表單</h2>
                <p className="text-sm text-slate-600">
                  請留下最方便聯絡的方式，我們會在 2 小時內回覆並安排現場檢測。
                </p>
                <form className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                      聯絡人姓名
                    </label>
                    <Input placeholder="例如：陳先生" className="mt-2" />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">電話</label>
                      <Input placeholder="+852 9XXX XXXX" className="mt-2" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">電郵</label>
                      <Input placeholder="you@example.com" className="mt-2" type="email" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">地點</label>
                    <Input placeholder="屋苑／大廈／街道" className="mt-2" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">需求描述</label>
                    <Textarea placeholder="請簡述問題、面積、期望時間等資訊" className="mt-2 min-h-[120px]" />
                  </div>
                  <Button className="w-full bg-slate-900 text-white hover:bg-slate-800" type="button">
                    <FileText className="mr-2 h-4 w-4" />
                    提交資料
                  </Button>
                  <p className="text-xs text-slate-500">
                    我們會以 WhatsApp／電話回覆，如需附加圖片可直接發送至 +852 6888 1688。
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

