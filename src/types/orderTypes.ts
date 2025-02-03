
export interface User {
    _id: string;
    name: string;
    email: string;
    role: string;
    status: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface Product {
    _id: string;
    name: string;
    brand: string;
    price: number;
    model: string;
    type: string;
    description: string;
    quantity: number;
    inStock: boolean;
    isDeleted: boolean;
    bicycleImage: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    status: string;
}

export interface TOrders {
    _id: string;
    user: User;
    productId: Product;
    quantity: number;
    totalPrice: number;
    status: string;
    paymentStatus: string;
    createdAt: string;
    updatedAt: string;
}