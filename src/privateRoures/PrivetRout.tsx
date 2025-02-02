// import { RootState } from "@/redux/store";
// import { useSelector } from "react-redux";
// import { Navigate, useLocation } from "react-router";

// interface TChildren {
//     children: string
// }


// const PrivetRout = ({ children }: TChildren) => {

//     const user = useSelector((state: RootState) => state.auth.user);
//     console.log(user);

//     const location = useLocation();

//     if (loading) {
//         return <progress className="progress w-56"></progress>
//     }

//     if (user) {
//         return children;
//     }

//     return <Navigate to="/login" state={{ from: location }} replace></Navigate>
// };

// export default PrivetRout;


import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom"; // Import from react-router-dom
import { useState, useEffect } from "react"; // Import useState and useEffect

interface TChildren {
    children: JSX.Element; // Use JSX.Element for type safety
}

const PrivateRoute = ({ children }: TChildren) => {
    const user = useSelector((state: RootState) => state.auth.user);
    const [loading, setLoading] = useState(true); // State for loading
    const location = useLocation();

    useEffect(() => {
        // Simulate loading (replace with your actual loading logic)
        const timer = setTimeout(() => {
            setLoading(false); // Set loading to false after a delay
        }, 500); // Adjust delay as needed

        // Cleanup timer if component unmounts
        return () => clearTimeout(timer);

    }, [user]); // Add user as a dependency


    if (loading) {
        return <progress className="text-3xl text-blue-600 text-center">Loading</progress>; // Or any other loading indicator
    }

    if (user) {
        return <>{children}</>; // Wrap children in a fragment
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;