import { createBrowserRouter} from "react-router";
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
        path: '/dashboard',
        element: (
            <SidebarProvider>
                <main>
                    <SidebarTrigger />
                    <App />
                </main>
            </SidebarProvider>
        ),
        // children: [
        //     // {
        //     //     index: true,
        //     //     element: (() => {
        //     //         const userRole = useSelector((state: RootState) => state.auth.user?.role);

        //     //         if (userRole === 'admin') {
        //     //             return <Navigate to="admin/dashboard" replace />;
        //     //         } else if (userRole === 'customer') {
        //     //             return <Navigate to="customer/dashboard" replace />;
        //     //         } else {
        //     //             return <Navigate to="/login" replace />;
        //     //         }
        //     //     })(),
        //     // },

        //     {
        //         path: '/admin',
        //         element: (
        //             <SidebarProvider>
        //                 <main>
        //                     <SidebarTrigger />
        //                     <App />
        //                 </main>
        //             </SidebarProvider>
        //         ),
        //         children: routeGenerator(adminPaths),
        //     },
        //     {
        //         path: '/customer',
        //         element: (
        //             <SidebarProvider>
        //                 <main>
        //                     <SidebarTrigger />
        //                     <App />
        //                 </main>
        //             </SidebarProvider>
        //         ),
        //         children: routeGenerator(customerPaths),
        //     },
        // ]
    },
    {
        path: '/admin',
        element: (
            <SidebarProvider>
                <main>
                    <SidebarTrigger />
                    <App />
                </main>
            </SidebarProvider>
        ),
        children: routeGenerator(adminPaths),
    },
    {
        path: '/customer',
        element: (
            <SidebarProvider>
                <main>
                    <SidebarTrigger />
                    <App />
                </main>
            </SidebarProvider>
        ),
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
