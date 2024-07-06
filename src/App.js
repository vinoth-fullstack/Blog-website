import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Caruosel from './components/caruosel';
import Popular from './components/popular';
import Market from './components/market';
import Blog from './components/blog';
import Clients from './components/clients';
import Contact from './components/contact';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
    <Navbar />
    <Caruosel />
    <Popular />
    <Market />
    <Blog />
    <Clients />
    <Contact />
    <Footer />
    
      
    </div>
  );
}

export default App;
