import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [usuario, setUsuario] = useState({});

  function acionaRegistro(e) {
    e.preventDefault();
    setUsuario({
      nome: nome,
      email: email,
      idade: idade,
    });
  }

  return (
    <div className="App">
      <h1>Cadastro de usuários</h1>
      <form onSubmit={acionaRegistro}>
        <label>
          Nome:
          <br />
          <input
            placeholder="Digite seu nome"
            type="text"
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          E-mail:
          <br />
          <input
            placeholder="Digite seu e-mail"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Idade:
          <br />
          <input
            placeholder="Digite sua idade"
            type="number"
            value={idade}
            onChange={(e) => {
              setIdade(e.target.value);
            }}
          />
        </label>
        <br />
        <br />
        <button type="submit">Registrar</button>
      </form>
      <br />
      <div>
        <span>Bem vindo: {usuario.nome}</span>
        <br />
        <span>E-mail: {usuario.email}</span>
        <br />
        <span>Idade: {usuario.idade} anos</span>
      </div>
    </div>
  );
}

export default App;
