import { useScroll } from 'dotori-hooks';
import { cn, VariantProps } from 'dotori-utils';
import { Link } from 'react-router-dom';

import { Image } from '@dotori-components/components';
import { PATH } from '@dotori-components/constants';

const Header = ({ fixedHeader, title, imgSrc, className }: HeaderProps) => {
  const scroll = useScroll();

  return (
    <header
      className={headerStyle({ className, invisible: !fixedHeader && window.scrollY > 200 && scroll.isScrollDown })}>
      <div className="flex h-full items-center justify-between px-5">
        <div className="flex items-center justify-center gap-3">
          <Link to={PATH.HOME}>{imgSrc ? <Image src={imgSrc} title={title} /> : title}</Link>
          <span className="typo-xl400">{title}</span>
        </div>
      </div>
    </header>
  );
};

interface HeaderProps extends Omit<VariantProps<typeof headerStyle>, 'invisible'> {
  title: string;
  imgSrc?: string;
  fixedHeader?: boolean;
  className?: string;
}

const headerStyle = cn('sticky left-0 right-0 z-[2] w-full bg-gray-0 shadow-inner transition-all', {
  variants: {
    invisible: {
      true: '-top-20',
      false: 'top-0',
    },
  },
  defaultVariants: {
    invisible: false,
  },
});

export default Header;
