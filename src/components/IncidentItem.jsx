import React, { useState } from 'react';
import { formatDate } from '../utils/formatDate';

const getSeverityStyles = (severity) => {
  switch (severity) {
    case 'High':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'Medium':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'Low':
      return 'bg-green-100 text-green-800 border-green-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const IncidentItem = ({ incident }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const severityStyles = getSeverityStyles(incident.severity);
  
  return (
    <li className="p-4 hover:bg-gray-50 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900">{incident.title}</h3>
          <div className="flex flex-wrap gap-2 mt-1">
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${severityStyles}`}>
              {incident.severity}
            </span>
            <span className="text-sm text-gray-500">
              {formatDate(incident.reported_at)}
            </span>
          </div>
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="self-start sm:self-center px-3 py-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 border border-blue-300 rounded-md hover:bg-blue-50 transition-colors"
        >
          {isExpanded ? 'Hide Details' : 'View Details'}
        </button>
      </div>
      
      {isExpanded && (
        <div className="mt-4 pl-4 border-l-4 border-blue-200 bg-blue-50 p-3 rounded-r-md animate-fadeIn">
          <h4 className="text-sm font-medium text-gray-700 mb-1">Description:</h4>
          <p className="text-gray-600">{incident.description}</p>
        </div>
      )}
    </li>
  );
};

export default IncidentItem;