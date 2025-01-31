import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import { Outlet } from "react-router";




const HomeRoot = () => {

    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default HomeRoot;
