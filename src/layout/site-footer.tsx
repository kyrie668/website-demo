import { PhoneCall, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f1f35] text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold tracking-[0.08em]">合益鋁窗公司</p>
          <p className="text-sm font-medium text-white/70">Hop Yik Engineering Co., Ltd.</p>
          <p className="mt-4 text-sm text-white/70">
            專注鋁窗維修、防漏處理、玻璃更換及保養，為香港家庭及商舖提供安全可靠的日常維護服務。
          </p>
        </div>
        <div>
          <p className="text-base font-semibold">快速導覽</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-white/70">
            <Link to="/" className="hover:text-white">
              首頁
            </Link>
            <Link to="/about" className="hover:text-white">
              關於我們
            </Link>
            <Link to="/services" className="hover:text-white">
              專業服務
            </Link>
            <Link to="/projects" className="hover:text-white">
              工程案例
            </Link>
            <Link to="/contact" className="hover:text-white">
              聯絡我們
            </Link>
          </div>
        </div>
        <div>
          <p className="text-base font-semibold">聯絡方式</p>
          <div className="mt-4 space-y-3 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <PhoneCall className="h-4 w-4" />
              <a href="tel:+85223888888" className="hover:text-white">
                +852 2388 8888
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:service@hopyik.com" className="hover:text-white">
                service@hopyik.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>九龍觀塘成業街123號地鋪</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <span>© {currentYear} Hop Yik Engineering Co., Ltd. 保留所有權利</span>
          <span>24小時緊急維修熱線：+852 6888 1688</span>
        </div>
      </div>
    </footer>
  );
}
