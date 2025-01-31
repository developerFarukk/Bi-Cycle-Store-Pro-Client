
import BicycleImage from "../assets/Bicycle.png";

const Ridenest = () => {

    return (
        <div className="flex gap-2 items-center text-center border-blue-300 border-2 p-2 rounded-lg w-fit">
            <img  src={BicycleImage} alt="Bicycle" height={20} width={30} />
            <div><h1 className="text-xl exo-uniquifier" >Ridenest</h1></div>
        </div>
    );
};

export default Ridenest;
