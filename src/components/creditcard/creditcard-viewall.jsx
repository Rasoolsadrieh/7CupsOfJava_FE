import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CCFindAll(){

    const navigate = useNavigate();
    const [creditCardBody, setCreditCardBody] = useState([]);
    const url = "http://localhost:9005";
    const emailInput = useRef();

    async function findAll() {
        try {
            const response = await fetch(`${url}/creditcard/${emailInput.current.value}`);
            const creditCards = await response.json();
            const ccRows = creditCards.map((e) => {
                return (
                    <tr>
                         <td>{e.ccNumber}</td>
                         <td>{e.ccName}</td>
                         <td>{e.cvv}</td>
                         <td>{e.expDate}</td>
                         <td>{e.zip}</td>
                         <td>{e.limit}</td>
                    </tr>
                );
            })
            setCreditCardBody(ccRows);
            console.log(creditCards);

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
            <button onClick={findAll}>View Your CreditCards</button>
            <table>
                <thead>
                    <tr>
                        <th>ccNumber</th>
                        <th>ccName</th>
                        <th>cvv</th>
                        <th>expDate</th>
                        <th>zip</th>
                        <th>limit</th>
                    </tr>
                </thead>
                <tbody>{creditCardBody}</tbody>
            </table>
        </>
    )


}