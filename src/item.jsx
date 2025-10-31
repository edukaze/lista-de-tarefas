
//função que fazer a remoção de cada item e mostra cada item em formato de lista

function Item({texto, onRemover}){
    return(
        <li>
            {texto}
            <button onClick={onRemover}>❌</button>
        </li>
    )
}

export default Item;