import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer/Footer";
import {Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/LoginRegister/Login/Login";
import Register from "./Components/LoginRegister/Register/Register";
import About from "./Components/About/About";
import Blog from "./Components/Blogs/Blog";
import Checkout from "./Components/Checkout/Checkout";
import RequireAuth from "./Components/RequireAuth";

function App() {
  return (
    <div className='App bg-dark'>
      <NavBar></NavBar>
      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route
            path='/checkout'
            element={
              <RequireAuth>
                <Checkout />
              </RequireAuth>
            }
          ></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
