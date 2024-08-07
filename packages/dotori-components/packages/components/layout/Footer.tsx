import { cn, getNowMonthDate } from 'dotori-utils';

import { Entity } from '@dotori-components/components';

const Footer = ({ className }: FooterProps) => {
  const { year } = getNowMonthDate();

  return (
    <footer className="h-48 w-full py-4 text-xs shadow-inner">
      <div className={footerStyle({ className })}>
        <div className="flex flex-col gap-[5px]">
          <h4 className="typo-xs700">
            <Entity symbol="(" />
            <span>주</span>
            <Entity symbol=")" />
            <span>홈페이지제작소</span>
          </h4>
          <address>서울특별시 종로구 | 이동규</address>
          <div>
            <Entity className="mr-1" symbol="©" />
            <span>{year} LEE_DONG_GYU, All rights reserved.</span>
          </div>
        </div>
        <div>
          <h4 className="typo-xs700">개인정보처리방침</h4>
        </div>
      </div>
    </footer>
  );
};

interface FooterProps {
  className?: string;
}

const footerStyle = cn(
  'fixed bottom-0 left-0 right-0 mx-auto flex h-inherit max-w-layout flex-wrap items-center justify-between gap-4',
);

export default Footer;
