import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import HookButton from "@/shared/HookButton";
import { Link } from "react-router";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    email: string;
    password: string;
};

const LoginAuth = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        // Handle form submission here
    };

    return (
        <div className="justify-center items-center flex mt-10">
            <Card className="w-[350px]">
                <CardHeader className="flex justify-center items-center text-2xl">
                    <CardTitle>Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">

                                <label htmlFor="email">Email</label>
                                <Input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: "Please enter a valid email address"
                                        }
                                    })}
                                    type="email"
                                    id="email"
                                    placeholder="Enter user email"
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                                <label htmlFor="password">Password</label>
                                <Input
                                    {...register("password", { required: "Password is required" })}
                                    type="password"
                                    id="password"
                                    placeholder="Enter password"
                                />
                                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                            </div>
                        </div>
                        <div className="flex justify-center mt-4">
                            <Input type="submit" value="Submit" className="bg-blue-500 text-white p-2 rounded" />
                        </div>
                    </form>
                </CardContent>
                <div className="flex justify-center p-2 mb-2">
                    <h2>I have no Account. go to <Link to="/register" className="text-blue-600 font-semibold" >Register</Link> </h2>
                </div>
                <CardFooter className="flex justify-end">
                    <Link to={"/"}><HookButton title="Back to home" /></Link>
                </CardFooter>
            </Card>
        </div>
    );
};

export default LoginAuth;
