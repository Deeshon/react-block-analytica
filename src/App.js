import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Page2 from "./components/Page2";
import Contact from "./components/Contact"
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Page2 />
      <Contact />
      <CardContainer />
      <Footer />
    </div>
  );
}

export default App;
