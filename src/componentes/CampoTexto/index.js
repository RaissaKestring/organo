import './CampoTexto.css'
// React usa letra maiuscula no comeco de variaveis
const CampoTexto = (props) => { // importa propriedades (label, placeholder) de App.js

const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
}
// atribuindo valores digitado a uma função
// posteriormente armazenar no Storage

    return (
        <div className="campo-texto">
            <label>
                {props.label} 
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto