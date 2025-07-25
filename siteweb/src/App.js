import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormContact from "./FormContact";
import Formule from "./Formule";
import Home from "./Home";
import Presence from "./Presence";
import Projets from "./Projets";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./About";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Presence" element={<Presence />} />
          <Route path="/FormContact" element={<FormContact />} />
          <Route path="/Projets" element={<Projets />} />
          <Route path="/Formule" element={<Formule />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
