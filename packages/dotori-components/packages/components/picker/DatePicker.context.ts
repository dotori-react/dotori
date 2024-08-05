import { createOptionalContext } from 'dotori-context';

interface DatePickerContextValue {
  selectedCalendarDate: { year: number; month: number; date: number } | null;
  calendarDateClick: (selectedCalendarDate: { year: number; month: number; date: number }) => void;
}

export const [DatePickerProvider, useDatePickerContext] = createOptionalContext<DatePickerContextValue>();
