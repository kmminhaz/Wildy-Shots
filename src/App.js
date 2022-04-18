import app from './firebase.init';
import './App.css';
import { getAuth } from "firebase/auth";
import NavBar from './Components/NavBar/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import ImageSlider from './Components/ImageSlider/ImageSlider';

// const auth = getAuth(app);

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <br />
      <ImageSlider></ImageSlider>
      <h4 className='text-dark fw-bold'> Hellow Minhaz </h4>
    </div>
  );
}

export default App;
