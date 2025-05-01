import React from 'react';
import IncidentItem from './IncidentItem';

const IncidentList = ({ incidents }) => {
  if (incidents.length === 0) {
    return (
      <div className="py-8 text-center text-gray-500">
        <p>No incidents found matching your criteria.</p>
      </div>
    );
  }

  return (
    <ul className="divide-y divide-gray-200">
      {incidents.map(incident => (
        <IncidentItem key={incident.id} incident={incident} />
      ))}
    </ul>
  );
};

export default IncidentList;