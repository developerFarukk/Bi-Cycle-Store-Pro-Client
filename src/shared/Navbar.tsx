import { useState } from "react";
import { Link } from "react-router";
import HookButton from "./HookButton";
import Ridenest from "./Ridenest";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";




const Navbar = () => {

    const dispatch = useAppDispatch();
    const { token } = useAppSelector((state) => state.auth);
    // console.log(token);

    const handleLogout = () => {
        const toastId = toast.loading("Logging out...");

        //  logging out
        setTimeout(() => {
            dispatch(logout());
            toast.success("Logged out successfully", { id: toastId, duration: 1500 });
        }, 1500);
    };

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className="relative bg-white shadow dark:bg-gray-800">
                <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <Link to="/">
                            <Ridenest />
                        </Link>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                aria-label="toggle menu"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {!isOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 8h16M4 16h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div
                        className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen
                            ? "translate-x-0 opacity-100"
                            : "opacity-0 -translate-x-full"
                            }`}
                    >
                        <div className="flex flex-col md:flex-row md:mx-6">
                            <Link to="/"
                                className="my-2 hover-underline-animation text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                            >
                                Home
                            </Link>
                            <a
                                href="#BicycleCard"
                                className="my-2 hover-underline-animation text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                            >
                                All Products
                            </a>

                            {!token ? (
                                null
                            ) : (
                                <Link to="/dashboard"
                                    className="my-2 hover-underline-animation text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                                >
                                    Dashboard
                                </Link>
                            )}
                            <a
                                className="my-2 hover-underline-animation text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                                href="#"
                            >
                                About
                            </a>

                            {/* Login and Registration buttons for small and medium devices */}
                            <div className="flex flex-col space-y-2 md:hidden">
                                {!token ? (
                                    <>
                                        <Link to="/register">
                                            <HookButton title="Sign Up" />
                                        </Link>
                                        <Link to="/login">
                                            <HookButton title="Login" />
                                        </Link>
                                    </>
                                ) : (
                                    <Link onClick={handleLogout} to="/">
                                        <HookButton title="Log Out" />
                                    </Link>
                                )}
                            </div>
                        </div>

                        <div className="flex justify-center items-center md:block">

                            <Link to="/">
                                <div className=" flex justify-center items-center text-center">
                                    <div className="relative ">
                                        <div className="t-0 absolute left-3">
                                            <p className="flex h-1 w-1 items-center justify-center rounded-full bg-fuchsia-600 p-3 text-xs text-black">3</p>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="file: mt-4 h-5 w-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Login and Registration buttons for large devices */}
                    <div className="hidden md:flex gap-2">
                        {!token ? (
                            <>
                                <Link to="/register">
                                    <HookButton title="Sign Up" />
                                </Link>
                                <Link to="/login">
                                    <HookButton title="Login" />
                                </Link>
                            </>
                        ) : (
                            <Link onClick={handleLogout} to="/">
                                <HookButton title="Log Out" />
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
