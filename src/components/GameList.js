import React, { useState } from 'react';

const allGames = [
  { name: 'Elden Ring', genre: 'RPG', rating: 4.9, price: '₹2,999', platform: 'PC/PS5', status: 'Hot' },
  { name: 'Valorant', genre: 'FPS', rating: 4.7, price: 'Free', platform: 'PC', status: 'Popular' },
  { name: 'FIFA 25', genre: 'Sports', rating: 4.3, price: '₹3,499', platform: 'Multi', status: 'New' },
  { name: 'GTA VI', genre: 'Action', rating: 4.8, price: '₹4,999', platform: 'PS5/PC', status: 'Hot' },
  { name: 'Minecraft', genre: 'Sandbox', rating: 4.8, price: '₹1,499', platform: 'Multi', status: 'Classic' },
  { name: 'Cyberpunk 2077', genre: 'RPG', rating: 4.6, price: '₹2,499', platform: 'PC/PS5', status: 'Popular' },
  { name: 'Apex Legends', genre: 'FPS', rating: 4.5, price: 'Free', platform: 'Multi', status: 'Popular' },
  { name: 'God of War', genre: 'Action', rating: 4.9, price: '₹3,999', platform: 'PS5/PC', status: 'Classic' },
  { name: 'Fortnite', genre: 'Battle Royale', rating: 4.2, price: 'Free', platform: 'Multi', status: 'Popular' },
  { name: 'RDR2', genre: 'Action', rating: 4.9, price: '₹2,999', platform: 'PC/PS5', status: 'Classic' },
  { name: 'Hollow Knight', genre: 'Indie', rating: 4.8, price: '₹499', platform: 'Multi', status: 'Classic' },
  { name: 'Starfield', genre: 'RPG', rating: 4.1, price: '₹3,499', platform: 'PC/Xbox', status: 'New' },
];

const genres = ['All', 'RPG', 'FPS', 'Action', 'Sports', 'Sandbox', 'Battle Royale', 'Indie'];

function GameList() {
  const [search, setSearch] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');

  const filtered = allGames.filter(game => {
    const matchSearch = game.name.toLowerCase().includes(search.toLowerCase());
    const matchGenre = selectedGenre === 'All' || game.genre === selectedGenre;
    return matchSearch && matchGenre;
  });

  return (
    <div className="gamelist">
      <h1 className="page-title">Game Library</h1>

      <div className="filters">
        <input
          className="search-input"
          type="text"
          placeholder="🔍 Search games..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="genre-filters">
          {genres.map(genre => (
            <button
              key={genre}
              className={`genre-btn ${selectedGenre === genre ? 'active' : ''}`}
              onClick={() => setSelectedGenre(genre)}>
              {genre}
            </button>
          ))}
        </div>
      </div>

      <div className="games-grid">
        {filtered.map((game, i) => (
          <div className="game-card" key={i}>
            <div className="game-card-header">
              <span className="game-platform">{game.platform}</span>
              <span className={`badge ${game.status.toLowerCase()}`}>{game.status}</span>
            </div>
            <h3>{game.name}</h3>
            <p className="genre-tag">{game.genre}</p>
            <div className="game-card-footer">
              <span className="rating">⭐ {game.rating}</span>
              <span className="price">{game.price}</span>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="no-results">😕 No games found for "{search}"</div>
      )}
    </div>
  );
}

export default GameList;
