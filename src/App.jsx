// src/App.jsx
import React from 'react';
import './App.css';
import ScraperComponent from './components/ScraperComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>YMCA Data Scraper</h1>
      </header>
      <ScraperComponent />
    </div>
  );
}

export default App;
