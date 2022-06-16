import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function FavoriteFindAll() {

    const navigate = useNavigate();
    const [favoriteBody, setFavoriteBody] = useState([]);
    const url = "http://localhost:9005";
    const emailInput = useRef();

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

    return (
        <> 
            <button onClick={dashboardReturn}>Return to Dashboard</button>
            <br></br>
            <br></br>
            <br></br>
            <input placeholder="Enter Your Email" ref={emailInput}></input>
            <button onClick={findAll}>Find Your Favorites</button>
            <table>
                <thead>
                    <tr>
                        <th>movieId</th>
                    </tr>
                </thead>
                <tbody>{favoriteBody}</tbody>
            </table>
        </>
    )
}