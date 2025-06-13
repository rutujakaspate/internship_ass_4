import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import Dashboard from './Pages/Dashboard'
import Tables from './Pages/Tables'
import Charts from './Pages/Charts'
import Calendar from './Pages/Calendar'
import Kanban from './Pages/Kanban'

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/kanban" element={<Kanban />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
