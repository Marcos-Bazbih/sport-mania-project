import styled from "styled-components";

const StyledNavbar = styled.div`
    grid-area:navbar;
    background: ${({mode})=> mode.background};
    color: ${({mode})=> mode.color};
    display:flex;
    justify-content:center;
    align-items:center;
`

export default StyledNavbar;