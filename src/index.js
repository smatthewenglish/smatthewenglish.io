import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { render } from "react-dom";
import ParticlesBg from "particles-bg";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
        <ParticlesBg type="lines" num={1000} bg={true}/>
      </div>
    );
  }
}

render(<Particle />, document.getElementById('zip'));

const rootElement = document.querySelector("#root");
//render(<App />, document.getElementById('root'));
//if (rootElement) {
  render(
    <div>
      <Grid container spacing={24}>
        <Grid item md={3}>
          <App name="Sara"/>
        </Grid>
        <Grid item md={3}>
          <App name="Cahal"/>
        </Grid>
        <Grid item md={3}>
          <App name="Edite"/>
        </Grid>




      </Grid>
    </div>,
    rootElement
  );
//}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
