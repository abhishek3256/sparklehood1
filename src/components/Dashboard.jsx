import React, { useState } from 'react';
import IncidentList from './IncidentList';
import IncidentForm from './IncidentForm';
import FilterBar from './FilterBar';
import { useIncidents } from '../context/IncidentContext';

const Dashboard = () => {
  const { incidents } = useIncidents();
  const [showForm, setShowForm] = useState(false);
  const [filterSeverity, setFilterSeverity] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');

  const filteredIncidents = incidents.filter(incident => 
    filterSeverity === 'All' || incident.severity === filterSeverity
  );

  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at);
    const dateB = new Date(b.reported_at);
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h2 className="text-2xl font-semibold text-gray-800">Incident Reports</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors shadow-sm"
        >
          {showForm ? 'Hide Form' : 'Report New Incident'}
        </button>
      </div>

      {showForm && <IncidentForm setShowForm={setShowForm} />}

      <FilterBar 
        filterSeverity={filterSeverity} 
        setFilterSeverity={setFilterSeverity}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      <div className="bg-white rounded-lg shadow-md">
        <IncidentList incidents={sortedIncidents} />
      </div>
    </div>
  );
};

export default Dashboard;