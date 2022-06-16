import { createContext, useState, useEffect } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./components/movies/home.jsx";
import NavBar from "./components/movies/navbar.jsx";
import CustomerLogin from "./components/movies/customer/customer-login.js";
import CustomerRegister from "./components/movies/customer/customer-register.jsx";
import CustomerDelete from "./components/movies/customer/customer-delete.jsx";
import CreditCardAdd from "./components/movies/creditcard/creditcard-add.jsx";
import CreditCardUpdate from "./components/movies/creditcard/creditcard-update.jsx";
import CreditCardDelete from "./components/movies/creditcard/creditcard-delete.jsx";
import CustomerDashboard from "./components/movies/customer/customer-dashboard.jsx";
import CustomerWelcome from "./components/movies/customer/customer-welcome.jsx";
import FavoriteAdd from "./components/movies/favorite/favorite-add.jsx";
import MovieList from "./components/movies/MovieList.js";
import MovieListHeading from "./components/movies/MovieListHeading.js";
import SearchBox from "./components/movies/SearchBox.js";


export const userContext = createContext();

function App() {
  const [user, setUser] = useState({ username: "Guest" });
  
  return (
      <>
      <BrowserRouter>
      <userContext.Provider value={[user, setUser]}>
           <NavBar /> 
          <Routes>
              <Route path="login" element={<CustomerLogin />} />
              <Route path="register" element={<CustomerRegister />} />
              <Route path="delete" element={<CustomerDelete></CustomerDelete>} />
              <Route path="dashboard" element={<CustomerDashboard></CustomerDashboard>} />
              <Route path="ccadd" element={<CreditCardAdd></CreditCardAdd>} />
              <Route path="ccupd" element={<CreditCardUpdate></CreditCardUpdate>} />
              <Route path="ccdel" element={<CreditCardDelete></CreditCardDelete>} />
              <Route path="movie" element={<Home />} />
              <Route path="favadd" element={<FavoriteAdd />} />
              <Route path="/" element={<CustomerWelcome />} />
                
                
          </Routes>
          </userContext.Provider>
      </BrowserRouter>
      {/* <Payments/> */}
  </>

  );
}

export default App;
