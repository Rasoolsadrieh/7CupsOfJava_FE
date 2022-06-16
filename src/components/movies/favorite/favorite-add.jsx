import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../home.css';
// import AddFavourites from './AddFavourites';
import MovieList from './../MovieList';
import MovieListHeading from './../MovieListHeading';
import SearchBox from './../SearchBox';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useRef } from 'react';

export default function FavoriteAdd(){

    const navigate = useNavigate();
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
    const url2 = "http://localhost:9005";
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=76e93e0c`;

    const movieidInput = useRef();
    const accountEmailInput = useRef();

	const getMovieRequest = async (searchValue) => {
		// const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=76e93e0c`;
		

		const response = await fetch(url);
		const movieResponse = await response.json();

		if (movieResponse.Search) {
			setMovies(movieResponse.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	async function dashboardReturn(){
        navigate("/dashboard");
    }

    async function addFav() {

        const user = {
            movieId : movieidInput.current.value,
            accountEmail : accountEmailInput.current.value,
        };
        try {
            const response = await axios.post(`${url2}/favorite`, user);
			console.log(response.data);
        } catch (error) {
			console.error(error.response.data);
			alert(error.response.data);
		}
    }



    return (
		<>
		<button onClick={dashboardReturn}>Return to Dashboard</button> 
		<br></br>
		<br></br>
		<br></br>
		<input placeholder= "Enter Movie Name" ref ={movieidInput}></input>
		<input placeholder= "Enter Your Email" ref ={accountEmailInput}></input>
		<button onClick={addFav}>Add To Favorites</button>
		<div className='container-fluid ross-movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='BlockBusster Application' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div class='grid-container'>
				<MovieList
					movies={movies}
				/>
			</div>
		</div>
		</>
	);
}