import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";

function App() {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  const handleSearch = () => {
    fetch(`http://www.omdbapi.com/?s=${searchText}&apikey=bd5a80d8`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
      });
  };

  return (
    <div className="space-y-5 p-5">
      <h1 className="text-4xl font-extrabold">Movie Watchlist</h1>
      <SearchBar onSearch={setSearchText} handleSearch={handleSearch} />
      {/* <p>You typed: {searchText}</p> */}
      <div className="grid grid-cols-3 gap-3">
        {movies.map((movie) => {
          return <MovieCard key={movie.imdbID} data={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
