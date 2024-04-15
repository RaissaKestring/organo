import './CampoTexto.css'
// React usa letra maiuscula no comeco de variaveis
const CampoTexto = () => {
    return (
        <div className="campo-texto">
            <label>Nome</label>
            <input placeholder='Digite o seu nome'/>
        </div>
    )
}

export default CampoTexto