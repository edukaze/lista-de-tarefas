import Item from "./item";

//função que vai criar a lista e coloca em sequencia 

function Lista({tarefas, onRemover}){
    return(
        <ul>
            {tarefas.map((tarefa, i) => (
               <Item
               key={i}
               texto={tarefa}
               onRemover={()=> onRemover(i)}
               ></Item> 
            ))}
        </ul>
    );
}

export default Lista;