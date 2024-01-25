// MasterPagination.js
import React from 'react';
import { Button } from '@material-tailwind/react';

const MasterPagination = ({ active, onPageChange, totalItems }) => {
  const totalPages = Math.ceil(totalItems / 20); // 20 items per page

  const renderPaginationItems = () => {
    const items = [];
    const displayPages = 5; // Number of pages to display

    let start = Math.max(1, active - Math.floor(displayPages / 2));
    let end = Math.min(start + displayPages - 1, totalPages);

    if (end - start + 1 < displayPages) {
      start = Math.max(1, end - displayPages + 1);
    }

    for (let i = start; i <= end; i++) {
      items.push(
        <Button
          key={i}
          className={`mx-1 ${
            i === active ? 'bg-wpigreen-50 text-white' : 'bg-white text-black-50'
          }`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </Button>
      );
    }

    return items;
  };

  return (
    <div className="flex justify-center items-center space-x-2 overflow-x-auto">
      <Button
        className={`mx-1 ${active === 1 ? 'hidden' : 'bg-white text-black-500'}`}
        onClick={() => onPageChange(active - 1)}
      >
        &#8249;
      </Button>
      {renderPaginationItems()}
      <Button
        className={`mx-1 ${active === totalPages ? 'hidden' : 'bg-white text-black-500'}`}
        onClick={() => onPageChange(active + 1)}
      >
        &#8250;
      </Button>
    </div>
  );
};

export default MasterPagination;
