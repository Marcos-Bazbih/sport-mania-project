import { useContext } from 'react';
import StyledFooter from '../../styles/layout-styles/Footer.style'
import { DarkModeContext } from '../../../contexts/DarkModeContext';

const Footer = () => {
    const { mode } = useContext(DarkModeContext)
    return (
        <StyledFooter mode={mode}>
            <h1>Footer</h1>
        </StyledFooter>
    )
}

export default Footer