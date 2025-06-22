import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Albums from "./Pages/Albums";     
import Playlists from "./Pages/Playlists"; 
import Genres from "./Pages/Genres";     

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-5 bg-black text-white min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/genres" element={<Genres />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
