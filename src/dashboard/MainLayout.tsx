

import {
    Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu,
    SidebarMenuButton, SidebarMenuItem,
} from "@/components/ui/sidebar";

import { RootState } from "@/redux/store";
import { adminPaths } from "@/routes/admin.routes";
import { customerPaths } from "@/routes/customer.routes";
import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";


const MainLayout = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const userRole = user?.role;
    const email = user?.userEmail


    const pathsToRender = userRole === 'admin' ? adminPaths : userRole === 'customer' ? customerPaths : [];
    // console.log(pathsToRender);
    

    const navigate = useNavigate();

    return (
        <div className="flex h-screen justify-center">
            <Sidebar>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel className="mt-2 mb-6 text-2xl text-center flex justify-center items-center hover:bg-blue-100">
                            <div className="p-2 ">
                                <Link to="/">DASHBOARD</Link>
                                <div className="text-black text-sm underline">{email}</div>
                            </div>
                        </SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {pathsToRender.map((item) => (
                                    <SidebarMenuItem key={item.path}>
                                        <SidebarMenuButton onClick={() => navigate(`/${userRole}/${item.path}`)}>
                                            <div className="text-lg flex items-center gap-2">
                                                <div>{item.icons}</div>
                                                <div>
                                                    {item.name}
                                                </div>
                                            </div>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
            <main className=" p-4 flex">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;

