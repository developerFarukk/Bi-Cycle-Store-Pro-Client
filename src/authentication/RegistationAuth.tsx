import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import HookButton from "@/shared/HookButton";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router";

type Inputs = {
    name: string;
    email: string;
    password: string;
};

const RegistrationAuth = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        // Handle form submission here
    };

    return (
        <div className="flex justify-center items-center mt-10">
            <Card className="w-[350px]">
                <CardHeader className="flex justify-center items-center text-2xl">
                    <CardTitle>Sign Up</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <label htmlFor="name">User Name</label>
                                <Input
                                    type="text"
                                    id="name"
                                    {...register("name", { required: "Username is required" })}
                                    placeholder="Enter user name"
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

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
                <CardFooter className="flex justify-between">
                    <Link to="/" className="text-blue-500"><HookButton title="Back" /></Link>
                    <Link to="/" className="text-blue-500"><HookButton title="Submit" /></Link>
                </CardFooter>
            </Card>
        </div>
    );
};

export default RegistrationAuth;
