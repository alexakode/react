import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AnotherComponent from "./components/AnotherComponent";
import GreetingComponent from "./components/GreetingComponent";
const names = ["Alexander", "John", "Doe"];
function App() {
  return (
    <>
      <AnotherComponent />
      {names.map((name, index) => (
        <GreetingComponent key={index} name={name} />
      ))}
    </>
  );
}

export default App;
