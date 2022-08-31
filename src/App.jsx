import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mentions";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Clients" element={<Clients />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Mentions" element={<Mentions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
