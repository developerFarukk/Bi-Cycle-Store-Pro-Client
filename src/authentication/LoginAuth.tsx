import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import HookButton from "@/shared/HookButton";
import { Link } from "react-router";



const LoginAuth = () => {

    return (
        <div className="justify-center items-center flex mt-10">
            <Card className="w-[350px]">
                <CardHeader className="flex justify-center items-center text-2xl">
                    <CardTitle>Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <label htmlFor="name">User Id</label>
                                <Input type="email" id="email" placeholder="Inpute user Id or email" />

                                <label htmlFor="Password">Password</label>
                                <Input type="password" id="password" placeholder="Inpute password" />
                            </div>
                            {/* <div className="flex flex-col space-y-1.5">
                                <label htmlFor="framework">Framework</label>
                                <Select>
                                    <SelectTrigger id="framework">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="next">Next.js</SelectItem>
                                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                        <SelectItem value="astro">Astro</SelectItem>
                                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div> */}
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Link to={"/"}><HookButton title="Back" /></Link>
                    <Link to={"/"}><HookButton title="Submit" /></Link>
                </CardFooter>
            </Card>
        </div>
    );
};

export default LoginAuth;
