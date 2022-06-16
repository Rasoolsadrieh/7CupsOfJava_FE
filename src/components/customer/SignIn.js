import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";


export default function CustomerSignin(){

  const usernameInput = useRef();
  const passwordInput = useRef();
  const navigate = useNavigate();
  const [user, setUser] = useContext(userContext);
  const url = "https://webhook.site/4d2edaad-c9ab-494d-bb38-79b82d051bc8"

  

  async function login(){
    const customer = {
      username: usernameInput.current.value,
      password: passwordInput.current.value,
    };

    const requestOptions = {
      method: 'POST',
      
      body: JSON.stringify({ 
        username: customer.username,
        password: customer.password
     })
    }
 

    try{
      const response = await fetch(`${url}`,requestOptions)
      .then((response) => {
        if(response.ok){console.log("All Good")}else{throw new Error(response.status)}
      }).then(setUser({...user, username: customer.username, password: customer.password}))
      
      console.log(user)
      console.log(user)
      navigate("/home")
    }catch (error) {
      console.log("ERROR")
      if(error == "Error: 404" ) {
        alert("This user does not exist")
        console.error(error);
      }
  }

  }
  

  return(
          <>
            <h4>Welcome back, please log in below.</h4>
            <input placeholder="Enter Username" ref={usernameInput}></input>
            <input type="password" placeholder="Enter password" ref={passwordInput}></input>
            <button onClick={login}>Login</button>
        </>


  );


}