function SeeUserStats({ username, streak, quizzesCompleted, avgScore, bestTopic }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-green-400 mb-8">👤 User Profile</h1>
      <div className="max-w-lg">
        <div className="border border-green-500 rounded-xl p-6 mb-4 flex items-center gap-6">
          <div className="text-6xl">🧑‍💻</div>
          <div>
            <h2 className="text-3xl font-bold">{username}</h2>
            <p className="text-green-400">Finance Learner</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-gray-600 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-orange-400">🔥 {streak}</p>
            <p className="text-gray-400 text-sm">Day Streak</p>
          </div>
          <div className="border border-gray-600 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-blue-400">{quizzesCompleted}</p>
            <p className="text-gray-400 text-sm">Quizzes Completed</p>
          </div>
          <div className="border border-gray-600 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-yellow-400">{avgScore}%</p>
            <p className="text-gray-400 text-sm">Average Score</p>
          </div>
          <div className="border border-gray-600 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-green-400">🏆</p>
            <p className="text-gray-400 text-sm">Best: {bestTopic}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeeUserStats;