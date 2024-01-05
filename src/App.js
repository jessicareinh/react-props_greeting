import "./styles.css";

/*function Greeting({ name }) {
  if (name === "Coach") {
    return <h1>Hello, Coach!</h1>;
  } else {
    return <h1>Hello, {name}!</h1>;
  }
}

function App() {
  return (
    <div className="App">
      <Greeting name="Alice" />
    </div>
  );
}*/

export default function App() {
  return <Greeting name="Niklas" />

}

function Greeting({ name }) {
  return <h1>Hello {name === "Niklas" ? "Coach" : name}!</h1>;
}