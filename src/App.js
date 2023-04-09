import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer  from './componant/Footer.js';
import Topbar from './componant/Topbar.js';
import Home from './componant/Home.js';

function App() {
  return (
    <>
    <Router>
        <Topbar />
        <Home />

        <Footer />

    </Router>
    </>
    
  );
}

export default App;
