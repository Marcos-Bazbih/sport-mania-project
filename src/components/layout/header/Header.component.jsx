import { useContext } from 'react';
import StyledHeader from '../../styles/layout-styles/Header.style';
import { DarkModeContext } from '../../../contexts/DarkModeContext';
import StyledDarkModeBtn from '../../styles/partials-styles/DarkModeBtn.style';

const Header = () => {
    const { mode, ToggleTheme } = useContext(DarkModeContext)
    return (
        <StyledHeader mode={mode}>
            <h1>Header</h1>
            <StyledDarkModeBtn onClick={ToggleTheme} mode={mode}>Click</StyledDarkModeBtn>
        </StyledHeader>
    )
}

export default Header