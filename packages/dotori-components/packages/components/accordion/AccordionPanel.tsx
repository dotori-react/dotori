import { cn } from 'dotori-utils';

import { useAccordionContext } from './Accordion.context';
import { useAccordionGroupContext } from './AccordionGroup.context';

const AccordionPanel = ({ className, children, ...props }: AccordionPanelProps) => {
  const accordionGroupCTX = useAccordionGroupContext();
  const { value, isOpen } = useAccordionContext();

  const combinedContext = accordionGroupCTX
    ? {
        isOpen:
          accordionGroupCTX.accordionState[value as keyof typeof accordionGroupCTX.accordionState]?.isOpen ?? false,
      }
    : { isOpen };

  return (
    <div className="tw-preflight">
      <div className={panelStyle({ className, isOpen: combinedContext.isOpen })} {...props}>
        {children}
      </div>
    </div>
  );
};

export interface AccordionPanelProps extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
}

const panelStyle = cn('px-3 transition-all', {
  variants: {
    isOpen: {
      true: 'py-3 opacity-100',
      false: 'h-0 overflow-hidden py-0 opacity-0',
    },
  },
});

export default AccordionPanel;
