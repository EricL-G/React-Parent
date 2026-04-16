function DailyChallenge() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <div className="text-6xl mb-4">💰</div>
      <h1 className="text-5xl font-bold text-green-400 mb-2">FinanceEd</h1>
      <p className="text-gray-400 text-lg mb-8">Learn money. Build wealth. Every day.</p>
      <div className="border border-green-500 rounded-xl p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-yellow-400 mb-3">⚡ Daily Challenge</h2>
        <p className="text-gray-300 mb-2">Welcome back, Nathan!</p>
        <p className="text-gray-400 mb-6">Complete today's quiz to keep your streak going and earn badges.</p>
        <div className="flex justify-around mb-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-green-400">7</p>
            <p className="text-sm text-gray-400">Day Streak 🔥</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-yellow-400">12</p>
            <p className="text-sm text-gray-400">Quizzes Done</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-400">85%</p>
            <p className="text-sm text-gray-400">Avg Score</p>
          </div>
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg w-full text-lg">
          Start Today's Challenge →
        </button>
      </div>
    </div>
  );
}

export default DailyChallenge;