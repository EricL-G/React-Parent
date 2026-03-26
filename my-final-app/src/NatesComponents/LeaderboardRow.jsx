function LeaderboardRow({ rank, name, streak, quizzesCompleted }) {
  return (
    <div className="flex justify-between items-center border-b p-3 text-lg">
      <span className="font-bold w-8">{rank}</span>
      <span className="flex-1">{name}</span>
      <span className="text-sm text-gray-600 mr-4">🔥 {streak} streak</span>
      <span className="text-sm text-gray-600">{quizzesCompleted} quizzes</span>
    </div>
  );
}

export default LeaderboardRow;