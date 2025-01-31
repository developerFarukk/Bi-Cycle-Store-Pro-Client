import HookButton from "@/shared/HookButton";
import { Link } from "react-router";


const Error = () => {

    return (
        <div>
            <section className="justify-center flex items-center ">
                <div className="container  justify-center  mx-auto lg:flex lg:items-center ">
                    <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0 ">
                        <img
                            className="w-full max-w-lg lg:mx-auto rounded-lg"
                            src="https://webartdevelopers.com/blog/wp-content/uploads/2018/09/404-SVG-Animated-Page-Concept.png"
                            alt=""
                        />
                        <div className="flex justify-center lg:mt-10 md:mt-6 mt-4">
                            <Link to={"/"}>
                                <HookButton title="Go to Home"></HookButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Error;
