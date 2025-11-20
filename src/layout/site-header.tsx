import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, PhoneCall, MapPin, Clock4 } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: '首頁', href: '/' },
  { label: '關於我們', href: '/about' },
  { label: '專業服務', href: '/services' },
  { label: '工程案例', href: '/projects' },
  { label: '聯絡我們', href: '/contact' },
];

export function SiteHeader() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#cbe6ff] bg-[#8fc5f1]/90 backdrop-blur supports-[backdrop-filter]:bg-[#8fc5f1]/70">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase tracking-widest text-sky-600 shadow">
            Hop Yik
          </div>
          <div>
            <p className="text-lg font-bold tracking-[0.08em] text-slate-900">合益鋁窗公司</p>
            <p className="text-xs font-medium text-slate-600">Hop Yik Engineering Co., Ltd.</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'transition-colors hover:text-slate-900',
                isActive(link.href) ? 'text-slate-900 font-semibold' : 'text-slate-700'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline" className="border-slate-700 text-slate-900" asChild>
            <Link to="/projects">查看案例</Link>
          </Button>
          <Button className="bg-yellow-400 text-slate-900 hover:bg-yellow-300" asChild>
            <Link to="/contact">立即聯絡</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="h-10 w-10 p-0 md:hidden" aria-label="開啟選單">
              <Menu className="h-6 w-6 text-slate-900" />
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="bg-white px-4 pt-6">
            <div className="space-y-4">
              <div>
                <p className="text-base font-semibold text-slate-900">合益鋁窗公司</p>
                <p className="text-sm text-slate-600">專營鋁窗維修、窗台滲水、玻璃更換</p>
              </div>
              <nav className="flex flex-col gap-2 text-base font-medium text-slate-700">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'rounded-md px-2 py-2 hover:bg-slate-100',
                      isActive(link.href) ? 'text-slate-900 font-semibold' : 'text-slate-700'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="rounded-lg bg-slate-50 p-4 text-sm text-slate-600">
                <p className="mb-2 font-semibold text-slate-900">聯絡資料</p>
                <div className="flex items-center gap-2">
                  <PhoneCall className="h-4 w-4 text-slate-500" />
                  <a href="tel:+85223888888" className="hover:text-slate-900">
                    +852 2388 8888
                  </a>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-slate-500" />
                  <span>九龍觀塘成業街123號</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Clock4 className="h-4 w-4 text-slate-500" />
                  <span>週一至週六 09:00-18:00</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 border-slate-700 text-slate-900" asChild>
                  <Link to="/projects" onClick={() => setOpen(false)}>
                    查看案例
                  </Link>
                </Button>
                <Button className="flex-1 bg-yellow-400 text-slate-900 hover:bg-yellow-300" asChild>
                    <Link to="/contact" onClick={() => setOpen(false)}>
                      聯絡我們
                    </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
