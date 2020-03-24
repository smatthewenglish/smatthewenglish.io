import React from 'react';

 import ParticlesBg from "particles-bg";

const MenuWho = () => {
    return (
     
    <div class="box" id="hook">

      <div class="row header">
			<div id="zip-00">
        		<ParticlesBg type="circle" num={1000} bg={true} />
      		</div>
      		<img class="sme-00" src="./whoami.gif"/>
      </div>
    
      <div class="row content">
        <div id="root"></div> 
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
 
export default MenuWho;

// <img class="sme-00" src="./masterpiece.svg"/>
// <img class="sme-00" src="./masterpiece.gif"/>
// <img class="sme-00" src="./whoami.gif"/>
// <img class="sme-00" src="./credentials.gif"/>

    // <div class="row header" id="zed">
    //   <div id="zip-00">
    //     <ParticlesBg type="circle" num={1000} bg={true} />
    //   </div>
    //   <img class="sme-00" src="./whoami.gif"/>
    // </div>