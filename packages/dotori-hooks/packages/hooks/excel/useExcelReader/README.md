# useExcelReader

:::warning

This hook is in the **experimental** stage.

:::

- This is a hook that reads an `Excel` file.

<br/>

## Features

- It provides a function to read an `Excel` file and returns the data converted to `JSON` format.

<br/>

## Types

```typescript
const useExcelReader: () => {
  convertedExcel:
    | {
        [index: string]: {
          based: {
            rows: RowValues[];
            cols: (readonly CellValue[] | undefined)[];
          };
        };
      }[]
    | null;
  oneFileReader: (file: File) => void;
};
```

<br/>
