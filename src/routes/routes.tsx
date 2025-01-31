import { createBrowserRouter } from "react-router";
import App from "../App";
import Error from "../pages/Error";



const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error />,
        element: <App />,
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