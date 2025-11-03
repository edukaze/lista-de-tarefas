import { useState } from "react";
import Formulario from "./Formulario";
import Lista from "./lista";


function App() {
  //criando array de taretas para salva a tarefa e salva cada verto e salva no localStorage e regarregar todo vez que foi iniciado
  const [tarefas, setTareras] =  useState(() => {
    const salva = localStorage.getItem("tarefas");
    return salva ? JSON.parse(salva) : []; 
  });
  

  //usando hook de useEffect para salva as tarefas que o usuario criar no seu proprio computador
  useEffect(()=> {
    //localStorage so aceita strings usando o Json.stringify para converte para string o array
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);
  //função para adiciona tarefas novas no final do da lista

  function adicionaTarefa(tarefa){
    setTareras([...tarefas, tarefa]);
  }

  //função para remove uma tarefa de acordo com o indice

  function removeTarefa(index){
    setTareras(tarefas.filter((_, i) => i !== index));
  }

  return(
    <div style={{padding: 20}}>
      <h1>Minhas Tarefas</h1>
      <Formulario onAdicionar={adicionaTarefa}></Formulario>
      <Lista tarefas={tarefas} onRemover={removeTarefa}></Lista>
    </div>
  )
}

export default App;