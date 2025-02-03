
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Textarea } from "@/components/ui/textarea";
// import { BicycleBrand } from "@/types/product";

// import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"

// const CreatProduct = () => {

//     const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
//         // defaultValues: {
//         //     dueDate: new Date(),
//         // },
//         mode: "onBlur",
//     })

//     const onSubmit: SubmitHandler<FieldValues> = (data) => {
//         // dispatch(addTask(data as ITask))
//         console.log(data);

//     };

//     const selectedBrand = watch("priority");
//     // const selectedDate = watch("dueDate");

//     // const handleDateChange = (date: Date | undefined) => {
//     //     if (date) {
//     //         setValue("dueDate", date);
//     //     }
//     // };

//     return (
//         <div className="lg:ml-48 md:ml-24 ml-4">
//             {/* Form Page */}
//             <form onSubmit={handleSubmit(onSubmit)}>

//                 {/* Inpute Name */}
//                 <div className="p-1">
//                     <Label className="">Name</Label>
//                     <Input className="w-[500px]" placeholder="Inpute Product name" {...register("name", { required: "Name is required" })} />
//                     <div className="flex justify-end mt-1">
//                         <Label className={errors.name ? "text-red-700 text-sm" : "hidden"}>{errors.name?.message}</Label>
//                     </div>
//                 </div>

//                 {/* Description */}
//                 <div className="p-1">
//                     <Label>Description</Label>
//                     <Textarea placeholder="Inpute product description"  {...register("description", { required: "Description is Required" })} />
//                     <div className="flex justify-end mt-1">
//                         <Label className={errors.description ? "text-red-700 text-sm" : "hidden"}>{errors.description?.message}</Label>
//                     </div>
//                 </div>

//                 {/* Select Bicycle Brand */}
//                 <div className="p-1 mt-2">
//                     <Label className="p-1">Brand</Label>
//                     <Select onValueChange={(value: BicycleBrand) => setValue("Brand", value)} value={selectedBrand} required >
//                         <SelectTrigger className="">
//                             <SelectValue placeholder="Select Brand" />
//                         </SelectTrigger>
//                         <SelectContent>
//                             <SelectGroup  >
//                                 <SelectLabel>Select Brand</SelectLabel>
//                                 <SelectItem value="Duranta">Duranta</SelectItem>
//                                 <SelectItem value="Duranta">Duranta</SelectItem>

//                             </SelectGroup>
//                         </SelectContent>
//                     </Select>
//                 </div>

//                 {/* Submit */}
//                 <div className="p-1 mt-2">
//                     <Button className="w-full" type="submit" >Submit</Button>
//                 </div>

//             </form>
//         </div>
//     );
// };

// export default CreatProduct;



import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { BicycleBrand } from "@/types/product";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

const CreatProduct = () => {
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        mode: "onBlur",
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
    };

    const selectedBrand = watch("brand");

    return (
        <div className="lg:ml-48 md:ml-24 ml-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Input Name */}
                <div className="p-1">
                    <Label>Name</Label>
                    <Input type="text" className="w-[500px]" placeholder="Input Product name" {...register("name", { required: "Name is required" })} />
                    <div className="flex justify-end mt-1">
                        <Label className={errors.name ? "text-red-700 text-sm" : "hidden"}>{errors.name?.message}</Label>
                    </div>
                </div>

                {/* Description */}
                <div className="p-1">
                    <Label>Description</Label>
                    <Textarea typeof="text" placeholder="Input product description" {...register("description", { required: "Description is Required" })} />
                    <div className="flex justify-end mt-1">
                        <Label className={errors.description ? "text-red-700 text-sm" : "hidden"}>{errors.description?.message}</Label>
                    </div>
                </div>

                {/* Select Bicycle Brand */}
                <div className="p-1 mt-2">
                    <Label className="p-1">Brand</Label>
                    <Select onValueChange={(value: BicycleBrand) => setValue("brand", value)} value={selectedBrand} required>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select Brand" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Select Brand</SelectLabel>
                                {Object.values(BicycleBrand).map((brand) => (
                                    <SelectItem key={brand} value={brand}>
                                        {brand}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                {/* Input products Price */}
                <div className="p-1">
                    <Label>Product price</Label>
                    {/* <Input type="number" defaultValue={1} className="w-[500px]" placeholder="Input Product price" {...register("price", { required: "price is required" })} /> */}
                    <Input
                        type="number"
                        defaultValue={1}
                        className="w-[500px]"
                        placeholder="Input Product price"
                        {...register("price", {
                            required: "Price is required",
                            min: 1, 
                            validate: (value) => {
                                if (value < 1) {
                                    return "Price cannot be negative";
                                }
                                return true; 
                            },
                        })}
                    />
                    <div className="flex justify-end mt-1">
                        <Label className={errors.price ? "text-red-700 text-sm" : "hidden"}>{errors.price?.message}</Label>
                    </div>
                </div>

                {/* Submit */}
                <div className="p-1 mt-2">
                    <Button className="w-full" type="submit">Submit</Button>
                </div>
            </form>
        </div>
    );
};

export default CreatProduct;