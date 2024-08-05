import { useEffect } from 'react';

import { useDisClosure } from 'dotori-hooks';

import { AccordionProvider } from './Accordion.context';
import AccordionControl from './AccordionControl';
import AccordionGroup from './AccordionGroup';
import { useAccordionGroupContext } from './AccordionGroup.context';
import AccordionPanel from './AccordionPanel';

const Accordion = ({ value, children }: AccordionProps) => {
  const accordionGroupCTX = useAccordionGroupContext();
  const isMatchedValue = !!accordionGroupCTX?.defaultValue && !!value && accordionGroupCTX?.defaultValue === value;

  const { isOpen, toggle } = useDisClosure(isMatchedValue);

  useEffect(() => {
    if (!accordionGroupCTX) return;

    if (!value) {
      console.error('required value prop in Accordion component');
      return;
    }

    const { updateAccordionState } = accordionGroupCTX;

    updateAccordionState(value, isOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AccordionProvider value={{ value, isOpen, toggle }}>{children}</AccordionProvider>;
};

interface AccordionProps {
  children: React.ReactNode;
  value?: string;
}

Accordion.Group = AccordionGroup;
Accordion.Control = AccordionControl;
Accordion.Panel = AccordionPanel;

export default Accordion;
