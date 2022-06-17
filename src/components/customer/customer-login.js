import axios from "axios";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";

export default function CustomerLogin() {
    const emailInput = useRef();
    const passwordInput = useRef();
    const [user, setUser] = useContext(userContext);
    const navigate = useNavigate();
    const url = "http://localhost:9005" ;

    async function login() {

        const customer = {
            email: emailInput.current.value,
            password: passwordInput.current.value,
        };

        try {
            const response = await axios.post(`${url}/auth`, customer);
            console.log(response.data);
            console.log("Hey this is the user prior ", user);
            setUser({ ...user, email: customer.email });
            console.log("This is after we set the user ", user);
            navigate("/dashboard");
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data)
        }
    }

    return (
        <>
            <h4>Welcome back, please log in below.</h4>
            <input placeholder="Enter Email" ref={emailInput}></input>
            <input type="password" placeholder="Enter password" ref={passwordInput}></input>
            <button onClick={login}>Login</button>
        </>
    )
}
