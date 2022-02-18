import { useContext } from 'react';
import StyledContainer from '../../styles/layout-styles/Container.style';
import { DarkModeContext } from '../../../contexts/DarkModeContext';

const Container = ({ children }) => {
    const { mode } = useContext(DarkModeContext)
    return (
        <StyledContainer mode={mode}>
            {children}
        </StyledContainer>
    )
}

export default Container