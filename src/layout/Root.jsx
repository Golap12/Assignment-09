import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";


const Root = () => {
    return (
<<<<<<< HEAD
        <div className="container mx-auto bg-[#e7feff]">

            <Nav></Nav>
            <div className=" min-h-[57.5vh]">
=======
        <div className=" pt-5 bg-gray-100">

            <Nav></Nav>
            <div className="mt-10 min-h-[30vh] px-5">
>>>>>>> origin/main
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;