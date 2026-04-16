import LeaderboardList from "../NatesComponents/LeaderboardList";

function OpenLeaderboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-green-400 mb-2">🏆 Leaderboard</h1>
      <p className="text-gray-400 mb-6">See who's crushing the finance quizzes.</p>
      <LeaderboardList title="" />
    </div>
  );
}

export default OpenLeaderboard;