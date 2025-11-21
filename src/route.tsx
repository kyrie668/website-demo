import SuspenseLazy from '@/components/suspense-lazy';
import Page404 from './pages/page404';

const Home = SuspenseLazy(() => import('@/pages/home'));
const About = SuspenseLazy(() => import('@/pages/about'));
const Services = SuspenseLazy(() => import('@/pages/services'));
const Projects = SuspenseLazy(() => import('@/pages/projects'));
const CaseDetail = SuspenseLazy(() => import('@/pages/projects/case-detail'));
const Contact = SuspenseLazy(() => import('@/pages/contact'));

export const routes = [
  {
    path: '/',
    name: '首頁',
    element: Home,
    render: true,
  },
  {
    path: '/about',
    name: '關於我們',
    element: About,
    render: true,
  },
  {
    path: '/services',
    name: '專業服務',
    element: Services,
    render: true,
  },
  {
    path: '/projects',
    name: '工程案例',
    element: Projects,
    render: true,
  },
  {
    path: '/projects/case/:caseId',
    name: '案例詳情',
    element: CaseDetail,
    render: false,
  },
  {
    path: '/contact',
    name: '聯絡我們',
    element: Contact,
    render: true,
  },
  {
    path: '*',
    element: <Page404 />,
  },
];
