import Nome from "./components/Nome";

function App() {
  return (
    <div className="App">
      <h1>Nosso primeiro app em React</h1>
      <h3>Usando componentes</h3>
      <Nome pessoa="Lucas" />
      <br />
      <Nome pessoa="Gelenski" />
    </div>
  );
}

export default App;
