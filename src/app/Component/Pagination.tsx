import React from 'react'
import { usePageStore } from '../stores/PageStore'
import { useEffect } from 'react';

const Pagination = () => {
    const {page ,pages ,setPage,getMenusCount: getTotalMenus,} = usePageStore();

    useEffect(() => {
        getTotalMenus();
    }, [getTotalMenus,]);

  return (
    <div className="my-12 flex justify-center">
          <nav className="inline-flex rounded-md shadow">
            <button 
                onClick={() => setPage(page - 1)}
                // disabled={page === 1}
                className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              Previous
            </button>
            {pages.map((pageNumber) => (
              <button
                key={pageNumber}
                className={`px-3 py-2 border border-gray-300 bg-white text-sm font-medium ${
                  pageNumber === page
                    ? 'text-primary bg-primary-50'
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
                onClick={() => setPage(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}
            <button 
                onClick={() => setPage(page + 1)}
                // disabled={page === count}
                className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>
  )
}

export default Pagination
