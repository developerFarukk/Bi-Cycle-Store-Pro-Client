import AboutPage from "./AboutPage";
import BicycleNewsLetter from "./BicycleNewsLetter";
import Contact from "./Contact";
import BicycleCard from "./product/BicycleCard";
import Slider from "./slider/Slider";



const Home = () => {

    return (
        <div>

            {/* Slider */}
            <div className="mt-24 p-4">
                <Slider />
            </div>

            {/* Bicycle Card Page */}
            <div id="BicycleCard" className="lg:p-4 p-2 ">
                <BicycleCard />
            </div>

            {/* News Letter */}
            <div>
                <BicycleNewsLetter />
            </div>

            {/* About Page */}
            <div id="about">
                <AboutPage />
            </div>

            {/* Contact page */}
            <div id="contact">
                <Contact />
            </div>

        </div>
    );
};

export default Home;
