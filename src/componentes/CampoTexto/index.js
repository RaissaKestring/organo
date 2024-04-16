import './CampoTexto.css'
// React usa letra maiuscula no comeco de variaveis
const CampoTexto = (props) => { // importa propriedades (label, placeholder) de App.js
    return (
        <div className="campo-texto">
            <label>
                {props.label} 
            </label>
            <input required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto