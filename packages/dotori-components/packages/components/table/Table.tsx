import { useEffect, useState } from 'react';

import { useMap } from 'dotori-hooks';
import { sortFromObjectArray } from 'dotori-utils';

import { TableProvider } from './Table.context';
import TableCols from './TableCols';
import TableRows from './TableRows';

const Table = <T extends { id: string | number }>({ rows, cols, onSelect, ...props }: TableProps<T>) => {
  const [tableData, setTableData] = useState<{
    cols: TableColumn<T>[];
    rows: T[];
  }>({
    cols: cols.map(col => ({ ...col, width: Math.max(col.width ?? DEFAULT_CELL_WIDTH, DEFAULT_CELL_WIDTH) })),
    rows,
  });
  const { map, formattedArray: selectedRows, add, adds, remove, clear } = useMap<number | string, T>();
  const [tableColumnChecked, setTableColumnChecked] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState<TableColumn<T> | null>(null);
  const [tableRowIds, setTableRowIds] = useState<(string | number)[]>([]);
  const [orderBy, setOrderBy] = useState<'default' | 'asc' | 'desc'>('default');

  const tableColumnCheckboxIndeterminate = selectedRows.length > 0 && selectedRows.length < rows.length;

  const sortedRows =
    orderBy === 'default'
      ? tableData.rows
      : sortFromObjectArray({
          array: tableData.rows,
          key: selectedColumn?.field,
          order: orderBy,
        });

  const tableColumnCheckboxChange = () => {
    const newTableColumnChecked = !tableColumnChecked;

    setTableColumnChecked(newTableColumnChecked);

    if (newTableColumnChecked) {
      adds(rows.map(row => ({ key: row.id, value: row })));
      setTableRowIds(rows.map(row => row.id));
    } else {
      clear();
      setTableRowIds([]);
    }

    if (onSelect) onSelect(newTableColumnChecked ? rows : []);
  };

  const addSelectedRow = (id: string | number, row: T) => {
    const newMap = new Map(map);

    add(id, row);
    newMap.set(id, row);
    setTableColumnChecked(newMap.size === rows.length);
    setTableRowIds(prev => [...prev, row.id]);

    if (onSelect) onSelect([...newMap.values()]);
  };

  const deleteSelectedRow = (id: string | number) => {
    const newMap = new Map(map);

    remove(id);
    newMap.delete(id);
    setTableColumnChecked(newMap.size === rows.length);
    setTableRowIds(prev => prev.filter(rowId => rowId !== id));

    if (onSelect) onSelect([...newMap.values()]);
  };

  const sortTableRows = (newSelectedColumn: TableColumn<T>) => {
    const selectedColumnKeys = Object.keys(selectedColumn ?? {}) as (keyof TableColumn<T>)[];
    const isSameSelectedColumn = selectedColumnKeys.every(key => newSelectedColumn[key] === selectedColumn?.[key]);

    const toggledOrderBy = orderBy === 'default' ? 'asc' : orderBy === 'asc' ? 'desc' : 'default';

    setOrderBy(isSameSelectedColumn ? toggledOrderBy : 'asc');
    setSelectedColumn(newSelectedColumn);
  };

  const updateTableDataWidth = (field: string | number | symbol, width: number) => {
    const updated = { ...tableData, cols: tableData.cols.map(col => (col.field === field ? { ...col, width } : col)) };

    setTableData(updated);
  };

  useEffect(() => {
    setTableData({ rows, cols });
  }, [rows, cols]);

  return (
    <TableProvider
      value={{
        selectedColumn,
        orderBy,
        tableRowIds,
        selectedRows,
        tableColumnChecked,
        tableColumnCheckboxIndeterminate,
        addSelectedRow,
        deleteSelectedRow,
        tableColumnCheckboxChange,
        sortTableRows,
        updateTableDataWidth,
      }}>
      <div className="w-full overflow-scroll">
        <table className="min-w-full table-fixed border border-gray-300">
          <TableCols cols={tableData.cols} rows={sortedRows} {...props} />
          <TableRows cols={tableData.cols} rows={sortedRows} {...props} />
        </table>
      </div>
    </TableProvider>
  );
};

export interface TableColumn<T> {
  field: keyof T;
  headerName: string;
  className?: string;
  width?: number;
}

export interface TableProps<T> {
  cols: TableColumn<T>[];
  rows: T[];
  fixHeader?: boolean;
  onSelect?: (selectedRows: T[]) => void;
}

const DEFAULT_CELL_WIDTH = 100;

export default Table;
