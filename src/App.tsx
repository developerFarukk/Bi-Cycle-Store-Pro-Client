import HookButton from "./shared/HookButton";



const App = () => {

    return (
        <div>
            <div className="text-4xl text-blue-500 "> The Component is Start </div>
            <h1 className="ext-3xl font-bold underline">
                Hello world!
            </h1>
            <HookButton title="Go to Home"></HookButton>
        </div>
    );
};

export default App;
