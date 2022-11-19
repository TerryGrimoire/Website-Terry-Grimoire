import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Fondateur from "./pages/Blog/Fondateur";
import Mentions from "./pages/Mentions";

import "./App.css";

function App() {
  const [language, setLanguage] = useState();
  return (
    <BrowserRouter>
      <section>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home language={language} setLanguage={setLanguage} />}
          />
          <Route
            path="/Services"
            element={<Services language={language} setLanguage={setLanguage} />}
          />
          <Route
            path="/Clients"
            element={<Clients language={language} setLanguage={setLanguage} />}
          />
          <Route
            path="/Contact"
            element={<Contact language={language} setLanguage={setLanguage} />}
          />
          <Route
            path="/Blog"
            element={<Blog language={language} setLanguage={setLanguage} />}
          />
          <Route
            path="/Blog/1"
            element={
              <Fondateur language={language} setLanguage={setLanguage} />
            }
          />
          <Route
            path="/Mentions"
            element={<Mentions language={language} setLanguage={setLanguage} />}
          />
        </Routes>
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
