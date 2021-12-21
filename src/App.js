import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
// import OriginalCreatures from './components/OriginalCreatures';
import SwiperJS from './components/Swiper';
import OurStory from './components/OurStory';
import Roadmap from './components/Roadmap';
import Contact from './components/Contact';
import OurTeam from './components/OurTeam';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <NavBar />
       <Home />
       <SwiperJS />
       <OurStory />
       <Roadmap />
       <Contact />
       <OurTeam />
       <Footer />
    </div>
  );
}

export default App;
