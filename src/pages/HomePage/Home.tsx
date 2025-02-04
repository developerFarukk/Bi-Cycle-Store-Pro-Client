import BicycleNewsLetter from "./BicycleNewsLetter";
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

        </div>
    );
};

export default Home;
