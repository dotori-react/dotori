import { type TableProps } from './Table';
import TableRow from './TableRow';

const TableRows = <T extends { id: string | number }>({ rows, cols }: TableProps<T>) => (
  <tbody className="typo-xs400">
    {rows.map((row, index) => (
      <TableRow key={index} cols={cols} index={index} row={row} />
    ))}
  </tbody>
);

export default TableRows;
