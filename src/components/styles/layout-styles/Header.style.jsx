import styled from "styled-components";

const StyledHeader = styled.header`
    grid-area:header;
    background: ${({mode})=> mode.background};
    color: ${({mode})=> mode.color};
    display:flex;
    justify-content:center;
    align-items:center;
`

export default StyledHeader;