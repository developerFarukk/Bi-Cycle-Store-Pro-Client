import { createBrowserRouter } from "react-router";
import Error from "../pages/Error";
import HomeRoot from "./HomeRoot";
import Home from "@/pages/HomePage/Home";



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
    // {
    //     path: '/admin',
    //     element: <App />,
    //     children: routeGenerator(adminPaths),
    // },
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

    // {
    //     path: '/login',
    //     element: <Login />,
    // },
    // {
    //     path: '/register',
    //     element: <Register />,
    // },
]);

export default router;