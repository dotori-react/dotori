import { useEffect, useState } from 'react';

import { useElementRect, useHover } from 'dotori-hooks';
import { cn } from 'dotori-utils';

import { ActionIcon } from '@dotori-components/components';

import { type TableColumn } from './Table';
import { useTableContext } from './Table.context';

const TableCol = <T extends { id: string | number }>({ col }: TableColProps<T>) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const { ref: hoverSeparatorRef, hovered: separatorHovered } = useHover<HTMLButtonElement>();
  const { ref: hoverArrowRef, hovered: arrowHovered } = useHover<HTMLTableCellElement>();
  const { ref: rectRef, ...rect } = useElementRect<HTMLTableCellElement>(isMouseDown);
  const ctx = useTableContext();

  const orderBy = ctx.selectedColumn?.field !== col.field || ctx.orderBy === 'default' ? 'default' : ctx.orderBy;

  const combineRef = (element: HTMLTableCellElement) => {
    hoverArrowRef.current = element;
    rectRef.current = element;
  };

  const handleColumnClick = () => {
    ctx.sortTableRows(col);
  };

  const handleMouseDown = () => {
    document.body.classList.add('cursor-col-resize', 'select-none');
    setIsMouseDown(true);
  };

  useEffect(() => {
    const mouseUp = () => {
      setIsMouseDown(false);
      document.body.classList.remove('cursor-col-resize', 'select-none');
    };

    const mouseMove = (e: MouseEvent) => {
      if (!isMouseDown) return;

      const resizedCellWidth = e.clientX - rect.left;
      ctx.updateTableDataWidth(col.field, resizedCellWidth);
    };

    document.addEventListener('mouseup', mouseUp);
    document.addEventListener('mousemove', mouseMove);

    return () => {
      document.removeEventListener('mouseup', mouseUp);
      document.removeEventListener('mousemove', mouseMove);
    };
  }, [col.field, ctx, isMouseDown, rect, rect.left, rectRef]);

  return (
    <th
      ref={combineRef}
      className={tableColumnStyle({ className: col.className })}
      role="columnheader"
      style={{ width: `${col.width}px` }}>
      <span className="text-ellipsis">{col.headerName}</span>
      <ActionIcon
        icon={orderBy === 'default' ? 'chevronTwinArrowTopBottom' : 'chevronArrowRight'}
        className={arrowIconStyle({
          isShow: arrowHovered,
          orderBy,
        })}
        onClick={handleColumnClick}
      />
      <button
        ref={hoverSeparatorRef}
        aria-label="Separator"
        className={tableColumnResizerStyle({ hovered: separatorHovered })}
        onMouseDown={handleMouseDown}
      />
    </th>
  );
};

const tableColumnStyle = cn('relative flex items-center justify-between overflow-hidden text-nowrap px-3 py-2', {
  variants: {
    isCheckboxColumn: {
      true: '',
      false: 'gap-2',
    },
  },
  defaultVariants: {
    isCheckboxColumn: false,
  },
});

const arrowIconStyle = cn('h-5 w-5 shrink-0 transition-all', {
  variants: {
    isShow: {
      true: '',
      false: 'hidden',
    },
    orderBy: {
      default: '',
      asc: '-rotate-90',
      desc: 'rotate-90',
    },
  },
  defaultVariants: {
    orderBy: 'default',
  },
});

const tableColumnResizerStyle = cn(
  'absolute bottom-0 right-0 top-0 w-1 cursor-col-resize border-r border-dashed border-r-gray-500',
  {
    variants: {
      hovered: {
        true: 'border-none bg-gray-500',
        false: '',
      },
    },
  },
);

interface TableColProps<T extends { id: string | number }> {
  col: TableColumn<T>;
}

export default TableCol;
