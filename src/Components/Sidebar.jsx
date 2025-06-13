import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div style={{ width: '200px', background: '#222', color: 'white', height: '100vh', padding: '20px' }}>
      <h2>AdminPro</h2>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
        <Link to="/tables" style={{ color: 'white', textDecoration: 'none' }}>Tables</Link>
        <Link to="/charts" style={{ color: 'white', textDecoration: 'none' }}>Charts</Link>
        <Link to="/calendar" style={{ color: 'white', textDecoration: 'none' }}>Calendar</Link>
        <Link to="/kanban" style={{ color: 'white', textDecoration: 'none' }}>Kanban</Link>
      </nav>
    </div>
  )
}

export default Sidebar
