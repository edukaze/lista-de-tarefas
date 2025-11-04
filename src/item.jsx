import { FaTrash } from "react-icons/fa";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
//função que fazer a remoção de cada item e mostra cada item em formato de lista

function Item({tarefa, onRemover, onToggle}){
    return(
        <li>
            <span onClick={onToggle} className="check-icon">
                 {tarefa.concluida ? <FaCheckCircle /> : <FaRegCircle />}
                
            </span> {""}
            <span className="tarefa"style={{ textDecoration: tarefa.concluida ? "line-through" : "none" }}>
                {tarefa.texto}
            </span>
            
            <button className="btn-delete" onClick={onRemover}>
                 <FaTrash />
            </button>
        </li>
    );
}

export default Item;