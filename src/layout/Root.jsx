import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";


const Root = () => {
    return (
        <div className="container mx-auto bg-[#e7feff]">

            <Nav></Nav>
            <div className=" min-h-[57.5vh]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;