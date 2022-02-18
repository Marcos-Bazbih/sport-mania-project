import styled from "styled-components";

const StyledCard = styled.article`
    background: ${({ mode }) => mode.background};
    color: ${({ mode }) => mode.color};
    width: 30%;
    height: 50vh;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    border: 2px solid ${({ mode }) => mode.color};
`
export default StyledCard;