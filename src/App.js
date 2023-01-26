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
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; 


function Logo() {
  const userPic = <img src={reactlogo} />;
  return userPic;
}


//FUNCTIONAL COMPONENT

// function Header() {
//   return <h1>Hello world</h1>;
// }
function App() {
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
        <UseStateHook />
        <RegisterForm />
      </div>
      <Footer />
    </>
  );
}

export default App;
