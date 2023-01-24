import "./App.css";
import Heading from "./Components/Heading";

//FUNCTIONAL COMPONENT

function Header() {
  return <h1>Hello world</h1>;
}
function App() {
  return (
    <>
    {/* FUNCTIONAL COMPONENT */}
      <Header /> 
      <Heading />
    </>
  );
}

export default App;
