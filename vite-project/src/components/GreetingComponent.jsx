export default function GreetingComponent({name}) {
  console.log(name);
  return (
    <div className="container">
      <h1 className="header">
        Hi, {name}, how are you doing?
      </h1>
    </div>
  );
}
