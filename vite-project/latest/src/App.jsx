import "./App.css";
import Child from "./components/Child.jsx";

// // We can create components in the same file
// const Header = () => <h1>My Application</h1>;
// const Body = () => <h1>This is the body of my application.</h1>;
// const Footer = () => <h1>My Application Footer</h1>;
function App() {
  const users = ["Jim", "John", "Jane", "Lars"];
  const objUsers = [
    // { name: "Jim", email: "jim@example.com" },
    // { name: "John", email: "john@example.com" },
    // { name: "Jane", email: "jane@example.com" },
    // { name: "Lars", email: "lars@example.com" },
  ];
  // return (
  //   <>
  //     {objUsers.map((user, index) => (
  //       <div key={index}><h3>Name: {user.name},</h3> <h3>Email: {user.email}</h3></div> //This works as long as each string in user is unique
  //     ))}
  //   </>
  // );
  return (
    <>
      <Child />
    </>
  );
}

export default App;
