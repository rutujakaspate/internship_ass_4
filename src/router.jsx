// src/router.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard';
import Calendar from './Pages/Calendar';
import Kanban from './Pages/Kanban';
import Table from './Pages/Table';

function AppRouter() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/table" element={<Table />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;
