import { useEffect } from 'react';

import { useCount } from 'dotori-hooks';
import { Icon } from 'dotori-icons';
import { cn } from 'dotori-utils';

import { Button } from '@dotori-components/components';

const Pagination = ({ pageTotal, page, onChange }: PaginationProps) => {
  const { count, increment, decrement, set } = useCount({
    initialCount: page,
    min: 1,
    max: pageTotal,
    callback: onChange,
  });
  const pagingNavigationTotal = Array.from({ length: pageTotal }, (_, i) => i + 1);

  // ^ currenPage가 중간에 붙는 로직
  const filteredPagingNavigation = pagingNavigationTotal.slice(
    Math.min(Math.max(count - PAGE_MID, 0), Math.max(pageTotal - PAGE_SIZE, 0)),
    Math.min(Math.max(count - PAGE_MID, 0) + PAGE_SIZE, pageTotal),
  );

  // ^ currentPage 상태가 맨 왼쪽에 붙는 로직.
  // const filteredPagingNavigation = pagingNavigationTotal.slice(
  //   Math.min(count - 1, Math.max(pageTotal - PAGE_SIZE, 0)),
  //   Math.min(count - 1 + PAGE_SIZE, pageTotal),
  // );

  const handlePageClick = (newPage: number) => () => {
    set(newPage);
  };

  useEffect(() => {
    set(page);
  }, [page, set]);

  return (
    <div className="flex items-center justify-center">
      <Button
        className="flex h-8 w-8 items-center justify-center p-0"
        color="gray"
        variant="outline"
        onClick={decrement}>
        <Icon className="h-5 w-5 rotate-180 fill-gray-600" icon="chevronArrowRight" />
      </Button>

      {filteredPagingNavigation.map(paging => (
        <Button
          key={paging}
          className={paginationStyle()}
          color={paging === count ? 'blue' : 'gray'}
          variant={paging === count ? 'filled' : 'outline'}
          onClick={handlePageClick(paging)}>
          <span>{paging}</span>
        </Button>
      ))}

      <Button
        className="flex h-8 w-8 items-center justify-center p-0"
        color="gray"
        variant="outline"
        onClick={increment}>
        <Icon className="h-5 w-5 fill-gray-600" icon="chevronArrowRight" />
      </Button>
    </div>
  );
};

interface PaginationProps {
  pageTotal: number;
  page: number;
  onChange?: (page: number) => void;
}

const PAGE_SIZE = 5;
const PAGE_MID = 3;

const paginationStyle = cn('flex h-8 w-8 items-center justify-center p-0');

export default Pagination;
