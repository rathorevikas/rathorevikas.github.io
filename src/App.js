import { BrowserRouter } from 'react-router-dom';
import About from './About';
import './App.css';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import MyJourney from './MyJourney';
import MyProject from './MyProject';
import Navbar from './Navbar';




function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Header />
    <About />
    <MyJourney />
    <MyProject />
    <Contact />
    <Footer />
    </BrowserRouter>
  );
}

export default App;
