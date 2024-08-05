import { cn, validateEven } from 'dotori-utils';

import { Checkbox } from '@/components';

import { type TableColumn } from './Table';
import { useTableContext } from './Table.context';

const TableRow = <T extends { id: string | number }>({ row, cols, index }: TableRowProps<T>) => {
  const ctx = useTableContext();

  const hasSelectedRowId = (ctx.selectedRows as T[]).some(selectedRow => selectedRow.id === row.id);

  const handleCheckboxChange = () => {
    if (!hasSelectedRowId) ctx.addSelectedRow(row.id, row);
    else ctx.deleteSelectedRow(row.id);
  };

  return (
    <tr className={tableRowStyle({ isEven: validateEven(index) })} role="row">
      <td className={tableRowCellStyle()} role="gridcell">
        <Checkbox checked={hasSelectedRowId} onChange={handleCheckboxChange} />
      </td>
      {cols.map(({ field, className, width }) => (
        <td
          key={field.toString()}
          className={tableRowCellStyle({ className })}
          role="gridcell"
          style={{ width: `${width}px` }}>
          {row[field] as React.ReactNode}
        </td>
      ))}
    </tr>
  );
};

const tableRowStyle = cn('flex hover:bg-gray-100', {
  variants: {
    isEven: {
      true: 'bg-gray-0',
      false: 'bg-white',
    },
  },
});

const tableRowCellStyle = cn('flex overflow-hidden text-ellipsis text-nowrap px-3 py-2');

interface TableRowProps<T> {
  row: T;
  cols: TableColumn<T>[];
  index: number;
}

export default TableRow;
