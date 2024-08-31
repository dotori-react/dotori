# getNowMonthDate

This utility function returns detailed information about the current month based on the given date. It provides the year, month, current date, the first and last days of the month, and their corresponding day of the week.

## Features

- The `getNowMonthDate` function provides a comprehensive set of details for the current month:
  - The `year`, `month`, and `date` based on the input date (or the current date if no input is provided).
  - The first and last dates of the month.
  - The day of the week for the current date, first date, and last date, including both the name and index.
- The day of the week is returned as an object containing its name from the `DAY_OF_WEEKEND` constant and its index.

## Types

```typescript
const DAY_OF_WEEKEND = {
  0: { en: { long: 'sunday', short: 'sun' }, kr: { long: '일요일', short: '일' } },
  1: { en: { long: 'monday', short: 'mon' }, kr: { long: '월요일', short: '월' } },
  2: { en: { long: 'tuesday', short: 'tue' }, kr: { long: '화요일', short: '화' } },
  3: { en: { long: 'wednesday', short: 'wed' }, kr: { long: '수요일', short: '수' } },
  4: { en: { long: 'thursday', short: 'thu' }, kr: { long: '목요일', short: '목' } },
  5: { en: { long: 'friday', short: 'fri' }, kr: { long: '금요일', short: '금' } },
  6: { en: { long: 'saturday', short: 'sat' }, kr: { long: '토요일', short: '토' } },
};

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
