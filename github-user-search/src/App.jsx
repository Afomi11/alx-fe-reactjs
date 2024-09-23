import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Home component for the search functionality
import NotFound from './components/NotFound'; // Optional: a Not Found page

function App() {
  return (
    <Router>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">GitHub User Search</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Optional: Add more routes as needed */}
          <Route path="*" element={<NotFound />} /> {/* Optional Not Found Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
