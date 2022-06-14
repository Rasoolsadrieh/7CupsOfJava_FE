import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";


 export default function CustomerSignOut(){
    const navigate = useNavigate();
    const [user, setUser] = useContext(userContext);
    const customer = {
        username: "Guest"
    }


    async function logout(){

        try{
        (setUser({...user, username: customer.username}))
        console.log(user)
        console.log(user)
         navigate("/home")
        }catch(error){
            console.error(error)
            }

    }
    
      return(
              <>
                <h4>Goodbye, please log out below.</h4>
                <button onClick={logout}>Logout</button>
            </>
    
    
      );



}