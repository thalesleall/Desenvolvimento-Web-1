import { useEffect, useState } from 'react';
import './App.css';
import Cadastro from './components/cadastro';
import Tarefas from './components/tarefas';
import CorFundo from './components/cor-fundo';  // Importando o novo componente

function App() {
  const [nome, setNome] = useState(localStorage.getItem("nomeUsuario") || "");

  useEffect(() => {
    if (!nome) { 
      const nomeDigitado = prompt("Informe seu nome:");
      if (nomeDigitado) {
        setNome(nomeDigitado);
        localStorage.setItem("nomeUsuario", nomeDigitado);
      }
    }
  }, [nome]);

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Sua controladora de tarefas, {nome}!</h2>
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "row" }}>
        <Cadastro />
        <Tarefas />
      </div>
      <CorFundo />  {/* Adicionando o componente CorFundo */}
    </>
  );
}

export default App;
