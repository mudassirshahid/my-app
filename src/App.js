import "./App.css";
import Header from "./Components/Header";
import Heading from "./Components/Heading";
import Functions from "./Components/Functions";
import reactlogo from './reactlogo.svg';
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import ModeToggler from "./Components/ModeToggler";
import EventHandling from "./Components/EventHandling";
import UseStateHook from "./Components/UseStateHook";
import RegisterForm from "./Components/RegisterForm";
import Fruits from "./Components/Fruits";
import FruitsCounter from "./Components/FruitsCounter";
import { useRef } from "react";
import { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; 
import UseRefHook from "./Components/UseRefHook";


function Logo() {
  const userPic = <img src={reactlogo} />;
  return userPic;
}


//FUNCTIONAL COMPONENT

// function Header() {
//   return <h1>Hello world</h1>;
// }

// PROP DEALING 

function Main(props) { 
  return <Head msg={props.msg} />; 
};

function Head(props) { 
  return ( 
    <div className="mt-5" style={{ border: "10px solid whitesmoke" }}> 
      <h1>Header here</h1> 
      <Wrapper msg={props.msg} /> 
    </div> 
  ); 
};

function Wrapper(props) { 
  return ( 
    <div style={{ border: "10px solid lightgray" }}> 
      <h2>Wrapper here</h2> 
      <Button msg={props.msg} /> 
    </div> 
  ); 
};

function Button(props) { 
  return ( 
    <div style={{ border: "20px solid orange" }}> 
      <h3>This is the Button component</h3> 
      <button onClick={() => alert(props.msg)}>Click me!</button> 
    </div> 
  ); 
};

function App() {
   const [word, setWord] = useState('Eat'); 

// Managing state
   const [fruits] = useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'apple', id: 2},
    {fruitName: 'plum', id: 3},
    
  ]);
  
    function handleClick() { 
        setWord('Drink'); 
    }
  return (
    <>
    {/* FUNCTIONAL COMPONENT */}
      {/* <Header />  */}
      <Header title="React"/>
      <div className="container App">
      <Functions first="Home"/>
      <Logo />
      <Heading  title="React"/>
      <h1>Task: Add three Card elements</h1>
        <Card h2="First card's h2" h3="First card's h3" />
        <Card h2="Second card's h2" h3="Second card's h3" />
        <Card h2="Third card's h2" h3="Third card's h3" />
        <EventHandling />
        <ModeToggler />
        <UseStateHook  message={word + " at little lemon"} />
        <button onClick={handleClick}>Click here</button>
        <RegisterForm />
        <UseRefHook />
        <Main msg="I passed through the Header and the Wrapper and I reached the Button component" /> 
        <h1>Where should the state go?</h1>
        <Fruits fruits={fruits} />
        <FruitsCounter fruits={fruits} />
      </div>
      <Footer />
    </>
  );
}

export default App;
