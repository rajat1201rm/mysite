import Typed from "typed.js";
import React from "react";
// Import the desired words
import words from "./Word";
class Typing extends React.Component {
   
  componentDidMount() {
    const options = {
      strings: words,
      typeSpeed: 50,
      backSpeed: 80,
      loop: true,
      cursorChar: "|",
    };
    // var Typed = require(typed.min.js)
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }
componentWillUnmount() {
    // Please don't forget to cleanup animation layer
    this.typed.destroy();
  }
  
  render() {
    return (
        
      <>
        <span
         
          ref={(el) => {
            this.el = el;
          }}
        />
      </>
    );
  }
}
export default Typing;