
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'; 
import Footer from './Components/Footer';
import Menu from './Pages/Menu';
import About from './Pages/About';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
