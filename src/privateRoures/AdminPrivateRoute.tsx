

import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

interface TChildren {
    children: JSX.Element;
}

const AdminPrivateRoute = ({ children }: TChildren) => {
    const userRole = useSelector((state: RootState) => state.auth.user?.role); 
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500); 

        return () => clearTimeout(timer);
    }, [userRole]); 

    if (loading) {
        return <progress className="text-3xl text-blue-600 text-center">Loading</progress>;
    }

    if (userRole === 'admin') {
        return <>{children}</>;
    }

    return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminPrivateRoute;