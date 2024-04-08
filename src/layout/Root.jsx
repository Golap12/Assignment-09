import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";


const Root = () => {
    return (
        <div className=" pt-5 bg-gray-100">

            <Nav></Nav>
            <div className="mt-10 min-h-[30vh] px-5">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;