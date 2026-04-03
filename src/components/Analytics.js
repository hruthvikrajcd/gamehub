import React from 'react';

const genreData = [
  { genre: 'RPG', count: 850, percentage: 30, color: '#6c63ff' },
  { genre: 'FPS', count: 620, percentage: 22, color: '#ff6584' },
  { genre: 'Action', count: 580, percentage: 20, color: '#43e97b' },
  { genre: 'Sports', count: 400, percentage: 14, color: '#f7971e' },
  { genre: 'Sandbox', count: 250, percentage: 9, color: '#4facfe' },
  { genre: 'Indie', count: 147, percentage: 5, color: '#f953c6' },
];

const platformData = [
  { platform: 'PC', share: 42 },
  { platform: 'PS5', share: 28 },
  { platform: 'Xbox', share: 18 },
  { platform: 'Mobile', share: 12 },
];

const monthlyData = [
  { month: 'Oct', games: 45 },
  { month: 'Nov', games: 62 },
  { month: 'Dec', games: 89 },
  { month: 'Jan', games: 71 },
  { month: 'Feb', games: 95 },
  { month: 'Mar', games: 110 },
];

function Analytics() {
  const maxGames = Math.max(...monthlyData.map(d => d.games));

  return (
    <div className="analytics">
      <h1 className="page-title">Analytics</h1>

      {/* Genre Breakdown */}
      <div className="analytics-grid">
        <div className="analytics-card">
          <h2>🎯 Genre Breakdown</h2>
          <div className="genre-bars">
            {genreData.map((item, i) => (
              <div className="genre-bar-row" key={i}>
                <span className="genre-label">{item.genre}</span>
                <div className="bar-track">
                  <div
                    className="bar-fill"
                    style={{ width: `${item.percentage}%`, backgroundColor: item.color }}>
                  </div>
                </div>
                <span className="genre-percent">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Share */}
        <div className="analytics-card">
          <h2>🖥️ Platform Share</h2>
          <div className="platform-list">
            {platformData.map((item, i) => (
              <div className="platform-row" key={i}>
                <span className="platform-name">{item.platform}</span>
                <div className="bar-track">
                  <div
                    className="bar-fill"
                    style={{ width: `${item.share}%`, backgroundColor: '#6c63ff' }}>
                  </div>
                </div>
                <span className="platform-share">{item.share}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Monthly Releases Chart */}
      <div className="analytics-card full-width">
        <h2>📈 Monthly Game Releases</h2>
        <div className="bar-chart">
          {monthlyData.map((item, i) => (
            <div className="chart-column" key={i}>
              <span className="chart-value">{item.games}</span>
              <div
                className="chart-bar"
                style={{ height: `${(item.games / maxGames) * 180}px` }}>
              </div>
              <span className="chart-label">{item.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="summary-grid">
        <div className="summary-card">
          <h3>🏆 Most Popular Genre</h3>
          <p>RPG — 30% of all games</p>
        </div>
        <div className="summary-card">
          <h3>💻 Leading Platform</h3>
          <p>PC — 42% market share</p>
        </div>
        <div className="summary-card">
          <h3>📅 Best Month</h3>
          <p>March — 110 new releases</p>
        </div>
        <div className="summary-card">
          <h3>📊 Growth Rate</h3>
          <p>+144% over 6 months</p>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
