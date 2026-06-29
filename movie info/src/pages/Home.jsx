import MovieCard from "../components/MovieCard";
import { useState } from "react";
function Home() {
  const [seachQuery, setSearchQuery] = useState("");
  const movies = [
    { id: 1, title: "my movie", release_date: "2020" },
    { id: 2, title: "Your movie", release_date: "2024" },
    { id: 3, title: "Their movie", release_date: "1997" },
  ];

  const handleSearch = () => {};

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="search for movies..."
          className="search-input"
          value={seachQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
export default Home;
