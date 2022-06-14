
import React, { useRef } from 'react';

function SignUp() {

  const fnameInput = useRef();
  const lnameInput = useRef();
  const usernameInput = useRef();
  const passwordInput = useRef();
  const balanceInput = useRef();
  const url = "http://localhost:9005"

  async function register() {
    // Whenever you are getting a useRefs value, make sure it's inside some function call. Otherwise it will
    // error due to the refInput.current = undefined, meaning there is no .value available
    const user = {
        fname: fnameInput.current.value,
        lname: lnameInput.current.value,
        username: usernameInput.current.value,
        password: passwordInput.current.value,
        balance: balanceInput.current.value,
    };
    const requestOptions = {
      method: 'POST',
      
      body: JSON.stringify({ 
        username: user.username,
        password: user.password,
        fname: user.fname,
        lname: user.lname,
        balance: user.balance
     })
    }

    try {
        const response = await fetch(`${url}/customers`, requestOptions)
        .then((response) => {
          if(response.ok){console.log("All Good")}else{throw new Error(response.status)}
        }
        )
        
        
        alert("You've Successfully Signed Up Welcome ", user.fname);
    } catch (error) {
        console.log("ERROR")
        if(error === {Error: 409}){
          alert("That username has already been taken")
        }
        console.log(error);
    }
}

  return (
    <>
            <h4>Hello, new customer please register below.</h4>
            <input placeholder="Enter First Name" ref={fnameInput}></input>
            <input placeholder="Enter Last Name" ref={lnameInput}></input>
            <input placeholder="Enter Your Balance" ref={balanceInput}></input>
            <br></br>
            <br></br>
            <br></br>
            <input placeholder="Enter Your Username" ref={usernameInput}></input>
            <input type="password" placeholder="Enter Your Password" ref={passwordInput}></input>
            <br></br>
            <button onClick={register}>Sign Up</button>
        </>
  )
}

export default SignUp