import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer  from './componant/Footer.js';
import Topbar from './componant/Topbar.js';
import Home from './componant/Home.js';
import Rooms from './componant/Rooms';

function App() {
  return (
    <>
    <Router>
        <Topbar />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms/>}/>
        </Routes>
        </main>
        <Footer />
    </Router>
    </>
    
  );
}

export default App;
