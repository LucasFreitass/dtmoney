import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    
    :root { // VARIAVEIS DO CSS, VAMOS DEFINIR ELAS COM CADA COR DO FIGMA, PARA FACILITAR
        
        --red: #e52e4d;
        --blue: #5429cc;
        --green: #33cc95;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --background: #f0f2f5;
        --shape: #ffffff;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        // Por padrão font-size: 16px
        @media (max-width: 1080px) { // se o tam máx for de 1080, diminuir a font para 93.75% do 16px..
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    

    body {
        background: var(--background)
        //-webkit-font-smoothing: antialiased; // isso não ta funcionando '-', é uma macete para deixar as fontes mais nitidas
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    } 

    // Essas fontes, tamanhos, é seguindo o que o Layout criado no Figma propõe, assim deixando a aplicação fiel ao layout

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }


    button {
        cursor: pointer;
    }

    [disabled] { // tudo oq estiver disabilitado na aplicação vai ficar mais opaco, clarinho
        opacity: 0.6;
        cursor: not-allowed // mostra uma plaquinha de não permitido usar 
    }

`