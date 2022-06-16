import { createContext, useState } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./components/movies/home.jsx";
import CustomerSignOut from "./components/customer/SignOut.jsx";
import SignUp from "./components/customer/SignUp.js";
import CustomerSignin from "./components/customer/SignIn";
import UpdateUser from "./components/customer/UpdateUser.jsx";
import Album from "./components/test/Album.js";
import FindMovie from "./components/movies/FindMovie.jsx";
import Testing from "./components/test/Testing.jsx";


export const userContext = createContext();

function App() {
  const [user, setUser] = useState({ username: "Guest" });
  return (
      <>
      <BrowserRouter>
      <userContext.Provider value={[user, setUser]}>
          {/* <Nav /> */}
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signIn" element={<CustomerSignin />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/signOut" element={<CustomerSignOut></CustomerSignOut>} />
                <Route path= "/updateUser" element={<UpdateUser/>}/>
                <Route path= "findMovie" element={<FindMovie/>}/>
                <Route path="test" element={<Album/>}/>
                <Route path="testing" element={<Testing/>}/>
                
                
          </Routes>
          </userContext.Provider>
      </BrowserRouter>
      
  </>

  );
}

export default App;
