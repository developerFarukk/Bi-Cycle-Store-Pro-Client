
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TCartItem = {
    _id: string;
    product: string;
    bicycleImage: string | undefined;
    brand: string;
    description: string;
    name: string;
    price: number;
    model: string;
    quantity: number;
    status: string;
    type: string;
};


interface TCartState {
    items: TCartItem[];
    totalQuantity: number;
    totalPrice: number;
    userId: string | null;
}

const initialState: TCartState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    userId: null
};

const cartSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<TCartItem>) {
            // console.log({ state: state.items });
            const existingItem = state.items.find(
                (item) => item._id === action.payload._id
            );
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
            state.totalQuantity += action.payload.quantity;
            state.totalPrice += action.payload.price * action.payload.quantity;
        },
        removeFromCart(state, action: PayloadAction<string>) {
            const itemId = action.payload;
            const existingItem = state.items.find((item) => item._id === itemId);
            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.totalPrice -= existingItem.price * existingItem.quantity;
                state.items = state.items.filter((item) => item._id !== itemId);
            }
        },
        updateQuantity(
            state,
            action: PayloadAction<{ id: string; quantity: number }>
        ) {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find((item) => item._id === id);
            if (existingItem && quantity > 0) {
                const quantityDifference = quantity - existingItem.quantity;
                existingItem.quantity = quantity;
                state.totalQuantity += quantityDifference;
                state.totalPrice += quantityDifference * existingItem.price;
            }
        },
        clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        },
        setUserId(state, action: PayloadAction<string>) {
            state.userId = action.payload;
        },
        setCartItems(state, action: PayloadAction<TCartItem[]>) {
            state.items = action.payload;
            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
            state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        },

    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, setUserId, setCartItems } = cartSlice.actions;

export default cartSlice.reducer;
