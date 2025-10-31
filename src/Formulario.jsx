import { useState } from "react";

//componente que farar mo formulario

function Formulario({onAdicionar}){
    const [input, setInput] = useState("")


    //função para receber os dados digitado e enviar para o pai do array tarefas
    function enviar(){
        if(input.trim !== ""){
            onAdicionar(input);
            setInput("");
        }
    }

    return(
        <div>
            <input value={input}
            onChange={(e) =>setInput(e.target.value)}
            />
            <button onClick={enviar}>Adicionar</button>
        </div>
    )

}

export default Formulario;