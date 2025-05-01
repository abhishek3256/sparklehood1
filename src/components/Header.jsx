import React from 'react';
import { AlertTriangle } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex items-center">
        <AlertTriangle className="h-8 w-8 mr-3" />
        <div>
          <h1 className="text-2xl font-bold">HumanChain</h1>
          <p className="text-blue-100">AI Safety Incident Dashboard</p>
        </div>
      </div>
    </header>
  );
};

export default Header;