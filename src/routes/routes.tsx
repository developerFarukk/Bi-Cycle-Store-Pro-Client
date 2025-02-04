import { createBrowserRouter } from "react-router";
import Error from "../pages/Error";
import HomeRoot from "./HomeRoot";
import Home from "@/pages/HomePage/Home";
import LoginAuth from "@/authentication/LoginAuth";
import RegistationAuth from "@/authentication/RegistationAuth";
import App from "@/App";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { adminPaths } from "./admin.routes";
import { customerPaths } from "./customer.routes";
import { routeGenerator } from "@/utils/routesGenerator";
import PrivateRoute from "@/privateRoures/PrivetRout";
import AdminPrivateRoute from "@/privateRoures/AdminPrivateRoute";
import AllBicycle from "@/pages/HomePage/product/AllBicycle";



const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error />,
        element: <HomeRoot />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/all-bicycles",
                element: <AllBicycle />
            }
        ]
    },
    {
        path: '/dashboard',
        element: ( <PrivateRoute><SidebarProvider><main><SidebarTrigger /><App /></main></SidebarProvider></PrivateRoute> ),
    },
    {
        path: '/admin',
        element: ( <AdminPrivateRoute><SidebarProvider><main><SidebarTrigger /><App /></main> </SidebarProvider></AdminPrivateRoute> ),
        children: routeGenerator(adminPaths),
    },  
    {
        path: '/customer',
        element: ( <SidebarProvider> <main> <SidebarTrigger /> <App /></main> </SidebarProvider> ),
        children: routeGenerator(customerPaths),
    },

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
