import './App.css';
import { useState } from "react";

function Key({ label, clickHandler }) {
  return (
    <button onClick={clickHandler}>
      {label}
    </button>
  );
}

function Display({ display }) {
  return (
    <div className="Display">
      {display}
    </div>
  );
}

function App() {
  const [disp, setDisp] = useState("10 Things That Require Zero Talent");
  
  const fullName = "LAWRENCE MANUEL M. BALUYUT";
  const section = "IT3A";

  const things = [
    "Being On Time",
    "Making An Effort",
    "Being High Energy",
    "Having A Positive Attitude",
    "Being Passionate",
    "Using Good Body Language",
    "Being Coachable",
    "Doing A Little Extra",
    "Being Prepared",
    "Having A Strong Work Ethic"
  ];

  const numClickHandler = (index) => {
    if (index >= 0 && index < things.length) {
      setDisp(things[index]);
    }
  };

  const resetClickHandler = () => {
    setDisp("10 Things That Require Zero Talent");
  };

  const nameClickHandler = () => {
    setDisp(fullName.toUpperCase());
  };

  return (
    <div className="App">
      <h1>{fullName} - {section}</h1>

      <div className="CalcContainer">
        <div className="DispContainer">
          <Display display={disp} />
        </div>
        <div className="ButtonsContainer">
          {things.slice(0, 9).map((thing, index) => (
            <Key key={index} label={index + 1} clickHandler={() => numClickHandler(index)} />
          ))}
          <Key label={0} clickHandler={() => numClickHandler(9)} />
          <Key label="RESET" clickHandler={resetClickHandler} />
          <Key label="NAME" clickHandler={nameClickHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
