import React from "react";
import MovieCard from "./MovieCards";

function App() {
  const movies = [
    {
      poster: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SL1186_.jpg",
      title: "Inception",
      year: 2010,
      rating: 8.8,
    },
    {
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxw7DkSb6qx70kqRpCQklFIbNYUVjgHKZh3yCavMTOoVOWQjEgjne26usvLdJn4_5ileW8NsUVR1bQCoUS_kz2vh4ZPzORkzcMgkGzQc17&s=10",
      title: "Interstellar",
      year: 2014,
      rating: 8.6,
    },
    {
      poster: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SL1500_.jpg",
      title: "The Dark Knight",
      year: 2008,
      rating: 9.0,
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Movie List</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            poster={movie.poster}
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
