

export interface User {
    _id: string;
    name: string;
    email: string;
    role: string;
    status: string;
    isDeleted: boolean;
    address: string;
    mobile: string;
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
    status: string;
    isDeleted: boolean;
    bicycleImage: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface Transaction {
    id: string;
    transactionStatus: null | string;
    bank_status: string;
    date_time: string;
    method: string;
    sp_code: string;
    sp_message: string;
}

export interface OrderProduct {
    product: Product;
    quantity: number;
}

export interface TOrders {
    _id: string;
    user: User;
    products: OrderProduct[];
    totalPrice: number;
    status: string;
    transaction: Transaction;
    createdAt: string;
    updatedAt: string;
}