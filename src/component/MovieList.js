import React from 'react'
const MovieList = ({ movies, favoriteComponent, handleFavouritesClick }) => {
  const FavoriteComponent = favoriteComponent;
  return (
    <>
      {movies.map((movie, index) => (
        <div className="img-container" key={movie.imdbID}>
          <img src={movie.Poster} alt="img-result" />
          <div className="overlay" onClick={() => handleFavouritesClick(movie)}>
            <FavoriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
