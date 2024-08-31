/* eslint-disable no-param-reassign */
import { AddWorksheetOptions, Column, Workbook } from 'exceljs';
import { saveAs } from 'file-saver';

const useExcelWriter = <T extends Partial<Column> & { key: string }>() => {
  const writer = async (
    cols: T[],
    rows: Record<T['key'], string | number | null | undefined>[],
    options: { worksheet?: Partial<AddWorksheetOptions> & { name?: string }; excelName?: string },
  ) => {
    const { name: worksheetName = 'worksheet', ...worksheetOptions } = options.worksheet ?? {};
    const excelName = options?.excelName ?? 'excel';

    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet(worksheetName, worksheetOptions);

    worksheet.columns = cols;
    worksheet.addRows(rows);

    worksheet.columns.forEach(column => {
      const widths =
        column.values?.filter(v => v).map(v => convertPixelToWidth(getTextExcelPixel(v?.toString() ?? ''))) ?? [];

      const maxWidth = Math.max(...widths, column.width ?? 9);

      column.width = maxWidth + 5 / maxWidth;
      column.font = { name: defaultFontFamily };
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, excelName);
  };

  return { writer };
};

const convertPixelToWidth = (pixel: number) => pixel * 0.118;

const getTextExcelPixel = (text: string, fontSize = 11, fontFamily: string = defaultFontFamily) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (!context) return 0;

  context.font = `${fontSize + 5}px ${fontFamily}`;
  return context.measureText(text).width;
};

const defaultFontFamily = 'Calibri';

export default useExcelWriter;
