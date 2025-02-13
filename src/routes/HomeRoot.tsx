import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import { Outlet } from "react-router";




const HomeRoot = () => {

    return (
        <div>
            <Navbar />
            <div className="min-h-screen mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default HomeRoot;
