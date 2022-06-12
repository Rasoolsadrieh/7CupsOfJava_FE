import { createContext, useState } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./components/movies/home.jsx";




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
                
                
          </Routes>
          </userContext.Provider>
      </BrowserRouter>
      {/* <Payments/> */}
  </>

  );
}

export default App;
