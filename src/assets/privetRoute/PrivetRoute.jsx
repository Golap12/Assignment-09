/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Tower } from "../../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    // console.log(children);
    const location = useLocation()


    const {user} = useContext(Tower)
    if (user) {
        return children     
    }
    return <Navigate to="/login" state={location.pathname}></Navigate>

};

export default PrivetRoute;