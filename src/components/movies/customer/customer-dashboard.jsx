import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../../App";

export default function CustomerDashboard() {
    const [user, setUser] = useContext(userContext);
    console.log(user);

    const navigate = useNavigate();

    return (
        <>
            <h1>Welcome to your dashboard!!!!!</h1>
            <button onClick={() => navigate("/movie")}>Find Movies</button>
            <br></br>
            <br></br>
            <br></br>
            <button onClick={() => navigate("/favadd")}>Add Favorites</button>
            <button onClick={() => navigate("/favdel")}>Delete Favorites</button>
            <button onClick={() => navigate("/favall")}>View Favorites</button>
            <br></br>
            <br></br>
            <br></br>
            <button onClick={() => navigate("/orderbuy")}>Buy a Movie</button>
            <button onClick={() => navigate("/orderrent")}>Rent a Movie</button>
            <button onClick={() => navigate("/orderall")}>View all Orders</button>
            <br></br>
            <br></br>
            <br></br>
            <button onClick={() => navigate("/ccadd")}>Add Credit Card Info</button>
            <button onClick={() => navigate("/ccupd")}>Update Credit Card</button>
            <button onClick={() => navigate("/ccdel")}>Delete Credit Card</button>
            <button onClick={() => navigate("/ccall")}>View Credit Cards</button>
            <br></br>
            <br></br>
            <br></br>
            <button onClick={() => navigate("/")}>Logout</button>
            <button onClick={() => navigate("/delete")}>Delete Account</button>

            

            
            
        </>
    );
}