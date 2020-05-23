import React from 'react';
import './Hello.css'
//using class
// class Hello extends React.Component {
//   render() {
//     return (
//     	<div>
//       <h1>hello my world</h1>
//       <p>{this.props.greeting}</p>
//       </div>
//     );
//   }
// }


//using function without property
// const Hello=()=>{
//     return (
//     <div class='f1 tc'>
//       <h1>hello my world</h1>
//       <h4>welcome to my react project</h4>
    
//     </div>
//     );
//   }



// using function with property
const Hello=(props)=>{
    return (
    <div class='f1 tc'>
      <h1>HELLO THIS IS MY FIRST REACT COMPONENT</h1>
      <h4>welcome to my react project</h4>
     <p>{props.greeting}</p>
    </div>
    );
  }


 
export default Hello;