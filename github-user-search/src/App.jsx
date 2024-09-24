import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import UserSearch from './components/UserSearch';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/user-search">User Search</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-search" element={<UserSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
  