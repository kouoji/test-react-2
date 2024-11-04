import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [tarefa, setTarefa] = useState(() => {
    const tarefasStorage = localStorage.getItem("@tarefa");
    return tarefasStorage ? JSON.parse(tarefasStorage) : ["Pagar a conta de luz", "Estudar React"];
  });

  useEffect(() => {
    localStorage.setItem("@tarefa", JSON.stringify(tarefa));
  }, [tarefa]);

  function acionaRegistro(e) {
    e.preventDefault();
    setTarefa((prevTarefa) => [...prevTarefa, input]);
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
        {tarefa.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
