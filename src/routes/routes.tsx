import { createBrowserRouter } from "react-router";
import Error from "../pages/Error";
import HomeRoot from "./HomeRoot";
import Home from "@/pages/HomePage/Home";
import LoginAuth from "@/authentication/LoginAuth";
import RegistationAuth from "@/authentication/RegistationAuth";
import App from "@/App";



const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error />,
        element: <HomeRoot />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
    {
        path: '/customer',
        element: <App />,
        // children: routeGenerator(adminPaths),
    },
    // {
    //     path: '/faculty',
    //     element: <App />,
    //     children: routeGenerator(facultyPaths),
    // },
    // {
    //     path: '/student',
    //     element: <App />,
    //     children: routeGenerator(studentPaths),
    // },

    {
        path: 'login',
        element: <LoginAuth />,
    },
    {
        path: '/register',
        element: <RegistationAuth />,
    },
]);

export default router;