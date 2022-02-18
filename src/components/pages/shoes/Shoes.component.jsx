import { useEffect } from "react";
import { connect } from "react-redux";
import { GetAllShoes } from "../../../services/shoes-service.service";
import { GetData } from "../../../redux/actions/itemsActions";
import CardsContainer from "../../partials/CardsContainer.component";

const Shoes = ({ shoes, GetData }) => {
    useEffect(() => {
        GetAllShoes()
            .then(res => GetData(res))
    }, [])

    return (
        <>
            <h1>Shoes</h1>
            <CardsContainer items={shoes} />
        </>
    )
}

export default connect((state) => ({ shoes: state.shoes }), { GetData })(Shoes);