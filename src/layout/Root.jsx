import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";


const Root = () => {
    return (
        <div className=" pt-5 rounded-b-2xl container mx-auto">

            <Nav></Nav>
            <div className=" min-h-[57.5vh] px-5">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;