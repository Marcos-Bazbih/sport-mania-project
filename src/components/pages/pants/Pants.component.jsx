import { useEffect } from "react";
import { connect } from "react-redux";
import { GetAllPants } from "../../../services/pants-service.service";
import { GetData } from "../../../redux/actions/itemsActions";
import CardsContainer from "../../partials/CardsContainer.component";

const Pants = ({ pants, GetData }) => {
    useEffect(() => {
        GetAllPants()
            .then((res) => GetData(res))
    }, [])

    return (
        <>
            <h1>Pants</h1>
            <CardsContainer items={pants} />
        </>
    )
}

export default connect(({ pants }) => ({ pants }), { GetData })(Pants);