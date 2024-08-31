import { useState } from 'react';

import { Workbook, CellValue, RowValues } from 'exceljs';

const useExcelReader = () => {
  const [convertedExcel, setConvertedExcel] = useState<
    | {
        [index: string]: {
          based: {
            rows: RowValues[];
            cols: (readonly CellValue[] | undefined)[];
          };
        };
      }[]
    | null
  >(null);

  const oneFileReader = (file: File) => {
    const workbook = new Workbook();
    const fileReader = new FileReader();

    fileReader.readAsArrayBuffer(file);

    fileReader.onload = async () => {
      const buffer = fileReader.result;
      await workbook.xlsx.load(buffer as ArrayBuffer);

      const data = workbook.worksheets.map(worksheet => ({
        [worksheet.name]: {
          based: {
            rows: worksheet.getSheetValues().filter(v => v),
            cols: worksheet.columns.map(column => column.values),
          },
        },
      }));

      setConvertedExcel(data);
    };
  };

  return { convertedExcel, oneFileReader };
};

export default useExcelReader;
