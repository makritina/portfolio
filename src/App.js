import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";
import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import "./default.scss";

function App() {
  return (
    <div>
      <SideBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
