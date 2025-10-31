import { useState } from "react";
import Formulario from "./Formulario";
import Lista from "./lista";


function App() {
  const [tarefas, setTareras] =  useState([])
  

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