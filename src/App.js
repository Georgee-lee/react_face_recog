import React from "react";
import "./App.css";

import Particles from "react-particles-js";
import Navigation from "./Components/Navigation";
import Logo from "./Components/Logo";
import Rank from "./Components/Rank";
import ImageLinkForm from "./Components/ImageLinkForm";

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

function App() {
  return (
    <div className="App">
      <Particles params={particlesOptions} className="particles" />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
