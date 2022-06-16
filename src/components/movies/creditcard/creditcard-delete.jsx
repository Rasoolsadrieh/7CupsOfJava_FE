import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CreditCardDelete(){

    const navigate = useNavigate();
    const url = "http://localhost:9005";

    const ccNumberInput = useRef();

    async function deletecc() {
        const user = {
            ccNumber: ccNumberInput.current.value,
   
        };
        try {
            const response = await axios.delete(`${url}/deletecc/${ccNumberInput.current.value}`, user);
            console.log(response.data);
            navigate("/dashboard");
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
            <h4>Please add your credit card information below. </h4>
            <button onClick={dashboardReturn}>Return to Dashboard</button>
            <input placeholder="Enter Credit Card Number" ref={ccNumberInput}></input>
            <br></br>
            <button onClick={deletecc}>Delete Credit Card</button>
        </>
    )
}