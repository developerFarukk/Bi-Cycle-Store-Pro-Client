import AdminDashboard from "@/pages/admin/AdminDashboard";
import PrivateRoute from "@/privateRoures/PrivetRout";



export const adminPaths = [
    {
        name: 'Dashboard',
        path: 'admindashboard',
        element: <PrivateRoute ><AdminDashboard /></PrivateRoute>,
    },
];
