// MasterPagination.js
import React from 'react';
import { Button } from '@material-tailwind/react';

const MasterPagination = ({ active, onPageChange, totalItems }) => {
  const itemsPerPage = 12; // Change this to the desired number of items per page
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  // Responsive maxVisiblePages based on screen width
  const maxVisiblePages = window.innerWidth >= 640 ? 8 : 5;

  const renderPaginationItems = () => {
    const items = [];
    let start = Math.max(1, Math.min(active - Math.floor(maxVisiblePages / 2), totalPages - maxVisiblePages + 1));
    let end = Math.min(start + maxVisiblePages - 1, totalPages);

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
    <div className="flex items-center gap-4">
      <Button
        className={`mx-1 ${active === 1 ? 'hidden' : 'bg-white text-black-500'}`}
        onClick={() => onPageChange(active - 1)}
      >
        &#8249; Previous
      </Button>
      {renderPaginationItems()}
      <Button
        className={`mx-1 ${active === totalPages ? 'hidden' : 'bg-white text-black-500'}`}
        onClick={() => onPageChange(active + 1)}
      >
        Next &#8250;
      </Button>
    </div>
  );
};

export default MasterPagination;
