import Item from "./item";

//função que vai criar a lista e coloca em sequencia 

function Lista({tarefas, onRemover, onToggle}){
    return(
        <ul>
            {tarefas.map((tarefa, index) => (
               <Item
               key={tarefa.id}
               tarefa={tarefa}
               onRemover={()=> onRemover(index)}
               onToggle={() => onToggle(index)}
               ></Item> 
            ))}
        </ul>
    );
}

export default Lista;