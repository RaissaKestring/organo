import './Banner.css'

function Banner() {
    // JSX (como o react le isso tudo e transforma em DOM)
    // importar classe em React é className(importo a classe do css)
    return (
        <header className="banner"> 
        <img src="/imagens/banner.png" alt="O banner principal da página Organo"/>
        </header>
    )
}

export default Banner