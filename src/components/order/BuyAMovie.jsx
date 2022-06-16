import React from "react";
import {useNavigate} from "react-router-dom";



export default function BuyMovie(){
const navigate = useNavigate();
navigate("/")
    return(
        <h1>Hello</h1>
    );
}