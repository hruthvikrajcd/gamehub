import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import GameList from './components/GameList';
import Analytics from './components/Analytics';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <nav className="navbar">
        <div className="nav-brand">
          🎮 <span>GameHub</span>
        </div>
        <div className="nav-links">
          <button 
            className={activePage === 'dashboard' ? 'active' : ''}
            onClick={() => setActivePage('dashboard')}>
            Dashboard
          </button>
          <button 
            className={activePage === 'games' ? 'active' : ''}
            onClick={() => setActivePage('games')}>
            Games
          </button>
          <button 
            className={activePage === 'analytics' ? 'active' : ''}
            onClick={() => setActivePage('analytics')}>
            Analytics
          </button>
        </div>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </nav>

      <main className="main-content">
        {activePage === 'dashboard' && <Dashboard />}
        {activePage === 'games' && <GameList />}
        {activePage === 'analytics' && <Analytics />}
      </main>
    </div>
  );
}

export default App;