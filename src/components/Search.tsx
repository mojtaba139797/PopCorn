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
        className=" outline-0 text-xs md:text-sm w-50 md:w-70 lg:w-94 h-8 md:h-9 lg:h-12 pl-2 border border-gray-500 rounded-lg bg-purple-600 text-gray-800"
      />
    </div>
  );
};

export default Search;
