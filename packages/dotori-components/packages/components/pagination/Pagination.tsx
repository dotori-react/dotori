import { useCount } from 'dotori-hooks';
import { Icon } from 'dotori-icons';
import { cn } from 'dotori-utils';

import { Button } from '@dotori-components/components';

const Pagination = ({ pageTotal, page, siblingCount, onChange }: PaginationProps) => {
  const { count, increment, decrement, set } = useCount({
    controlledCount: page,
    initialCount: page,
    min: 1,
    max: pageTotal,
  });
  const pagingNavigationTotal = Array.from({ length: pageTotal }, (_, i) => i + 1);

  const filteredPagingNavigation = pagingNavigationTotal.slice(
    Math.max(count - siblingCount - 1, 0),
    Math.min(count + siblingCount, pageTotal),
  );

  const handlePageArrowClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    const { dataset } = e.currentTarget;

    const newPage = (dataset.id === 'leftArrow' ? decrement : increment)();
    if (onChange) onChange(newPage);
  };

  const handlePageClick = (newPage: number) => () => {
    set(newPage);
    if (onChange) onChange(newPage);
  };

  return (
    <div className="flex items-center justify-center">
      <Button
        className="flex h-8 w-8 items-center justify-center p-0"
        color="gray"
        data-id="leftArrow"
        variant="outline"
        onClick={handlePageArrowClick}>
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
        data-id="rightArrow"
        variant="outline"
        onClick={handlePageArrowClick}>
        <Icon className="h-5 w-5 fill-gray-600" icon="chevronArrowRight" />
      </Button>
    </div>
  );
};

interface PaginationProps {
  pageTotal: number;
  page: number;
  siblingCount: number;
  onChange?: (page: number) => void;
}

const paginationStyle = cn('flex h-8 w-8 items-center justify-center p-0');

export default Pagination;
