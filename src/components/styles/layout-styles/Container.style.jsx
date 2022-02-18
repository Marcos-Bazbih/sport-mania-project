import styled from "styled-components";

const StyledContainer = styled.section`
    grid-area:main;
    background: ${({mode})=> mode.background};
    color: ${({mode})=> mode.color};
    display:flex;
    justify-content:center;
    align-items:center;
`

export default StyledContainer;