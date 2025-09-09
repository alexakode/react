import GrandChild from "./GrandChild";
export default function Child({ name, ...rest }) {
  return (
    <>
      <h1>child: {name}</h1>
      <GrandChild {...rest} />
    </>
  );
}
