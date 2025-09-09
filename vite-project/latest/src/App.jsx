import "./App.css";
import Child from "./components/Child.jsx";

// // We can create components in the same file
// const Header = () => <h1>My Application</h1>;
// const Body = () => <h1>This is the body of my application.</h1>;
// const Footer = () => <h1>My Application Footer</h1>;
function App() {
  const users = ["Jim", "John", "Jane", "Lars"];
  const bluey = { name: "Bluey", age: 5, species: "Dog" };
  return (
    <>
      <Child {...bluey} users={users} />
    </>
  );
}

export default App;
