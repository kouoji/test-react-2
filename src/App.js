import Nome from "./components/Nome";
import { useState } from "react";

function App() {
  const [pessoa, setPessoa] = useState("Professor");

  function trocarNome(pessoa) {
    setPessoa(pessoa);
  }

  return (
    <div className="App">
      <h1>Nosso primeiro app em React</h1>
      <h2>Olá {pessoa}</h2>
      <h3>Usando componentes</h3>
      <Nome pessoa="Lucas" idade={17} />
      <br />
      <Nome pessoa="Gelenski" idade={16} />
      <br />
      <button onClick={() => trocarNome("Testando a troca de nomes.")}>
        Mudar o nome
      </button>
      <br />
      <Nome pessoa="Carlos" idade={8} />
    </div>
  );
}

export default App;
