# getNextMonthDate

This utility function returns detailed information about the next month based on the given date. By default, it returns the information for the first day of the next month.

## Features

- The `getNextMonthDate` function allows you to retrieve detailed information about the next month relative to the given date.
- It provides:
  - The `year`, `month`, and specific `date` within the next month.
  - The first and last dates of the next month.
  - The day of the week for the specified date, first date, and last date, including both the name and index.
- The function utilizes `getNowMonthDate` from `@dotori-utils/utils` to fetch this detailed information.

## Types

```typescript
export const getNowMonthDate: (now?: Date) => {
  year: number;
  month: number;
  date: number;
  firstDate: number;
  lastDate: number;
  day: {
    name:
      { en: { long: 'sunday', short: 'sun' }, kr: { long: '일요일', short: '일' } }
      | { en: { long: 'monday', short: 'mon' }, kr: { long: '월요일', short: '월' } };
      | { en: { long: 'tuesday', short: 'tue' }, kr: { long: '화요일', short: '화' } },
      | { en: { long: 'wednesday', short: 'wed' }, kr: { long: '수요일', short: '수' } },
      | { en: { long: 'thursday', short: 'thu' }, kr: { long: '목요일', short: '목' } },
      | { en: { long: 'friday', short: 'fri' }, kr: { long: '금요일', short: '금' } },
      | { en: { long: 'saturday', short: 'sat' }, kr: { long: '토요일', short: '토' } },
    idx: 0 | 1 | 2 | 3 | 4 | 5 | 6
  };
  firstDay: {
    name:
      { en: { long: 'sunday', short: 'sun' }, kr: { long: '일요일', short: '일' } }
      | { en: { long: 'monday', short: 'mon' }, kr: { long: '월요일', short: '월' } };
      | { en: { long: 'tuesday', short: 'tue' }, kr: { long: '화요일', short: '화' } },
      | { en: { long: 'wednesday', short: 'wed' }, kr: { long: '수요일', short: '수' } },
      | { en: { long: 'thursday', short: 'thu' }, kr: { long: '목요일', short: '목' } },
      | { en: { long: 'friday', short: 'fri' }, kr: { long: '금요일', short: '금' } },
      | { en: { long: 'saturday', short: 'sat' }, kr: { long: '토요일', short: '토' } },
    idx: 0 | 1 | 2 | 3 | 4 | 5 | 6
  };;
  lastDay: {
    name:
      { en: { long: 'sunday', short: 'sun' }, kr: { long: '일요일', short: '일' } }
      | { en: { long: 'monday', short: 'mon' }, kr: { long: '월요일', short: '월' } };
      | { en: { long: 'tuesday', short: 'tue' }, kr: { long: '화요일', short: '화' } },
      | { en: { long: 'wednesday', short: 'wed' }, kr: { long: '수요일', short: '수' } },
      | { en: { long: 'thursday', short: 'thu' }, kr: { long: '목요일', short: '목' } },
      | { en: { long: 'friday', short: 'fri' }, kr: { long: '금요일', short: '금' } },
      | { en: { long: 'saturday', short: 'sat' }, kr: { long: '토요일', short: '토' } },
    idx: 0 | 1 | 2 | 3 | 4 | 5 | 6
  };;
};
```

## Example

```typescript
const currentMonthInfo = getNowMonthDate();
console.log(currentMonthInfo);
/*
Output: 
{
  year: 2024,
  month: 8,
  date: 31,
  firstDate: 1,
  lastDate: 31,
  day: { name: 'Saturday', idx: 6 },
  firstDay: { name: 'Thursday', idx: 4 },
  lastDay: { name: 'Saturday', idx: 6 }
}
*/
```
