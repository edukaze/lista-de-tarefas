import { useState } from "react";
import { useEffect } from "react";
import Formulario from "./Formulario";
import Lista from "./lista";
import './App.css';


function App() {
  //criando array de taretas para salva a tarefa e salva cada verto e salva no localStorage e regarregar todo vez que foi iniciado
  const [tarefas, setTarefas] =  useState(() => {
    const salva = localStorage.getItem("tarefas");
    return salva ? JSON.parse(salva) : []; 
  });
  

  //usando hook de useEffect para salva as tarefas que o usuario criar no seu proprio computador
  useEffect(()=> {
    //localStorage so aceita strings usando o Json.stringify para converte para string o array
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);
  
  //função para adiciona tarefas novas no final do da lista
  function adicionaTarefa(novaTarefa) {
    setTarefas([...tarefas, novaTarefa]);
  }

  //função para muda a tarefa para concluida
  function mudaTarefa(index){
    setTarefas(
      tarefas.map((tarefa, i) =>
      i=== index ? {...tarefa, concluida: !tarefa.concluida} : tarefa)
    );
  }

  //função para muda o estatos da tarefa para comcluida
  function mudaTarefa(index) {
  const novasTarefas = [...tarefas];
  novasTarefas[index].concluida = !novasTarefas[index].concluida;
  setTarefas(novasTarefas);
}
  //função para remove uma tarefa de acordo com o indice

  function removeTarefa(index){
    setTarefas(tarefas.filter((_, i) => i !== index));
  }

  return(
    <div className="card-principal">
      <h1>Minhas Tarefas</h1>
      <Formulario
       onAdicionar={adicionaTarefa}>
      </Formulario>
      <Lista 
        tarefas={tarefas}
        onRemover={removeTarefa}
        onToggle={mudaTarefa}>
      </Lista>
    </div>
  )
}

export default App;