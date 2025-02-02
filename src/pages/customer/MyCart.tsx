

import { useAppSelector } from "@/redux/hooks"; 
import { RootState } from "@/redux/store";

const MyCart = () => {
    // Use useAppSelector to get the cart items from the Redux store
    const cartItems = useAppSelector((state: RootState) => state.cart); 

    console.log(cartItems); 

    return (
        <div>
            <div>The Component is Start</div>
            
        </div>
    );
};

export default MyCart;