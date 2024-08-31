# getFileItemsInfo

This utility function extracts and returns detailed information about files from a `DataTransferItemList`, typically obtained from a drag-and-drop operation or file input.

## Features

- The `getFileItemsInfo` function processes a `DataTransferItemList` and returns an array of file information objects.
- Each file information object contains the file's name, type, and size.
- If an item is not a file, the corresponding file information fields (`name` and `size`) will be `undefined`.

## Types

```typescript
export const getFileItemsInfo: (fileItems: DataTransferItemList) => FileItemInfo[];

interface FileItemInfo {
  name: string | undefined;
  type: string;
  size: number | undefined;
}
```

## Example

```typescript
// Example: Extracting file information from a DataTransferItemList
const handleDrop = (event: DragEvent) => {
  event.preventDefault();
  const fileItems = event.dataTransfer?.items;
  if (fileItems) {
    const fileInfoArray = getFileItemsInfo(fileItems);
    console.log(fileInfoArray);
    /*
    Output example:
    [
      { name: 'example.txt', type: 'text/plain', size: 1024 },
      { name: 'image.png', type: 'image/png', size: 204800 },
    ]
    */
  }
};
```
