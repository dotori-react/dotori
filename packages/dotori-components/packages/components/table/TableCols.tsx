import { useScrollbarWidth } from 'dotori-hooks';
import { cn } from 'dotori-utils';

import { Checkbox } from '@dotori-components/components';

import { type TableProps } from './Table';
import { useTableContext } from './Table.context';
import TableCol from './TableCol';

const TableCols = <T extends { id: string | number }>({ cols, fixHeader }: TableColsProps<T>) => {
  const ctx = useTableContext();
  const scrollbarWidth = useScrollbarWidth();

  return (
    <thead className={tableHeaderStyle({ fixHeader })}>
      <tr className="flex" role="row">
        <th className={tableColumnStyle({ isCheckboxColumn: true })} role="columnheader">
          <Checkbox
            checked={ctx.tableColumnChecked}
            className="p-0"
            indeterminate={ctx.tableColumnCheckboxIndeterminate}
            onChange={ctx.tableColumnCheckboxChange}
          />
        </th>
        {cols.map(col => (
          <TableCol key={col.field.toString()} col={col} />
        ))}
        <th style={{ width: `${scrollbarWidth}px` }} />
      </tr>
    </thead>
  );
};

const tableHeaderStyle = cn('bg-white typo-sm700', {
  variants: {
    fixHeader: {
      true: 'sticky top-0 bg-gray-0',
      false: '',
    },
  },
  defaultVariants: {
    fixHeader: false,
  },
});

const tableColumnStyle = cn('flex px-3 py-2', {
  variants: {
    isCheckboxColumn: {
      true: '',
      false: 'cursor-pointer gap-2 hover:bg-gray-200',
    },
  },
  defaultVariants: {
    isCheckboxColumn: false,
  },
});

interface TableColsProps<T> extends TableProps<T> {}

export default TableCols;
