

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BicycleBrand, BicycleType } from "@/types/productType";
import { z } from "zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useUpdateProductMutation } from "@/redux/features/bicycleProducts/bicycleManagmentApi";
// import { TResponse } from "@/types";

// Zod schema for product validation
const productSchema = z.object({
    name: z.string().min(1, "Name is required").optional(),
    description: z.string().min(1, "Description is required").optional(),
    brand: z.nativeEnum(BicycleBrand).optional(),
    price: z.number().min(1, "Price must be at least 1").optional(),
    model: z.string().min(1, "Model is required").optional(),
    type: z.nativeEnum(BicycleType).optional(),
    quantity: z.number().min(1, "Quantity must be at least 1").optional(),
    bicycleImage: z.string().url("Invalid URL").optional(),
});

interface TTitle {
    title: string;
    product: any; // Replace `any` with a proper type if possible
   
}

const ProductModalUpdate = ({ title, product }: TTitle) => {
    const [updateProduct] = useUpdateProductMutation();
    
    const [isDialogOpen, setIsDialogOpen] = useState(false);

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

    // Watch selected brand and type
    const selectedBrand = watch("brand");
    const selectedType = watch("type");

    // Pre-fill the form with product data when the modal opens
    useEffect(() => {
        if (isDialogOpen && product) {
            setValue("name", product.name);
            setValue("description", product.description);
            setValue("brand", product.brand);
            setValue("price", product.price);
            setValue("model", product.model);
            setValue("type", product.type);
            setValue("quantity", product.quantity);
            setValue("bicycleImage", product.bicycleImage);
        }
    }, [isDialogOpen, product, setValue]);

    // Handle form submission
    // const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    //     const toastId = toast.loading("Updating...");

    //     try {
    //         // Check if the product ID is valid
    //         if (!product?._id) {
    //             toast.error("Invalid product ID", { id: toastId });
    //             return;
    //         }

    //         // Convert price and quantity to numbers
    //         const productData = {
    //             ...data,
    //             price: Number(data.price),
    //             quantity: Number(data.quantity),
    //             _id: product._id,
    //         };

    //         // console.log("Submitting data:", productData); 

    //         // const res = (await updateProduct(productData)) as TResponse<any>;
    //         const res = await updateProduct({ id, body: { data: productData } }).unwrap();
    //         console.log(res);

    //         if (res.error) {
    //             toast.error(res.error.data.message, { id: toastId });
    //         } else {
    //             toast.success("Product updated successfully", { id: toastId });
    //             reset();
    //             setIsDialogOpen(false);
    //         }
    //     } catch (err) {
    //         toast.error("Something went wrong", { id: toastId });
    //     }
    // };


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Updating...");

        try {
            if (!product?._id) {
                toast.error("Invalid product ID", { id: toastId });
                return;
            }

            const productData = {
                ...data,
                price: Number(data.price),
                quantity: Number(data.quantity),
            };
            

            // Correct way to call the mutation:
            const res = await updateProduct({ bicycleId: product._id, body: productData }).unwrap(); 

            console.log(res);

            if (res.error) {
                toast.error(res.error.data.message, { id: toastId });
            } else {
                toast.success("Product updated successfully", { id: toastId });
                reset();
                setIsDialogOpen(false);
            }
        } catch (err) {
            toast.error("Something went wrong", { id: toastId });
        }
    };

    return (
        <div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline">{title}</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[90%] md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
                    <DialogHeader>
                        <DialogTitle className="text-center">Update Bicycle Product</DialogTitle>
                    </DialogHeader>

                    <div className="lg:ml-0 md:ml-0 justify-center flex">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Input Name */}
                            <div className="p-1">
                                <Label>Product Name</Label>
                                <Input
                                    type="text"
                                    className="w-full md:w-[500px]"
                                    placeholder="Input product name"
                                    {...register("name")}
                                />
                                {errors.name && (
                                    <Label className="text-red-700 text-sm">
                                        {errors.name.message?.toString()}
                                    </Label>
                                )}
                            </div>

                            {/* Description */}
                            <div className="p-1">
                                <Label>Description</Label>
                                <Textarea
                                    placeholder="Input product description"
                                    className="w-full md:w-[500px]"
                                    {...register("description")}
                                />
                                {errors.description && (
                                    <Label className="text-red-700 text-sm">
                                        {errors.description.message?.toString()}
                                    </Label>
                                )}
                            </div>

                            {/* Select Bicycle Brand */}
                            <div className="p-1 mt-2">
                                <Label className="p-1">Brand</Label>
                                <Select
                                    onValueChange={(value: BicycleBrand) => setValue("brand", value)}
                                    value={selectedBrand}
                                    required
                                >
                                    <SelectTrigger className="w-full md:w-[500px]">
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
                                    className="w-full md:w-[500px]"
                                    placeholder="Input product price"
                                    {...register("price", { valueAsNumber: true })}
                                />
                                {errors.price && (
                                    <Label className="text-red-700 text-sm">
                                        {errors.price.message?.toString()}
                                    </Label>
                                )}
                            </div>

                            {/* Input Product Model */}
                            <div className="p-1">
                                <Label>Product Model</Label>
                                <Input
                                    type="text"
                                    className="w-full md:w-[500px]"
                                    placeholder="Input product model"
                                    {...register("model")}
                                />
                                {errors.model && (
                                    <Label className="text-red-700 text-sm">
                                        {errors.model.message?.toString()}
                                    </Label>
                                )}
                            </div>

                            {/* Select Product Type */}
                            <div className="p-1 mt-2">
                                <Label className="p-1">Product Type</Label>
                                <Select
                                    onValueChange={(value: BicycleType) => setValue("type", value)}
                                    value={selectedType}
                                    required
                                >
                                    <SelectTrigger className="w-full md:w-[500px]">
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
                                    className="w-full md:w-[500px]"
                                    placeholder="Input product quantity"
                                    {...register("quantity", { valueAsNumber: true })}
                                />
                                {errors.quantity && (
                                    <Label className="text-red-700 text-sm">
                                        {errors.quantity.message?.toString()}
                                    </Label>
                                )}
                            </div>

                            {/* Input Product Image Link */}
                            <div className="p-1">
                                <Label>Product Image Link</Label>
                                <Input
                                    type="text"
                                    className="w-full md:w-[500px]"
                                    placeholder="Input product image link"
                                    {...register("bicycleImage")}
                                />
                                {errors.bicycleImage && (
                                    <Label className="text-red-700 text-sm">
                                        {errors.bicycleImage.message?.toString()}
                                    </Label>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="p-1 mt-2">
                                <Button className="w-full md:w-[500px]" type="submit">
                                    Update Product
                                </Button>
                            </div>
                        </form>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ProductModalUpdate;


