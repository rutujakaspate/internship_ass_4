import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ width: '200px', background: '#121212', color: 'white', height: '100vh', padding: '20px' }}>
      {/* Logo and Brand Name */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px', gap: '10px' }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
          alt="Spotify Logo"
          style={{ width: '40px', height: '50px', objectFit: 'contain', filter: 'invert(1)' }}
        />
        <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Spotify 2.0</h2>
      </div>

      {/* Navigation Links with Icons */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="https://raw.githubusercontent.com/feathericons/feather/master/icons/home.svg" alt="Home" style={{ width: '18px', filter: 'invert(1)' }} />
          Home
        </Link>
        <Link to="/search" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="https://raw.githubusercontent.com/feathericons/feather/master/icons/search.svg" alt="Search" style={{ width: '18px', filter: 'invert(1)' }} />
          Search
        </Link>
        <Link to="/playlists" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="https://raw.githubusercontent.com/feathericons/feather/master/icons/list.svg" alt="Playlists" style={{ width: '18px', filter: 'invert(1)' }} />
          Playlists
        </Link>
        <Link to="/albums" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="https://raw.githubusercontent.com/feathericons/feather/master/icons/disc.svg" alt="Albums" style={{ width: '18px', filter: 'invert(1)' }} />
          Albums
        </Link>
        <Link to="/genres" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="https://raw.githubusercontent.com/feathericons/feather/master/icons/headphones.svg" alt="Genres" style={{ width: '18px', filter: 'invert(1)' }} />
          Genres
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
