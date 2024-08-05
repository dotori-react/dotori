import { MiniSideBar } from '@/components';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import MiniSideBarLinks from './MiniSideBarLinks';

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header className="h-header" title="홈페이지제작소" />

    <MiniSideBar className="h-[calc(100%-theme(height.header))]">
      <MiniSideBarLinks />
    </MiniSideBar>

    <Main className="py-4 pl-24 pr-4">{children}</Main>
    <Footer className="py-4 pl-24 pr-4" />
  </>
);

type LayoutProps = {
  children: React.ReactNode;
};

export default Layout;
