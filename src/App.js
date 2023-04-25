import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer  from './componant/Footer.js';
import Topbar from './componant/Topbar.js';
import Home from './componant/Home.js';
import Rooms from './componant/Rooms';
import ImageGallery from './componant/ImageGallery';
import Places from './componant/Places';
import Contact from './componant/Contact';
import Faq from './componant/Faq';

function App() {
  return (
    <>
    <Router>
        <Topbar />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms/>}/>
          <Route path='/gallery' element={<ImageGallery/>}/>
          <Route path='/places' element={<Places/>} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/FAQ' element={<Faq/>}/>
        </Routes>
        </main>
        <Footer />
    </Router>
    </>
    
  );
}

export default App;
