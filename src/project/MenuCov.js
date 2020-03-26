import React from 'react';
import './MenuCov.css';

import ScriptTag from 'react-script-tag';
import { useState, useEffect } from 'react';

import Particles from 'react-particles-js';
 
const MenuCov = () => {

  let config = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
  "config_demo": {
    "hide_card": false,
    "background_color": "#b61924",
    "background_image": "",
    "background_position": "50% 50%",
    "background_repeat": "no-repeat",
    "background_size": "cover"
  }
};


    return (
     
<div class="box">



  <div class="row header" class="fuckfuckfuck">

<Particles 
 id="particles_background" 
        params={config} 
      /> 
    
    <img class="title" src="./image/header/project/title.svg" />
 
  </div>


  <div class="row content" id="content">
 

    <div id="tooltip-container"></div>
  </div>
  

    <div class="row footer">
        <div class="footer-social-icons">
          <a class="social-icon" href="//www.meetup.com/members/216718973/"><i class="fa fa-meetup"></i></a>
          <a class="social-icon" href="//t.me/smatthewenglish"><i class="fa fa-telegram"></i></a>
          <a class="social-icon" href="//stackoverflow.com/users/3787253/smatthewenglish"><i class="fa fa-stack-overflow"></i></a>
          <a class="social-icon" href="//apps.apple.com/us/developer/s-matthew-english/id1458676174"><i class="fa fa-apple"></i></a> 
          <a class="social-icon" href="mailto:matthew@tschess.io"><i class="fa fa-envelope"></i></a>
          <a class="social-icon" href="//scholar.google.de/citations?user=Wnka3RQAAAAJ&hl=en"><i class="ai ai-google-scholar-square"></i></a>
          <a class="social-icon" href="//github.com/smatthewenglish"><i class="fa fa-github"></i></a>
          <a class="social-icon" href="//open.spotify.com/user/smatthewenglish"><i class="fa fa-spotify"></i></a>
          <a class="social-icon" href="//www.reddit.com/user/s-matthew-english"><i class="fa fa-reddit"></i></a>
          <a class="social-icon" href="//instagram.com/smatthewenglish"><i class="fa fa-instagram"></i></a>
          <a class="social-icon" href="//twitter.com/smatthewenglish"><i class="fa fa-twitter"></i></a>
          <a class="social-icon" href="//medium.com/@s.matthew.english"><i class="fa fa-medium"></i></a>
          <a class="social-icon" href="//soundcloud.com/laviusalens"><i class="fa fa-soundcloud"></i></a>  
          <a class="social-icon" href="//www.youtube.com/channel/UCwvrxkqadxUUAIlsH5zqg3A"><i class="fa fa-youtube"></i></a>
        </div>
    </div>
  
</div>
    

    );
}
 
export default MenuCov;



// <img class="sme-00" src="./masterpiece.svg"/>
// <img class="sme-00" src="./masterpiece.gif"/>
// <img class="sme-00" src="./whoami.gif"/>
// <img class="sme-00" src="./credentials.gif"/>

// <script src="//cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
// <script src="//cdnjs.cloudflare.com/ajax/libs/topojson/1.1.0/topojson.min.js"></script>
// <script src="//cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.min.js"></script>
// <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

