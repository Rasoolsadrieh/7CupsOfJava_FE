import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderFindAll(){

    const navigate = useNavigate();
    const [orderBody, setOrderBody] = useState([]);
    const url = "http://localhost:9005";
    const emailInput = useRef();

    async function findAll() {
        try {
            const response = await fetch(`${url}/order/${emailInput.current.value}`);
            const orders = await response.json();
            const ordRows = orders.map((e) => {
                return (
                    <tr>
                         <td>{e.movieId}</td>
                         <td>{e.orderDate}</td>
                         <td>{e.balance}</td>
                         <td>{e.returnDate}</td>
                    </tr>
                );
            })
            setOrderBody(ordRows);
            console.log(orders);

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
            <button onClick={findAll}>View Your Orders</button>
            <table>
                <thead>
                    <tr>
                        <th>movieId</th>
                        <th>orderDate</th>
                        <th>balance</th>
                        <th>returnDate</th>
                    </tr>
                </thead>
                <tbody>{orderBody}</tbody>
            </table>
        </>
    )


}