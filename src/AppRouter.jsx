import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home.component";
import Shoes from "./components/pages/shoes/Shoes.component";
import Shirts from "./components/pages/shirts/Shirts.component";
import Pants from "./components/pages/pants/Pants.component";
import Equipment from "./components/pages/equipment/Equipment.component";
import Navbar from "./components/layout/navbar/Navbar.component";
import Header from "./components/layout/header/Header.component";
import Footer from "./components/layout/footer/Footer.component";
import Container from "./components/layout/container/Container.component";

const AppRouter = () => {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Navbar />
                <Container>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/shoes" element={<Shoes />} />
                        <Route exact path="/shirts" element={<Shirts />} />
                        <Route exact path="/pants" element={<Pants />} />
                        <Route exact path="/equipment" element={<Equipment />} />
                    </Routes>
                </Container>
            </BrowserRouter>
            <Footer />
        </>
    )
}

export default AppRouter;