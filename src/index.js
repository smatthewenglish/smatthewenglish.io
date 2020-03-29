import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { render } from "react-dom";
import ParticlesBg from "particles-bg";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { useHistory } from "react-router-dom";
import { createBrowserHistory } from "history";
import MenuWho from "./whoami/MenuWho";
import MenuEdu from "./credentials/MenuEdu";
import MenuTsc from "./craftsmanship/MenuTsc";
import MenuCov from "./project/MenuCov";

import {Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';

class Particle extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  // componentDidMount() {
  //   window.addEventListener("popstate", );
  // }

  componentDidMount() {
  window.onpopstate = () => { 

    //alert("sup?");
    window.location.reload();
    createBrowserHistory().push('/');

  }
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

const rY = document.querySelector("#zip-00");
if (rY) {
  render(<Particle />, document.getElementById("zip-00"));
}

function Edu() {
  return (
    <div>
      • Rheinische Friedrich-Wilhelms-Universität Bonn
      <br />
      • The University of Hong Kong (香港大學)
      <br />
      • 汉语水平考试 (Hanyu Shuiping Kaoshi)
      <br />• New York University (NYU)
    </div>
  );
}

function Covid2020() {
  return (
    <div>
      • iOS App
      <br />• Open Source
    </div>
  );
}

function Tsc() {
  return (
    <div>
      • iOS App
      <br />• Open Source
    </div>
  );
}

function Bio() {
  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat...
    </div>

     
  );
}

const rootElement = document.querySelector("#cards");
//render(<App />, document.getElementById('root'));
//if (rootElement) {

//meisterstück





const history = createBrowserHistory();

// render(
//   <div>
//     <Grid 

// class="cards"
//     container 
//     spacing={24}>
//       <Grid item md={3}>
//         <App
//         class="card"
//           name="personal introduction"
//           subject="whoami"
//           desc={<Bio />}
//           sub="autobiography"
//           history={history}
//           whoami={<MenuWho />}
//         />
//       </Grid>

//       <Grid item md={3}>
//         <App
//         class="card"
//           name="the american football of chess"
//           subject="craftsmanship"
//           desc={<Tsc />}
//           sub="masterpiece pro tempore"
//           history={history}
//           whoami={<MenuTsc />}
//         />
//       </Grid>

//       <Grid item md={3}>
//         <App
//         class="card"
//           name="COVID-2020"
//           subject="project"
//           desc={<Covid2020 />}
//           sub="united states infographic"
//           history={history}
//           whoami={<MenuCov />}
//         />
//       </Grid>

//       <Grid item md={3}>
//         <App
//         class="card"
//           name="formal education"
//           subject="credentials"
//           desc={<Edu />}
//           sub="institutional"
//           history={history}
//           whoami={<MenuEdu />}
//         />
//       </Grid>
//     </Grid>
//   </div>,
//   rootElement
// );



//}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
