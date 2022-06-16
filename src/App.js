import { createContext, useState } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"

import CustomerSignOut from "./components/customer/SignOut.jsx";
import SignUp from "./components/customer/SignUp.js";
import CustomerSignin from "./components/customer/SignIn";
import UpdateUser from "./components/customer/UpdateUser.jsx";

import FindMovie from "./components/movies/FindMovie.jsx";

import BuyMovie from "./components/order/BuyAMovie.jsx";


export const userContext = createContext();
export const movieContext = createContext();

function App() {
  const [user, setUser] = useState({ username: "Guest" });
  const [movie, setMovie]= useState({imdbID: "null"})
  return (
      <>
      <BrowserRouter>
      <userContext.Provider value={[user, setUser]}>
      <movieContext.Provider value={[movie, setMovie]}>
          {/* <Nav /> */}
          <Routes>
                
                <Route path="/signIn" element={<CustomerSignin />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/signOut" element={<CustomerSignOut></CustomerSignOut>} />
                <Route path= "/updateUser" element={<UpdateUser/>}/>
                <Route path= "findMovie" element={<FindMovie/>}/>
                <Route path="buyMovie" element={<BuyMovie/>}/>
                
                
          </Routes>
          </movieContext.Provider>
          </userContext.Provider>
      </BrowserRouter>
      
  </>

  );
}

export default App;
