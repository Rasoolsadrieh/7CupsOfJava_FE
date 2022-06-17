import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useRef } from 'react';

export default function FavoriteDelete() {
    
    const navigate = useNavigate();
    const [favoriteBody, setFavoriteBody] = useState([]);
    const url = "http://localhost:9005";
    
    const movieIdInput = useRef();
    const emailInput = useRef();

    async function deleteFav(){

        try {
            const response = await axios.delete(`${url}/deletefv/${movieIdInput.current.value}`);
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }

    async function findAll() {
        try {
            const response = await fetch(`${url}/favorite/${emailInput.current.value}`);
            const favorites = await response.json();
            const favoriteRows = favorites.map((e) => {
                return (
                    <tr>
                         <td>{e.movieId}</td>
                    </tr>
                );
            })
            setFavoriteBody(favoriteRows);
            console.log(favorites);

        } catch (e){
            console.error(e);
        }
    }

    async function dashboardReturn(){
        navigate("/dashboard");
    }

    return(
        <>
            <button onClick={dashboardReturn}>Return to Dashboard</button> 
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <input placeholder="Enter the MovieID" ref={movieIdInput}></input>  
            <button onClick={deleteFav}>Remove Favorite</button>
            <br></br>
            <br></br>
            <br></br>
            <input placeholder="Enter Your Email" ref={emailInput}></input>
            <button onClick={findAll}>Find Your Favorites</button>
            <table>
                <thead>
                    <tr>
                        <th>movie Id</th>
                    </tr>
                </thead>
                <tbody>{favoriteBody}</tbody>
            </table>

        </>
    )
}