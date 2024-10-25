import Nome from "./components/Nome";
import { useState } from "react";

function App() {
  // const [pessoa, setPessoa] = useState("Professor");

  // function trocarNome(pessoa) {
  //   setPessoa(pessoa);
  // }
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
      {/* <h1>Nosso primeiro app em React</h1>
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
      <Nome pessoa="Carlos" idade={8} /> */}
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
