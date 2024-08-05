import { createSafeContext } from 'dotori-context';

interface AccordionContextValue {
  value?: string;
  isOpen: boolean;
  toggle: () => void;
}

export const [AccordionProvider, useAccordionContext] = createSafeContext<AccordionContextValue>(
  'Accordion component was not found in the tree',
);
