import "./App.css";
import Child from "./components/Child.jsx";

// // We can create components in the same file
// const Header = () => <h1>My Application</h1>;
// const Body = () => <h1>This is the body of my application.</h1>;
// const Footer = () => <h1>My Application Footer</h1>;
function App() {
  const users = ["Jim", "John", "Jane", "Lars"];
  const objUsers = [
    { name: "Jim", age: 25 },
    { name: "John", age: 30 },
    { name: "Jane", age: 35 },
    { name: "Lars", age: 40 },
  ];
  // We can also pass objects as props
  const bluey = { name: "Bluey", age: 5, species: "Dog" };
  return (
    <>
      <Child {...bluey} />
    </>
  );
}

export default App;
