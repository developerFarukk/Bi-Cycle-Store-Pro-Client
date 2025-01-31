import Navbar from "@/shared/Navbar";
import { Outlet } from "react-router";




const HomeRoot = () => {

    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
        </div>
    );
};

export default HomeRoot;
