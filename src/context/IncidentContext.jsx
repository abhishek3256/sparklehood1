import React, { createContext, useContext, useState } from 'react';
import { mockIncidents } from '../data/mockIncidents';

const IncidentContext = createContext();

export const useIncidents = () => useContext(IncidentContext);

export const IncidentProvider = ({ children }) => {
  const [incidents, setIncidents] = useState(mockIncidents);

  const addIncident = (newIncident) => {
    setIncidents(prev => [newIncident, ...prev]);
  };

  return (
    <IncidentContext.Provider value={{ incidents, addIncident }}>
      {children}
    </IncidentContext.Provider>
  );
};