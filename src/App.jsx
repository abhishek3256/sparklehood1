import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { IncidentProvider } from './context/IncidentContext';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <IncidentProvider>
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Dashboard />
        </main>
      </IncidentProvider>
    </div>
  );
}

export default App;