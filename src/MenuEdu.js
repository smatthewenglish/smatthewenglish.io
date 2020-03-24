import React from 'react';

 
// const MenuEdu = () => {
//     return (
     
//     <div class="row header">

      
      
//     const yourElement = this.yourElement.current;
//     VANTA.NET({
//       el: yourElement
//     })

//     </div>

//     );
// }

//import React from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

class MenuEdu extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = BIRDS({
      el: this.vantaRef.current
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return <div ref={this.vantaRef}>
      Foreground content goes here
    </div>
  }
}
 
export default MenuEdu;

// <img class="sme-00" src="./masterpiece.svg"/>
// <img class="sme-00" src="./masterpiece.gif"/>
// <img class="sme-00" src="./whoami.gif"/>
// <img class="sme-00" src="./credentials.gif"/>

// <div id="zip-00"></div>
//       <img class="sme-00" src="./credentials.gif"/>