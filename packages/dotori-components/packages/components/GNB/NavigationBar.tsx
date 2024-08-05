import { useEffect } from 'react';

import { useDisClosure, useMediaQuery } from 'dotori-hooks';
import { Link } from 'react-router-dom';

import { ActionIcon, Button, Drawer } from '@/components';

const NavigationBar = ({ data }: NavigationBarProps) => {
  const { isOpen: isDrawerOpen, open: drawerOpen, close: drawerClose } = useDisClosure();
  const isMatched = useMediaQuery('(min-width: 800px)');

  useEffect(() => {
    if (isMatched) drawerClose();
  }, [drawerClose, isMatched]);

  return (
    <nav className="mx-auto h-10 max-w-layout">
      {isMatched ? (
        <ul className="flex gap-[20px]">
          {data.map(({ title, path }) => (
            <li key={title}>
              <Link to={path}>
                <Button color="gray" variant="outline">
                  {title}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-row-reverse">
          <ActionIcon icon="hamburger" onClick={drawerOpen} />
        </div>
      )}
      <Drawer close={drawerClose} isOpen={isDrawerOpen} fullWidth>
        <ul className="flex flex-col gap-[20px]">
          {data.map(({ title, path }) => (
            <li key={title}>
              <Link to={path}>
                <Button>{title}</Button>
              </Link>
            </li>
          ))}
        </ul>
      </Drawer>
    </nav>
  );
};

interface NavigationBarProps {
  data: { title: string; path: string; [index: string]: string }[];
}

export default NavigationBar;
