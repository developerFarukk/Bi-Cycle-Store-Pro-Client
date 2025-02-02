
// // import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

// // import {
// //     Sidebar,
// //     SidebarContent,
// //     SidebarGroup,
// //     SidebarGroupContent,
// //     SidebarGroupLabel,
// //     SidebarMenu,
// //     SidebarMenuButton,
// //     SidebarMenuItem,
// // } from "@/components/ui/sidebar"
// // import { Outlet } from "react-router";

// // // const items = [
// // //     {
// // //         title: "Home",
// // //         url: "/",
// // //         icon: Home,
// // //     },
// // //     {
// // //         title: "Inbox",
// // //         url: "#",
// // //         icon: Inbox,
// // //     },
// // //     {
// // //         title: "Calendar",
// // //         url: "#",
// // //         icon: Calendar,
// // //     },
// // //     {
// // //         title: "Search",
// // //         url: "#",
// // //         icon: Search,
// // //     },
// // //     {
// // //         title: "Settings",
// // //         url: "#",
// // //         icon: Settings,
// // //     },
// // // ]

// // const MainLayout = () => {

// //     return (
// //         <div>
// //             <div>
// //                 <Sidebar>
// //                     <SidebarContent>
// //                         <SidebarGroup>
// //                             <SidebarGroupLabel>Application</SidebarGroupLabel>
// //                             <SidebarGroupContent>
// //                                 <SidebarMenu>
// //                                     <SidebarMenuItem>
// //                                         <SidebarMenuButton >
// //                                             <Outlet />
// //                                         </SidebarMenuButton>
// //                                     </SidebarMenuItem>
// //                                 </SidebarMenu>
// //                             </SidebarGroupContent>
// //                         </SidebarGroup>
// //                     </SidebarContent>
// //                 </Sidebar>
// //             </div>

// //         </div>
// //     );
// // };

// // export default MainLayout;



import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { RootState } from "@/redux/store";
import { adminPaths } from "@/routes/admin.routes";
import { customerPaths } from "@/routes/customer.routes";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";



const MainLayout = () => {
    const userRole = useSelector((state: RootState) => state.auth.user?.role);
    console.log(userRole);
    const pathsToRender = userRole === 'admin' ? adminPaths : userRole === 'customer' ? customerPaths : [];

    const navigate = useNavigate();

    return (
        <div className="flex h-screen">
            <Sidebar>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Application</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {pathsToRender.map((item) => (
                                    <SidebarMenuItem key={item.path}>
                                        <SidebarMenuButton onClick={() => navigate(`/${userRole}/${item.path}`)}>
                                            {item.name}
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
            <main className="flex-1 p-4">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;

