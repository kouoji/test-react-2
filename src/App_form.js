import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [tarefa, setTarefa] = useState(["Cortar o baralho", "Distribuir as cartas"]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const tarefasStorage = localStorage.getItem("@tarefa");
    if (tarefasStorage) {
      setTarefa(JSON.parse(tarefasStorage));
    }
  }, [tarefa]);

  useEffect(() => {
    localStorage.setItem("@tarefa", JSON.stringify(tarefa));
  }, [tarefa]);

  function acionaRegistro(e) {
    e.preventDefault();
    if (input === "") {
      alert("Insira uma tarefa.");
    } else {
      setTarefa([...tarefa, input]);
      setInput("");
    }
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
      <ul>
        {tarefa.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
