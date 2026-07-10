import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className=" outline-0 pl-2 border border-gray-500 bg-purple-400 text-gray-800"
      />
    </div>
  );
};

export default Search;
