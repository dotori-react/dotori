import { createOptionalContext } from 'dotori-context';

import { type AccordionState } from './AccordionGroup';

interface AccordionGroupContextValue {
  defaultValue: string;
  multiple: boolean;
  selectedValue: string;
  accordionState: AccordionState;
  updateSelectedValue: (value: string) => void;
  updateAccordionState: (value: string, isOpen: boolean) => void;
  updateAccordionStateForSingle: (value: string) => void;
}

export const [AccordionGroupProvider, useAccordionGroupContext] = createOptionalContext<AccordionGroupContextValue>();
