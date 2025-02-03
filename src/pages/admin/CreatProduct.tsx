// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */




// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import { useAddProductMutation } from "@/redux/features/bicycleProducts/bicycleManagmentApi";
// import { TResponse } from "@/types";
// import { BicycleBrand, BicycleType } from "@/types/productType";
// import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
// import { toast } from "sonner";

// const CreatProduct = () => {
//     const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
//         mode: "onBlur",
//     });

//     const [createProduct] = useAddProductMutation();

//     const onSubmit: SubmitHandler<FieldValues> = async (data) => {
//         console.log(data);

//         const toastId = toast.loading('Creating...');

//         try {
//             const res = (await createProduct(data)) as TResponse<any>;
//             console.log(res);
//             if (res.error) {
//                 toast.error(res.error.data.message, { id: toastId });
//             } else {
//                 toast.success('Product created Successfully', { id: toastId });
//             }
//         } catch (err) {
//             toast.error('Something went wrong', { id: toastId });
//         }
//     };

//     const selectedBrand = watch("brand");
//     const selectedType = watch("type");

//     return (
//         <div className="lg:ml-48 md:ml-24 ml-4">
//             <form onSubmit={handleSubmit(onSubmit)}>

//                 {/* Input Name */}
//                 <div className="p-1">
//                     <Label>Product Name</Label>
//                     <Input type="text" className="w-[500px]" placeholder="Input Product name" {...register("name", { required: "Name is required" })} />
//                     <div className="flex justify-end mt-1">
//                         <Label className={errors.name ? "text-red-700 text-sm" : "hidden"}>{errors.name?.message}</Label>
//                     </div>
//                 </div>

//                 {/* Description */}
//                 <div className="p-1">
//                     <Label>Description</Label>
//                     <Textarea typeof="text" placeholder="Input product description" {...register("description", { required: "Description is Required" })} />
//                     <div className="flex justify-end mt-1">
//                         <Label className={errors.description ? "text-red-700 text-sm" : "hidden"}>{errors.description?.message}</Label>
//                     </div>
//                 </div>

//                 {/* Select Bicycle Brand */}
//                 <div className="p-1 mt-2">
//                     <Label className="p-1">Brand</Label>
//                     <Select onValueChange={(value: BicycleBrand) => setValue("brand", value)} value={selectedBrand} required>
//                         <SelectTrigger className="">
//                             <SelectValue placeholder="Select Brand" />
//                         </SelectTrigger>
//                         <SelectContent>
//                             <SelectGroup>
//                                 <SelectLabel>Select Brand</SelectLabel>
//                                 {Object.values(BicycleBrand).map((brand) => (
//                                     <SelectItem key={brand} value={brand}>
//                                         {brand}
//                                     </SelectItem>
//                                 ))}
//                             </SelectGroup>
//                         </SelectContent>
//                     </Select>
//                 </div>

//                 {/* Input products Price */}
//                 <div className="p-1">
//                     <Label>Product price</Label>
//                     <Input
//                         type="number"
//                         defaultValue={1}
//                         className="w-[500px]"
//                         placeholder="Input Product price"
//                         {...register("price", {
//                             required: "Price is required",
//                             min: 1,
//                         })}
//                     />
//                     <div className="flex justify-end mt-1">
//                         <Label className={errors.price ? "text-red-700 text-sm" : "hidden"}>{errors.price?.message}</Label>
//                     </div>
//                 </div>

//                 {/* Input Model */}
//                 <div className="p-1">
//                     <Label>Product Model</Label>
//                     <Input type="text" className="w-[500px]" placeholder="Input product model" {...register("model", { required: "model is required" })} />
//                     <div className="flex justify-end mt-1">
//                         <Label className={errors.model ? "text-red-700 text-sm" : "hidden"}>{errors.model?.message}</Label>
//                     </div>
//                 </div>

//                 {/* Select Type */}
//                 <div className="p-1 mt-2">
//                     <Label className="p-1">Product Type</Label>
//                     <Select onValueChange={(value: BicycleType) => setValue("type", value)} value={selectedType} required>
//                         <SelectTrigger className="">
//                             <SelectValue placeholder="Select Type" />
//                         </SelectTrigger>
//                         <SelectContent>
//                             <SelectGroup>
//                                 <SelectLabel>Select Brand</SelectLabel>
//                                 {Object.values(BicycleType).map((brand) => (
//                                     <SelectItem key={brand} value={brand}>
//                                         {brand}
//                                     </SelectItem>
//                                 ))}
//                             </SelectGroup>
//                         </SelectContent>
//                     </Select>
//                 </div>

//                 {/* Input products Quantity */}
//                 <div className="p-1">
//                     <Label>Product Quantity</Label>
//                     <Input
//                         type="number"
//                         defaultValue={1}
//                         className="w-[500px]"
//                         placeholder="Input Product Quantity"
//                         {...register("quantity", {
//                             required: "Quantity is required",
//                             min: 1,
//                         })}
//                     />
//                     <div className="flex justify-end mt-1">
//                         <Label className={errors.quantity ? "text-red-700 text-sm" : "hidden"}>{errors.quantity?.message}</Label>
//                     </div>
//                 </div>

//                 {/* Input Image Link */}
//                 <div className="p-1">
//                     <Label>Product Image Link</Label>
//                     <Input type="text" className="w-[500px]" placeholder="Input product image link" {...register("bicycleImage")} />
//                 </div>


//                 {/* Submit */}
//                 <div className="p-1 mt-2">
//                     <Button className="w-full" type="submit">Submit</Button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default CreatProduct;




/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useAddProductMutation } from "@/redux/features/bicycleProducts/bicycleManagmentApi";
import { TResponse } from "@/types";
import { BicycleBrand, BicycleType } from "@/types/productType";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the schema for validation
const productSchema = z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().min(1, "Description is required"),
    brand: z.nativeEnum(BicycleBrand),
    price: z.number().min(1, "Price must be at least 1"),
    model: z.string().min(1, "Model is required"),
    type: z.nativeEnum(BicycleType),
    quantity: z.number().min(1, "Quantity must be at least 1"),
    bicycleImage: z.string().url("Invalid URL"),
});

const CreatProduct = () => {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(productSchema),
        mode: "onBlur",
    });

    const [createProduct] = useAddProductMutation();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading('Creating...');

        try {
            // Convert price and quantity to numbers
            const productData = {
                ...data,
                price: Number(data.price),
                quantity: Number(data.quantity),
            };

            const res = (await createProduct(productData)) as TResponse<any>;
            // console.log(res);
            if (res.error) {
                toast.error(res.error.data.message, { id: toastId });
            } else {
                toast.success('Product created Successfully', { id: toastId });
            }
            reset()
        } catch (err) {
            toast.error('Something went wrong', { id: toastId });
        }
    };

    const selectedBrand = watch("brand");
    const selectedType = watch("type");

    return (
        <div className="lg:ml-48 md:ml-24 ml-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Input Name */}
                <div className="p-1">
                    <Label>Product Name</Label>
                    <Input
                        type="text"
                        className="w-[500px]"
                        placeholder="Input Product name"
                        {...register("name")}
                    />
                    <div className="flex justify-end mt-1">
                        <Label className={errors.name ? "text-red-700 text-sm" : "hidden"}>
                            {errors.name?.message?.toString()}
                        </Label>
                    </div>
                </div>

                {/* Description */}
                <div className="p-1">
                    <Label>Description</Label>
                    <Textarea
                        placeholder="Input product description"
                        {...register("description")}
                    />
                    <div className="flex justify-end mt-1">
                        <Label className={errors.description ? "text-red-700 text-sm" : "hidden"}>
                            {errors.description?.message?.toString()}
                        </Label>
                    </div>
                </div>

                {/* Select Bicycle Brand */}
                <div className="p-1 mt-2">
                    <Label className="p-1">Brand</Label>
                    <Select
                        onValueChange={(value: BicycleBrand) => setValue("brand", value)}
                        value={selectedBrand}
                        required
                    >
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

                {/* Input Product Price */}
                <div className="p-1">
                    <Label>Product Price</Label>
                    <Input
                        type="number"
                        defaultValue={1}
                        className="w-[500px]"
                        placeholder="Input Product price"
                        {...register("price", {
                            valueAsNumber: true, // Ensure the value is parsed as a number
                        })}
                    />
                    <div className="flex justify-end mt-1">
                        <Label className={errors.price ? "text-red-700 text-sm" : "hidden"}>
                            {errors.price?.message?.toString()}
                        </Label>
                    </div>
                </div>

                {/* Input Product Model */}
                <div className="p-1">
                    <Label>Product Model</Label>
                    <Input
                        type="text"
                        className="w-[500px]"
                        placeholder="Input product model"
                        {...register("model")}
                    />
                    <div className="flex justify-end mt-1">
                        <Label className={errors.model ? "text-red-700 text-sm" : "hidden"}>
                            {errors.model?.message?.toString()}
                        </Label>
                    </div>
                </div>

                {/* Select Product Type */}
                <div className="p-1 mt-2">
                    <Label className="p-1">Product Type</Label>
                    <Select
                        onValueChange={(value: BicycleType) => setValue("type", value)}
                        value={selectedType}
                        required
                    >
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Select Type</SelectLabel>
                                {Object.values(BicycleType).map((type) => (
                                    <SelectItem key={type} value={type}>
                                        {type}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                {/* Input Product Quantity */}
                <div className="p-1">
                    <Label>Product Quantity</Label>
                    <Input
                        type="number"
                        defaultValue={1}
                        className="w-[500px]"
                        placeholder="Input Product Quantity"
                        {...register("quantity", {
                            valueAsNumber: true, // Ensure the value is parsed as a number
                        })}
                    />
                    <div className="flex justify-end mt-1">
                        <Label className={errors.quantity ? "text-red-700 text-sm" : "hidden"}>
                            {errors.quantity?.message?.toString()}
                        </Label>
                    </div>
                </div>

                {/* Input Product Image Link */}
                <div className="p-1">
                    <Label>Product Image Link</Label>
                    <Input
                        type="text"
                        className="w-[500px]"
                        placeholder="Input product image link"
                        {...register("bicycleImage")}
                    />
                    <div className="flex justify-end mt-1">
                        <Label className={errors.bicycleImage ? "text-red-700 text-sm" : "hidden"}>
                            {errors.bicycleImage?.message?.toString()}
                        </Label>
                    </div>
                </div>

                {/* Submit */}
                <div className="p-1 mt-2">
                    <Button className="w-full" type="submit">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CreatProduct;