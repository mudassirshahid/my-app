import React from "react";

function ModeToggler() {
  let darkModeOn = false;
  const darkMode = (
    <button className="bg-dark text-white">Dark Mode is On</button>
  );
  const lightMode = (
    <button className="bg-light text-black">Light Mode is On</button>
  );

  function handleClick() {
    darkModeOn = !darkModeOn;
    if (darkModeOn == true) {
      console.log("Dark mode is on");
    } else {
      console.log("Light mode is on");
    }
  }

  function handleClickPrompt() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt("type a number");
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }

  return (
    <>
      {" "}
      <div className="text-right">
        {darkModeOn ? darkMode : lightMode}
        <button className="bg-dark text-white" onClick={handleClick}>
          Click me
        </button>
      </div>
      <div>
              <h1>Task: Add a button and handle a click event</h1>
             {" "}
        <button onClick={handleClickPrompt}>
          Guess the number between 1 and 3
        </button>
           {" "}
      </div>
    </>
  );
}

export default ModeToggler;
