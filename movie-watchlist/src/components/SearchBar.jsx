function SearchBar({ onSearch, handleSearch }) {
  return (
    <div className="flex  justify-center gap-3">
      <input
        className="block px-4 py-2 border rounded-lg"
        onChange={(e) => onSearch(e.target.value)}
        type="text"
        placeholder="Search movies to watch"
      />
      <button
        className="px-4 py-2 bg-blue-600 rounded-lg text-black font-semibold"
        onClick={() => handleSearch()}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
