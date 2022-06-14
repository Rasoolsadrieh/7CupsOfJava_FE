import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import AddFavourites from './AddFavourites';
import MovieList from './MovieList';
import MovieListHeading from './MovieListHeading';
import RemoveFavourites from './RemoveFavourites';
import SearchBox from './SearchBox';


export default function HomePage(){
	const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=76e93e0c`;
		

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-ross-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-ross-movie-app-favourites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
		console.log(movie)
	};

	return (
		
		<div className='container-fluid ross-movie-app'>
			
			<div className='row d-flex align-items-center mt-4 mb-4'>
				
				<MovieListHeading heading='Ross Favourite Movie Picker Application' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
					
			</div>
			<div class='grid-container'>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
				<MovieList
					movies={movies}
					handleFavouritesClick={addFavouriteMovie}
					favouriteComponent={AddFavourites}
				/>
				
			</div>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='My Favourites' />
			</div>
			<div class='grid-container'>
				<MovieList
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFavourites}
				/>
				
			</div>
			
		</div>
	);
   
}