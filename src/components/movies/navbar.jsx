import { Link, useNavigate } from "react-router-dom";



export default function NavBar(){
    const navigate = useNavigate();

    return (
        <nav>
            <Link to ="/">
                <button>Home Page</button>
            </Link>
            <span> </span>
            <Link to = "/login">
                <button>Login</button>
            </Link>
            <span></span>
            <Link to = "/register">
                <button>Sign Up</button>
            </Link>
        </nav>
    )

}