import { useContext } from 'react';
import StyledCardsContainer from '../styles/partials-styles/CardsContainer.style';
import { DarkModeContext } from "../../contexts/DarkModeContext";
import Card from './Card.component';


const CardsContainer = ({ items }) => {
    const { mode } = useContext(DarkModeContext)
    return (
        <StyledCardsContainer mode={mode}>
            {
                items && items.length !== 0 ?
                    (
                        items.map((item, i) => (
                            <Card key={i} item={item} />
                        ))
                    ) :
                    <h1>No items yet</h1>
            }
        </StyledCardsContainer>
    )
}

export default CardsContainer;