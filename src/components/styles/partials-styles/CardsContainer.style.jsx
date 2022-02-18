import styled from "styled-components";

const StyledCardsContainer = styled.section`
    background: ${({ mode }) => mode.background};
    color: ${({ mode }) => mode.color};
    width: 100%;
    height: 100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    gap:3rem;
`

export default StyledCardsContainer;