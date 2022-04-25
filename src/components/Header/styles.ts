import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto; // Deixar centralizado 

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center; // alinha os itens, deixando eles sempre reto, o botão e a logo estão alinhados na msm "linha"
    justify-content: space-between; // Espaço entro todos os itens dentro do content, faz o botão ficar de um lado
                                        // e a logo de outro de forma alinhada, centralizada
    
    button {
        font-size: 1rem;
        color: #FFF;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem; // deixa o botão levemente arredondado
        height: 3rem;

         transition: filter 0.2s;
        // hackzinho para quando passar o mouse por cima do botão aplicar um filtro:
        &:hover {
            filter: brightness(0.9); // filtro da uma leve escurecida para mostrar que o mouse ta em um botão
        }

    }
`;