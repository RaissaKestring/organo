import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    console.log(props.itens)
    // [].map (percorre a lista e retorna manipulado)
    // aparece sempre que tem uma interação em cima de uma lista renderizada na tela
    // pra cada item eu retorno uma option
    // imprimir o valor do item dentro da option
    // preciso de uma chave para cada item, pra ajudar o react a saber quando renderizar
    return(
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa