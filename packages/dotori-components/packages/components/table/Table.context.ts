/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSafeContext } from 'dotori-context';

import { TableColumn } from './Table';

interface TableContextValue {
  selectedRows: any[];
  orderBy: 'default' | 'asc' | 'desc';
  tableColumnChecked: boolean;
  tableColumnCheckboxIndeterminate: boolean;
  tableRowIds: (string | number)[];
  selectedColumn: TableColumn<any> | null;
  addSelectedRow: (id: string | number, selectedRow: any) => void;
  deleteSelectedRow: (id: string | number) => void;
  tableColumnCheckboxChange: () => void;
  sortTableRows: (col: TableColumn<any>) => void;
  updateTableDataWidth: (field: string | number | symbol, width: number) => void;
}

export const [TableProvider, useTableContext] = createSafeContext<TableContextValue>(
  'Table component was not found in the tree',
);
