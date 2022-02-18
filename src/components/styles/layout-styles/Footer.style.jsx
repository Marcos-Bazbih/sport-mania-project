import styled from "styled-components";

const StyledFooter = styled.footer`
    grid-area:footer;
    background: ${({mode})=> mode.background};
    color: ${({mode})=> mode.color};
    display:flex;
    justify-content:center;
    align-items:center;
`

export default StyledFooter;