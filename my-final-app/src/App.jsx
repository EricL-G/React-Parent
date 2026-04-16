import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import OpenLeaderboard from "./Pages/OpenLeaderboard";
import SeeUserStats from "./Pages/SeeUserStats";
import EditProfile from "./Pages/EditProfile";
import DailyChallenge from "./Pages/DailyChallenge";

function App() {
  return (
    <BrowserRouter>
      <nav className="flex gap-6 p-4 bg-gray-800 border-b border-green-500 text-lg font-semibold">
        <span className="text-green-400 font-bold mr-4">💰 FinanceEd</span>
        <Link to="/" className="text-white hover:text-green-400">Leaderboard</Link>
        <Link to="/profile" className="text-white hover:text-green-400">Profile</Link>
        <Link to="/edit" className="text-white hover:text-green-400">Edit Profile</Link>
        <Link to="/daily" className="text-white hover:text-green-400">Daily Challenge</Link>
      </nav>
      <Routes>
        <Route path="/" element={<OpenLeaderboard />} />
        <Route path="/profile" element={<SeeUserStats username="Nathan" streak={7} quizzesCompleted={12} avgScore={85} bestTopic="Budgeting" />} />
        <Route path="/edit" element={<EditProfile />} />
        <Route path="/daily" element={<DailyChallenge />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;