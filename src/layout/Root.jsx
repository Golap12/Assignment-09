import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";


const Root = () => {
    return (
        <div className="px-5 mt-5">

            <Nav></Nav>
            <div className="mt-10 min-h-[30vh]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;