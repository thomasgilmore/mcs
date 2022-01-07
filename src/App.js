import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
// import OriginalCreatures from './components/OriginalCreatures';
// import SwiperJS from './components/Swiper';
import OurStory from './components/OurStory';
import Roadmap from './components/Roadmap';
import Contact from './components/Contact';
import OurTeam from './components/OurTeam';
import FAQSection from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <NavBar />
       <Home />
       <OurStory />
       <Roadmap />
       <Contact />
       <OurTeam />
       <FAQSection />
       <Footer />
    </div>
  );
}

export default App;
