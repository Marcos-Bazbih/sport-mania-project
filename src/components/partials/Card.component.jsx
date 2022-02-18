import { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import StyledCard from "../styles/partials-styles/Card.style";

const Card = ({ item }) => {
    const {mode} = useContext(DarkModeContext)
    return (
        <StyledCard mode={mode}>
            <h1>Id: {item.Id}</h1>
            <h1>Type: {item.Type}</h1>
            <h1>Company: {item.Company}</h1>
            <h1>Model: {item.Model}</h1>
            <h1>Price: {item.Price}</h1>
            <h1>Quantity: {item.Quantity}</h1>
            <h1>Quantity: {item.Quantity}</h1>
            <h1>InSale: {item.InSale ? "yes" : "no"}</h1>
            <img width={"50px"} src={item.Image} alt="img" />
        </StyledCard>
    )
}

export default Card;