import app from './firebase.init';
import './App.css';
import { getAuth } from "firebase/auth";
import NavBar from './Components/NavBar/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import ImageSlider from './Components/ImageSlider/ImageSlider';
import Services from './Components/MyServices/Services';
import Feedbacks from './Components/Feedbacks/Feedbacks';
import MyWorks from './Components/MyWorks/MyWorks';
import Footer from './Components/Footer/Footer';

const auth = getAuth(app);

function App() {
  return (
    <div className='App bg-dark'>
      <NavBar></NavBar>
      <br />
      <div>
        <ImageSlider></ImageSlider>
        <br /> <br /> <br /> <br /> <br />
        <h2 className='text-white fw-bold py-4'> My Services </h2>
        <Services></Services>
        <br /> <br />
        <h2 className='text-white fw-bold py-4'> My Works </h2>
        <MyWorks></MyWorks>
        <br /> <br />
        <h2 className='text-white fw-bold py-4'> People Liked My Work </h2>
        <Feedbacks></Feedbacks>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
