# getCalendarDate

This utility function generates a comprehensive calendar view based on a given date. It provides detailed information about the current month, including Saturdays and Sundays for the previous, current, and next months.

## Features

- The `getCalendarDate` function provides a complete calendar structure for a given month:
  - It returns details for the previous, current, and next months.
  - It calculates all Saturdays and Sundays across these three months.
  - It includes the dates that belong to the previous and next months but fall within the current month's calendar view.
- The function relies on `getNowMonthDate`, `getPrevMonthDate`, and `getNextMonthDate` utilities to gather information about each month.

## Types

```typescript
export const getCalendarDate: (now?: Date) => {
  prev: ReturnType<typeof getPrevMonthDate>;
  now: ReturnType<typeof getNowMonthDate>;
  next: ReturnType<typeof getNextMonthDate>;
  saturdays: { year: number; month: number; date: number }[];
  sundays: { year: number; month: number; date: number }[];
  datesOfPrevMonth: { year: number; month: number; date: number }[];
  datesOfNowMonth: { year: number; month: number; date: number }[];
  datesOfNextMonth: { year: number; month: number; date: number }[];
};
```

## Example

```typescript
const calendar = getCalendarDate(new Date(2024, 7, 15)); // Example date: August 15, 2024
console.log(calendar);

/*
Output:
{
  prev: { ... }, // Details for July 2024
  now: { ... },  // Details for August 2024
  next: { ... }, // Details for September 2024
  saturdays: [
    { year: 2024, month: 7, date: 3 }, // Saturdays in July 2024
    { year: 2024, month: 8, date: 7 }, // Saturdays in August 2024
    { year: 2024, month: 9, date: 4 }  // Saturdays in September 2024
  ],
  sundays: [
    { year: 2024, month: 7, date: 4 }, // Sundays in July 2024
    { year: 2024, month: 8, date: 8 }, // Sundays in August 2024
    { year: 2024, month: 9, date: 5 }  // Sundays in September 2024
  ],
  datesOfPrevMonth: [
    { year: 2024, month: 7, date: 29 }, // Dates from the previous month (July 2024) to fill the current calendar's first week
    { year: 2024, month: 7, date: 30 },
    { year: 2024, month: 7, date: 31 }
  ],
  datesOfNowMonth: [
    { year: 2024, month: 8, date: 1 }, // All dates in August 2024
    ...
    { year: 2024, month: 8, date: 31 }
  ],
  datesOfNextMonth: [
    { year: 2024, month: 9, date: 1 }, // Dates from the next month (September 2024) to fill the current calendar's last week
    ...
    { year: 2024, month: 9, date: 7 }
  ]
}
*/
```
