import { useEffect } from 'react';
import { connect } from 'react-redux';
import { GetAllShirts } from "../../../services/shirts-service.service"
import { GetData } from '../../../redux/actions/itemsActions';
import CardsContainer from "../../partials/CardsContainer.component";

const Shirts = ({ GetData, shirts }) => {
    useEffect(() => {
        GetAllShirts()
            .then(res => GetData(res))
    }, []);

    return (
        <>
            <h1>Shirts</h1>
            <CardsContainer items={shirts} />
        </>
    )
}

export default connect((state) => ({ shirts: state.shirts }), { GetData })(Shirts);