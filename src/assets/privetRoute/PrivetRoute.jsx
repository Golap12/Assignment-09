/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Tower } from "../../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({ children }) => {

    const location = useLocation()
    const { user, loading } = useContext(Tower)

    if (loading) {
        return <div className="text-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }


    if (user) {
        return children
    }
    return <Navigate to="/login" state={location.pathname}></Navigate>

};

export default PrivetRoute;