import React from "react";
import "./App.css";

import Particles from "react-particles-js";
import Navigation from "./Components/Navigation";
import Logo from "./Components/Logo";
import Rank from "./Components/Rank";
import ImageLinkForm from "./Components/ImageLinkForm";
import FaceRecognition from "./Components/FaceRecognition";

import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "e71ae76c29954fd190367b5ad40ea205"
});

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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: ""
    };
  }

  inputChangeHandler = e => {
    this.setState({
      input: e.target.value
    });
  };

  submitHandler = e => {
    this.setState({
      imageUrl: this.state.input
    });

    app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.input).then(
      function(response) {
        // do something with responseconsole.log(response);
        console.log(response.outputs[0].data.regions[0]["region_info"]["bounding_box"]);
      },
      function(err) {
        // there was an error}
        throw new Error(err);
      }
    );
  };

  render() {
    return (
      <div className="App">
        <Particles params={particlesOptions} className="particles" />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.inputChangeHandler} onSubmit={this.submitHandler} />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
