import React from 'react';

const FilterBar = ({ filterSeverity, setFilterSeverity, sortOrder, setSortOrder }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-lg shadow-sm">
      <div className="flex-1">
        <label htmlFor="severity-filter" className="block text-sm font-medium text-gray-700 mb-1">
          Filter by Severity
        </label>
        <select
          id="severity-filter"
          value={filterSeverity}
          onChange={(e) => setFilterSeverity(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="All">All Severities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      
      <div className="flex-1">
        <label htmlFor="sort-order" className="block text-sm font-medium text-gray-700 mb-1">
          Sort by Date
        </label>
        <select
          id="sort-order"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;