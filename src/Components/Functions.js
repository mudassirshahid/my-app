import React from "react";

// function Functions(props) {
//     return (
//         <ul>
//         <li>{props.first}</li>
//     </ul>
//      );
// }

// Function Expressions

// const Functions = function(props) {
//     return (
//         <ul>
//             <li>{props.first}</li>
//         </ul>
//     )
// }

// arrow function:

// const Functions  = (props) => {
//     return (
//         <ul>
//             <li>{props.first}</li>
//         </ul>
//     )
// }

// one-liner

const Functions = () => (
  <ul>
    <li>Home</li>
  </ul>
);

// Ternary operators and functions in JSX

// let name = prompt("Please enter name");
// let name = '';
// if (name == 'Bob') {
//     console.log('Hello, Bob');
// } else {
//     console.log('Hello, Friend');
// };

// Ternary operators

let name = "Bob";
name == "Bob" ? console.log("Hello, Bob") : console.log("Hello, Friend");

<div className="heading">
  <h1>{Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"}</h1>
</div>;
console.log(Math.random());

// EXAMPLE 2

<div className="heading">
<h1>Here's a random number from 0 to 10: 
    { Math.floor(Math.random() * 10) + 1 }
</h1>
</div>
console.log(Math.floor());

try {
  (5).toUpperCase();
  console.log()
} 
catch(e) {
  console.log(`Oops, you can't uppercase a number. 
      Trying to do it resulted in the following`, e);
}

export default Functions;
