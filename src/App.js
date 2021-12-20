import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
// import OriginalCreatures from './components/OriginalCreatures';
import SwiperJS from './components/Swiper';

function App() {
  return (
    <div className="App">
       <NavBar />
       <Home />
       <SwiperJS />
    </div>
  );
}

export default App;
