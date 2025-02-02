

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom"; // Import from react-router-dom
import { useState, useEffect } from "react"; // Import useState and useEffect

interface TChildren {
    children: JSX.Element; // Use JSX.Element for type safety
}

const PrivateRoute = ({ children }: TChildren) => {
    const user = useSelector((state: RootState) => state.auth.user);
    const [loading, setLoading] = useState(true); 
    const location = useLocation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); 
        }, 500); 

   
        return () => clearTimeout(timer);

    }, [user]);


    if (loading) {
        return <progress className="text-3xl text-blue-600 text-center">Loading</progress>; 
    }

    if (user) {
        return <>{children}</>; 
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;