# useExcelWriter

:::warning

This hook is in the **experimental** stage.

:::

- This is a hook that provides a function to generate `Excel` files.

<br/>

## Features

- It offers a function to create an `Excel` file from data in `JSON` format.

<br/>

## Types

```typescript
const useExcelWriter: <T extends Partial<Column> & {
    key: string;
}>() => {
    writer: (cols: T[], rows: Record<T["key"], string | number | null | undefined>[], options: {
        worksheet?: Partial<AddWorksheetOptions> & {
            name?: string;
        };
        excelName?: string;
    }) => Promise<...>;
}
```
