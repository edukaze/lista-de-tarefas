import { useState } from "react";

//componente que farar mo formulario

function Formulario({onAdicionar}){
    const [input, setInput] = useState("")


    //função para receber os dados digitado e enviar para o pai do array tarefa
    function enviar(){
        if(input.trim() !== ""){
            const novaTarefa = {
               id: Date.now(), //identificador
               texto: input,    // texto difitado no imput
               concluida: false //começa uma tarefa como não concluida
            }
            onAdicionar(novaTarefa);
            setInput("");
        }
    }

    return(
        <div>
            <input 
                value={input}
                onChange={(e) =>setInput(e.target.value)}
                placeholder="Digite a tarefa..."
            />
            <button onClick={enviar}>Adicionar</button>
        </div>
    )

}

export default Formulario;