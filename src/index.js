import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { render } from "react-dom";
import ParticlesBg from "particles-bg";

class Particle extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <ParticlesBg type="lines" num={1000} bg={true} />
      </div>
    );
  }
}

const rX = document.querySelector("#landing_background");
if (rX) {
  render(<Particle />, document.getElementById("landing_background"));
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
