import React from 'react';

const stats = [
  { label: 'Total Games', value: '2,847', icon: '🎮', change: '+12%' },
  { label: 'Active Players', value: '1.2M', icon: '👥', change: '+8%' },
  { label: 'Top Genre', value: 'RPG', icon: '⚔️', change: '#1' },
  { label: 'Avg Rating', value: '4.6★', icon: '⭐', change: '+0.2' },
];

const recentGames = [
  { name: 'Elden Ring', genre: 'RPG', rating: 4.9, price: '₹2,999', status: 'Hot' },
  { name: 'Valorant', genre: 'FPS', rating: 4.7, price: 'Free', status: 'Popular' },
  { name: 'FIFA 25', genre: 'Sports', rating: 4.3, price: '₹3,499', status: 'New' },
  { name: 'GTA VI', genre: 'Action', rating: 4.8, price: '₹4,999', status: 'Hot' },
  { name: 'Minecraft', genre: 'Sandbox', rating: 4.8, price: '₹1,499', status: 'Classic' },
];

function Dashboard() {
  return (
    <div className="dashboard">
      <h1 className="page-title">Dashboard Overview</h1>

      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
            <div className="stat-change">{stat.change}</div>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>🔥 Trending Games</h2>
        <div className="table-container">
          <table className="game-table">
            <thead>
              <tr>
                <th>Game</th>
                <th>Genre</th>
                <th>Rating</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentGames.map((game, i) => (
                <tr key={i}>
                  <td><strong>{game.name}</strong></td>
                  <td>{game.genre}</td>
                  <td>⭐ {game.rating}</td>
                  <td>{game.price}</td>
                  <td>
                    <span className={`badge ${game.status.toLowerCase()}`}>
                      {game.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
