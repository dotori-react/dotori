import { useState } from 'react';

import { Icon } from 'dotori-icons';

import { Button } from '@dotori-components/components';

import MiniSideBarLink from './MiniSideBarLink';

const MiniSideBarLinks = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleActiveIndexClick = (index: number) => setActiveIndex(index);

  return (
    <div className="flex h-full flex-col">
      <Button className="cursor-pointer p-1" variant="unstyle" onClick={() => handleActiveIndexClick(-1)}>
        <Icon icon="home" />
      </Button>
      <div className="mt-14 flex flex-col gap-2">
        {[
          { icon: <Icon icon="star" />, label: 'Dashboard' },
          { icon: <Icon icon="star" />, label: 'Analytics' },
          { icon: <Icon icon="star" />, label: 'Releases' },
          { icon: <Icon icon="star" />, label: 'Account' },
          { icon: <Icon icon="star" />, label: 'Security' },
        ].map((link, index) => (
          <MiniSideBarLink
            key={link.label}
            active={activeIndex === index}
            {...link}
            onClick={() => handleActiveIndexClick(index)}
          />
        ))}
      </div>
      <div className="mb-20 mt-auto pt-2">
        <MiniSideBarLink icon={<Icon icon="setting" />} label="Setting" />
      </div>
    </div>
  );
};

export default MiniSideBarLinks;
