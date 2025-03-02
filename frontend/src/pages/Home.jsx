import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  //Triggers re-renders when updated
  /* 
  What Gets Re-rendered
  When state changes in a component, React will:
  
  Re-render that specific component
  Re-render all of its child components (by default) 
  */
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Terminator", release_date: "1999" },
    { id: 3, title: "The Matrix", release_date: "1998" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
          type="text"
          placeholder="Search for movies"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
