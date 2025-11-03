
//função que fazer a remoção de cada item e mostra cada item em formato de lista

function Item({tarefa, onRemover, onToggle}){
    return(
        <li>
            <input 
                type="checkbox" 
                checked= {tarefa.concluida}
                onChange={onToggle}
            />{""}
            <span style={{ textDecoration: tarefa.concluida ? "line-through" : "none" }}>
                {tarefa.texto}
            </span>
            
            <button onClick={onRemover}>❌</button>
        </li>
    );
}

export default Item;