import { useContext } from 'react';
import { Link } from 'react-router-dom';
import StyledNavbar from '../../styles/layout-styles/Navbar.style';
import { DarkModeContext } from '../../../contexts/DarkModeContext';

const Navbar = () => {
    const { mode } = useContext(DarkModeContext)
    return (
        <StyledNavbar mode={mode}>
            <Link to='/'>Home</Link>
            <Link to='/shoes'>Shoes</Link>
        </StyledNavbar>
    )
}

export default Navbar