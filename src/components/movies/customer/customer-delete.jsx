import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CustomerDelete() {

    const navigate = useNavigate();
    const url = "http://localhost:9005";

 
    const emailInput = useRef();
 
    
    async function deletec() {

        const user = {

            email: emailInput.current.value,
 
            
        };
        try {
            const response = await axios.delete(`${url}/delete/${emailInput.current.value}`, user);
            console.log(response.data);
            navigate("/");
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }

    async function dashboardReturn(){
        navigate("/dashboard");
    }
    return (
        <>
            <h4>Hello,  please enter your information below.</h4>
            <button onClick={dashboardReturn}>Return to Dashboard</button> 
            <br></br>
            <br></br>
            <br></br>
            <input placeholder="Enter Your Email" ref={emailInput}></input>
            <br></br>
            <button onClick={deletec}>Delete Customer Account</button>
        </>
    );

}