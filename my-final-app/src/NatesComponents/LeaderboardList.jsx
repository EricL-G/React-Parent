import { useState } from "react";
import SearchBar from "./SearchBar";
import LeaderboardRow from "./LeaderboardRow";

function LeaderboardList({ title }) {
  const [search, setSearch] = useState("");

  const players = [
    { name: "John", streak: 41, quizzesCompleted: 12 },
    { name: "ZigZag", streak: 24, quizzesCompleted: 8 },
    { name: "Astix", streak: 74, quizzesCompleted: 20 },
    { name: "Victorvbook", streak: 10, quizzesCompleted: 5 },
    { name: "Viewslock", streak: 21, quizzesCompleted: 7 },
  ];

  const filtered = players.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <SearchBar onSearch={setSearch} />
      <div className="border rounded mt-2">
        {filtered.map((player, index) => (
          <LeaderboardRow
            key={player.name}
            rank={index + 1}
            name={player.name}
            streak={player.streak}
            quizzesCompleted={player.quizzesCompleted}
          />
        ))}
      </div>
    </div>
  );
}

export default LeaderboardList;