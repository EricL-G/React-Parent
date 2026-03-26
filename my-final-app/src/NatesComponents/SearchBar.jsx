import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
    onSearch(e.target.value);
  }

  return (
    <div className="p-2">
      <input
        className="border-2 border-gray-400 rounded px-3 py-1 w-full text-lg"
        type="text"
        placeholder="Search players..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;