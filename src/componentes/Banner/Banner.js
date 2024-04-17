import { Fragment } from 'react'
import './Banner.css'

export const Banner = () => {
    // JSX (como o react le isso tudo e transforma em DOM)
    // importar classe em React é className(importo a classe do css)
    // Fragment = <> e </>
    return (
        <> 
            <header className="banner"> 
            <img src="/imagens/banner.png" alt="O banner principal da página Organo"/>
            </header>
            <h1>Teste</h1>
        </>
    )
}
