export const getFileItemsInfo = (fileItems: DataTransferItemList): FileItemInfo[] =>
  [...fileItems].map(fileItem => {
    const { kind, type } = fileItem;
    const file = kind === 'file' ? fileItem.getAsFile() : null;

    return { name: file?.name, type, size: file?.size };
  });

interface FileItemInfo {
  name: string | undefined;
  type: string;
  size: number | undefined;
}
