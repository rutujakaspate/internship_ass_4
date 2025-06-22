import React, { useState } from 'react';
import { FaSearch, FaMusic, FaTrash, FaPodcast } from 'react-icons/fa';

const mockData = {
  songs: [
    { id: 1, title: 'Blinding Lights', artist: 'The Weeknd' },
    { id: 2, title: 'Shape of You', artist: 'Ed Sheeran' },
    { id: 3, title: 'Closer', artist: 'The Chainsmokers' },
  ],
  playlists: [
    { id: 1, name: 'Workout Mix' },
    { id: 2, name: 'Top Hits 2024' },
  ],
  albums: [
    { id: 1, name: 'After Hours', songs: ['Blinding Lights', 'Save Your Tears'] },
  ],
  podcasts: [
    { id: 1, title: 'The Daily Byte', host: 'Alex' },
    { id: 2, title: 'DevTalks', host: 'Samir' },
  ],
};

const categories = ['All', 'Artists', 'Playlists', 'Albums', 'Songs', 'Podcasts & Shows'];

const Search = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleDelete = (id) => {
    alert(`Deleted playlist with id ${id}`);
  };

  const renderContent = () => {
    switch (selectedCategory) {
      case 'Playlists':
        return mockData.playlists.map((playlist) => (
          <div
            key={playlist.id}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#222', color: '#fff', marginBottom: '8px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
          >
            <span><FaMusic /> {playlist.name}</span>
            <FaTrash style={{ color: 'red', cursor: 'pointer' }} onClick={() => handleDelete(playlist.id)} />
          </div>
        ));
      case 'Albums':
        return mockData.albums.map((album) => (
          <div key={album.id} style={{ marginBottom: '16px' }}>
            <h3>{album.name}</h3>
            {album.songs.map((song, index) => (
              <div key={index} style={{ padding: '8px', background: '#222', color: '#fff', marginBottom: '5px', borderRadius: '6px', display: 'flex', justifyContent: 'space-between' }}>
                <span>{song}</span>
                <button style={{ background: '#1DB954', border: 'none', padding: '4px 8px', borderRadius: '4px', color: 'white', cursor: 'pointer' }}>Play ▶</button>
              </div>
            ))}
          </div>
        ));
      case 'Podcasts & Shows':
        return mockData.podcasts.map((podcast) => (
          <div key={podcast.id} style={{ padding: '10px', backgroundColor: '#222', color: '#fff', marginBottom: '10px', borderRadius: '6px' }}>
            <p><FaPodcast /> <strong>{podcast.title}</strong> by {podcast.host}</p>
          </div>
        ));
      case 'All':
      case 'Songs':
      default:
        return mockData.songs.map((song) => (
          <div key={song.id} style={{ padding: '10px', backgroundColor: '#222', color: '#fff', marginBottom: '8px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaMusic />
            <span><strong>{song.title}</strong> by {song.artist}</span>
          </div>
        ));
    }
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        padding: '40px',
        fontFamily: 'Segoe UI',
        backgroundColor: '#f3f4f6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Search Bar */}
      <div style={{ maxWidth: '500px', width: '100%', position: 'relative', marginBottom: '24px' }}>
        <input
          type="text"
          placeholder="What do you want to listen to?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '14px 48px',
            fontSize: '16px',
            borderRadius: '999px',
            border: 'none',
            backgroundColor: '#121212',
            color: 'white',
            outline: 'none',
            boxShadow: '0 0 0 1px #444',
          }}
        />
        <FaSearch
          style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#bbb',
            fontSize: '16px',
          }}
        />
      </div>

      {/* Category Filters */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '30px', maxWidth: '800px', justifyContent: 'center' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '8px 16px',
              borderRadius: '999px',
              border: selectedCategory === cat ? '2px solid #1DB954' : '2px solid #333',
              backgroundColor: selectedCategory === cat ? '#000' : '#000',
              color: '#fff',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s ease',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results */}
      <div style={{ maxWidth: '800px', width: '100%' }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Search;
