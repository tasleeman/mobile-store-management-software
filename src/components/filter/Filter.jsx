import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Filter({ mode, searchkey, setSearchkey }) {
  const location = useLocation();

  const handleSearchEnter = (e) => {
    if (e.key === 'Enter') {
      // Trigger the search or filter logic here
    }
  };

  return (
    <div className='container mx-auto px-4 mt-5'>
      <div className="p-5 rounded-lg bg-gray-100 drop-shadow-xl border border-gray-200 flex justify-between items-center">
        <div className="relative flex items-center">
          <div className="absolute flex items-center ml-2 h-full">
            {/* Search icon */}
          </div>
          <input
            type="text"
            name="searchkey"
            value={searchkey}
            onChange={(e) => setSearchkey(e.target.value)}
            onKeyDown={handleSearchEnter}
            id="searchkey"
            placeholder="Search here"
            className="px-8 py-3 w-full rounded-md bg-violet-0 border-transparent outline-0 text-sm"
          />
        </div>
        <div className="flex items-center">
          <span className="mr-2 font-bold">Select OS:</span>
          <Link to="/Ios" className="btn btn-secondary mr-2 px-4 py-2 bg-gray-50 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md ml-2">iOS</Link>
          <Link to="/Android" className="btn btn-secondary mr-2 px-4 py-2 bg-gray-50 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md ml-2">Android</Link>
          <span className="mr-2 font-bold">Sort by Price:</span>
          <Link to="/Ascending" className="px-4 py-2 bg-gray-50 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md ml-2" style={{ color: mode === 'dark' ? 'white' : '' }}>
            Lowest first
          </Link>
          <Link to="/Descending" className="px-4 py-2 bg-gray-50 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md ml-2" style={{ color: mode === 'dark' ? 'white' : '' }}>
            Highest first
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Filter;
