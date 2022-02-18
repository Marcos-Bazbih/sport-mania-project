import { connect } from "react-redux";
import { useEffect } from "react";
import { GetAllEquipment } from "../../../services/equipment-service.service.js";
import { GetData } from "../../../redux/actions/itemsActions"
import CardsContainer from "../../partials/CardsContainer.component";

const Equipment = ({ equipment, GetData }) => {
    useEffect(() => {
        GetAllEquipment()
            .then((res) => GetData(res))
    }, []);

    return (
        <>
            <h1>Equipment</h1>
            <CardsContainer items={equipment} />
        </>
    );
};

export default connect((({ equipment }) => ({ equipment })), { GetData })(Equipment); 