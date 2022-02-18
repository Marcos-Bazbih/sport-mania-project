import { useState } from 'react';
import { connect } from 'react-redux';
import { AddItem, RemoveItem } from '../../../redux/actions/itemsActions';

const Home = ({AddItem, RemoveItem}) => {
    const [shoe, setShoe] = useState({
        InSale: false
    });

    const HandleInput = (e) => {
        if (e.target.type === "number") {
            shoe[e.target.name] = Number(e.target.value);
        }
        else {
            shoe[e.target.name] = e.target.value;
        }
    }

    const AddShoe = () => {
        setShoe(shoe);
        console.log(shoe);
    }

    const Send = (e) => {
        e.preventDefault();
        AddItem(shoe)
    }

    const Delete = (e) => {
        e.preventDefault();
        RemoveItem(17)
    }

    return (
        <div>
            <h1>Home</h1>
            <form>
                Type<input onChange={(e) => HandleInput(e)} name="Type" type="text" /> <br></br>
                Company<input onChange={(e) => HandleInput(e)} name="Company" type="text" /> <br></br>
                Model<input onChange={(e) => HandleInput(e)} name="Model" type="text" /> <br></br>
                Price<input onChange={(e) => HandleInput(e)} name="Price" type="number" /> <br></br>
                Quantity<input onChange={(e) => HandleInput(e)} name="Quantity" type="number" /> <br></br>
                {/* InSale<input onChange={(e) => HandleInput(e)} name="InSale" type="text" /> <br></br> */}
                Image<input onChange={(e) => HandleInput(e)} name="Image" type="text" /> <br></br>
                <button type="button" onClick={AddShoe}>UPDATE</button> <br></br>
                <button type="button" onClick={Send}>SEND</button>
                <button type="button" onClick={Delete}>DELETE</button>
            </form>
        </div>
    )
}

export default connect(({ shoes }) => ({ shoes }), { AddItem, RemoveItem })(Home);