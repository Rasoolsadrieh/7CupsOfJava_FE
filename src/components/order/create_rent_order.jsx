import React from "react";
import axios from "axios";
import { useRef } from "react";


export default function CreateRentOrder() {

    const idInput = useRef();
    const movieIDInput = useRef();
    const orderTypeInput = useRef();
    const orderDateInput = useRef();
    const returnDateInput = useRef();
    const isCompleteInput = useRef();
    const balanceInput = useRef();
    const emailInput = useRef();

    const url = "http://localhost:9005"

    async function addOrder(){

        const order = {
            id: idInput.current.value,
            movieID: movieIDInput.current.value,
            orderType: orderTypeInput.current.value,
            orderDate: orderDateInput.current.value,
            returnDate: returnDateInput.current.value,
            isComplete: isCompleteInput.current.value,
            balance: balanceInput.current.value,
            email: emailInput.current.value
        }

        try{
            const response = await axios.post(`${url}/createorder`, order )
            console.log(response)
            console.log(response.data)
        }catch(error){
            console.error(error.response.data)
            console.log(error)
        }

    }

    return (
<>
        <h3>Please Enter Your Order Below!</h3>
        <input placeholder="Please Enter ID" ref={idInput}></input>
        <br></br>
        <br></br>
        <input placeholder="Please Enter The Movie To Rent" ref={movieIDInput}></input>
        <br></br>
        <br></br>
        <input placeholder="Please Enter Order Type" ref={orderTypeInput}></input>
        <br></br>
        <br></br>
        <input  placeholder="Pelase Enter Todays Date" ref={orderDateInput}></input>
        <br></br>
        <br></br>
        <input  placeholder="Please Enter Return Date" ref={returnDateInput}></input>
        <br></br>
        <br></br>
        <input  placeholder="Please Enter 0 for Order is incomplete" ref={isCompleteInput}></input>
        <br></br>
        <br></br>
        <input  placeholder="Please Enter Your Balance" ref={balanceInput}></input>
        <br></br>
        <br></br>
        <input  placeholder="Please Enter Your Username" ref={emailInput}></input>
        <br></br>
        <br></br>
        <button class="btn btn-secondary btn-lg" onClick={addOrder}>Create Order</button>
        </>
    );
}