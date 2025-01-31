import BicycleCard from "./product/BicycleCard";
import Slider from "./slider/Slider";



const Home = () => {

    return (
        <div>

            {/* Slider */}
            <div className="mt-2 p-4 ">
                <Slider />
            </div>

            {/* Bicycle Card Page */}
            <div className="lg:p-4 p-2">
                <BicycleCard />
            </div>

        </div>
    );
};

export default Home;
