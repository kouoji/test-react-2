import { useState } from "react";

function App() {
  const [tarefa, setTarefa] = useState(["Cortar o baralho", "Distribuir as cartas"]);
  const [input, setInput] = useState("");

  function acionaRegistro(e) {
    e.preventDefault();
    setTarefa([...tarefa, input]);
    setInput("");
  }

  return (
    <div className="App">
      <h1>Cadastro de usuários</h1>
      <form onSubmit={acionaRegistro}>
        <label>
          Nome da tarefa:
          <br />
          <input
            placeholder="Digite uma tarefa"
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </label>
        <br />
        <br />
        <button type="submit">Registrar</button>
      </form>
      <br />
      <br />
      <ul>
        {tarefa.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
