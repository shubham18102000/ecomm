import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Productitems from "./components/Productitems";
import Newarrival from "./components/Newarrival";
import Shopbycat from "./components/Shopbycat";
import Footer from "./components/Footer";




function App() {
 

 
  return (
    <div>
     
       <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
               <Newarrival/>
            </div>
          }
        />
        <Route path="/Shopbycat" element={<Shopbycat/>} />
        <Route path="/Productitems" element={<Productitems />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer/> 
    </div>
  );
}

export default App;
