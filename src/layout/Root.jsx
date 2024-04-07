import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";


const Root = () => {
    return (
        <div className="px-5 mt-5">

            <Nav></Nav>
            <div className="mt-10">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Root;