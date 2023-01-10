import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './component/Banner';
import Header from './component/Header';
import MovieList from './component/MovieList';
import SearchBox from './component/SearchBox';
import Heading from './component/Heading';
import AddFavorites from './component/AddFavorites';
import RemoveFavorites from './component/RemoveFavorites';
function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('Avengers');
  const [favourites, setFavourites] = useState([]);

  // fetch movie
  const getMovieRequest = async searchValue => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=a59b6b33`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (data.Search) {
      setMovies(data.Search);
      // setSearchValue('');
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const retrieveSavedMovie = JSON.parse(localStorage.getItem('savedMovie'));
    setFavourites(retrieveSavedMovie);
    setSearchValue('');
  }, []);

  const addFavouritesMovie = movie => {
    if(favourites.find(f => f.imdbID === movie.imdbID)){
      return;
    }else{
      console.log(movie);
      const newFavouritesList = [...favourites, movie];
      setFavourites(newFavouritesList);
      saveToLocalStorage(newFavouritesList);
    }
  };

  const removeFavouritesMovie = movie => {
    const newFavouritesList = favourites.filter(
      favourite => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouritesList);
    saveToLocalStorage(newFavouritesList);
  };

  const saveToLocalStorage = items => {
    localStorage.setItem('savedMovie', JSON.stringify(items));
  };

  return (
    <div className="App">
      <Header />
      <Banner />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <Heading title="Movies" />
      <div className="movie-app">
        <MovieList
          movies={movies}
          favoriteComponent={AddFavorites}
          handleFavouritesClick={addFavouritesMovie}
        />
      </div>
      <Heading title="Favourites" />
      <div className="movie-app">
        <MovieList
          movies={favourites}
          favoriteComponent={RemoveFavorites}
          handleFavouritesClick={removeFavouritesMovie}
        />
      </div>
    </div>
  );
}

export default App;
