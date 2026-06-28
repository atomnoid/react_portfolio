import "./App.css";

// This is a component
function App() {
  return (
    <>
      <Text display="hello"/>
      <Text display="never mind"/>
      <Text display="okay"/>

    </>
  );
}
function Text({display}) {
  return (
    <div>
      <p>{display}</p>
    </div>
  );
}

export default App;
