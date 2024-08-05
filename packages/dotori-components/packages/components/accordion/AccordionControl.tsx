import { Icon } from 'dotori-icons';
import { cn } from 'dotori-utils';

import { useAccordionContext } from './Accordion.context';
import { useAccordionGroupContext } from './AccordionGroup.context';

const AccordionControl = ({ className, leftIcon, rightIcon, children, ...props }: AccordionControlProps) => {
  const accordionGroupCTX = useAccordionGroupContext();
  const { value, isOpen, toggle } = useAccordionContext();

  const combinedContext = accordionGroupCTX
    ? {
        isOpen:
          accordionGroupCTX.accordionState[value as keyof typeof accordionGroupCTX.accordionState]?.isOpen ?? false,
      }
    : { isOpen };

  const handleAccordionControlClick = () => {
    if (!accordionGroupCTX) {
      toggle();
      return;
    }

    if (!value) {
      console.error('required value prop in Accordion component');
      return;
    }

    if (accordionGroupCTX.multiple) accordionGroupCTX.updateAccordionState(value, !combinedContext.isOpen);
    else accordionGroupCTX.updateAccordionStateForSingle(value);
  };

  return (
    <button className={buttonStyle({ className })} onClick={handleAccordionControlClick} {...props}>
      {leftIcon && <div className="pr-2">{leftIcon}</div>}
      <div className="flex-1 text-start">{children}</div>
      {rightIcon && <div className="pl-2">{rightIcon}</div>}
      {!(leftIcon || rightIcon) && (
        <div className={chevronArrowIconStyle({ isOpen: combinedContext.isOpen })}>
          <Icon className="h-full w-full" icon="chevronArrowRight" />
        </div>
      )}
    </button>
  );
};

export interface AccordionControlProps extends React.ComponentPropsWithoutRef<'button'> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const buttonStyle = cn('flex w-full items-center justify-between p-3 hover:bg-gray-200');

const chevronArrowIconStyle = cn('box-content h-5 w-5 shrink-0 rotate-90 transition-all', {
  variants: {
    isOpen: {
      true: '-rotate-90',
      false: 'rotate-90',
    },
  },
});

export default AccordionControl;
