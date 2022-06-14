
import React, { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../App';

function UpdateUser() {

  const fnameInput = useRef();
  const lnameInput = useRef();
  const usernameInput = useRef();
  const passwordInput = useRef();
  const balanceInput = useRef();
  const navigate = useNavigate();
  const url = "http://localhost:9005"
  const [user, setUser] = useContext(userContext);
  
  console.log(user)

  async function update() {
    // Whenever you are getting a useRefs value, make sure it's inside some function call. Otherwise it will
    // error due to the refInput.current = undefined, meaning there is no .value available
    const customer = {
        fname: fnameInput.current.value,
        lname: lnameInput.current.value,
        username: usernameInput.current.value,
        password: passwordInput.current.value,
        balance: balanceInput.current.value,
    };
    const requestOptions = {
      method: 'POST',
      
      body: JSON.stringify({ 
        username: customer.username,
        password: customer.password,
        fname: customer.fname,
        lname: customer.lname,
        balance: customer.balance
     })
    }



    try {

      const response =await fetch(`${url}/customers`,requestOptions)
      .then((result) => {if(!result.ok){throw new Error(result.status)}else{console.log("All Good")}})
      .then(setUser({...user, username: customer.username, password: customer.password}))
      
        alert("You've Successfully Updated Your Account ");
        navigate("/home")

    } catch (error) {
        console.log("ERROR")
        if(error === {Error: 409}){
          alert("That username has already been taken")
        }
        alert(error)
        console.log(error);
    }
}

async function deleteAccount(){
  const customer = {
    username: usernameInput.current.value,
    password: passwordInput.current.value
};
  const requestOptions = {
    method: 'DELETE',
  
   body: JSON.stringify({ 
    username: customer.username,
    password: customer.password,
 })}

 try {
  const response =await fetch(`${url}/customers`,requestOptions)
  .then((result) => {if(!result.ok){throw new Error(result.status)}else{console.log("All Good")}})
  
  setUser({...user, username: "Guest", password: ""})
  
    alert("You've Successfully Deleted Your Account ");
    navigate("/home")

} catch (error) {
    console.log("ERROR")
    if(error === {Error: 409}){
      alert("That username has already been taken")
    }
    alert(error)
    console.log(error);
}


}



  return (
    <>
            <h4>Hello, please update your information below.</h4>
            <input placeholder="Update First Name" ref={fnameInput}></input>
            <input placeholder="Update Last Name" ref={lnameInput}></input>
            <input placeholder="Update Your Balance" ref={balanceInput}></input>
            <br></br>
            <br></br>
            <br></br>
            <input placeholder="Current Username" ref={usernameInput}></input>
            <input type="password" placeholder="Update Your Password" ref={passwordInput}></input>
            <br></br>
            <button onClick={update}>Update Account</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h4>If you would like to delete your account, please fill out the information below</h4>
            <input placeholder="Current Username" ref={usernameInput}></input>
            <input type="password" placeholder="Current Password" ref={passwordInput}></input>
            <button onClick={deleteAccount}>Delete Account Account</button>



        </>
  )
  }

export default UpdateUser