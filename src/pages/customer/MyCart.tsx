

// import { removeFromCart } from "@/redux/features/cart/cartSlice";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { RootState } from "@/redux/store";

// const MyCart = () => {
//     // Use useAppSelector to get the cart items from the Redux store
//     const cartItems = useAppSelector((state: RootState) => state.cart);
//     const dispatch = useAppDispatch();

//     console.log(cartItems.items);

//     return (
//         <div>
//             <section>
//                 <div className=" lg:ml-60 md:ml-24 ml-4 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
//                     <div className="border-2 p-4 rounded-lg">
//                         <header className="text-center">
//                             <h1 className="text-xl font-bold text-gray-900 sm:text-3xl underline">All Cart</h1>
//                         </header>

//                         <div className="mt-8">
//                             <ul className="space-y-4">

//                                 {
//                                     cartItems.items.map((item) => <>
//                                         <div key={item._id}>
//                                             <li className="flex items-center gap-4 border-2 p-2 rounded-md bg-fuchsia-100">
//                                                 <img
//                                                     src={item.bicycleImage}
//                                                     alt={item.name}
//                                                     className="size-16 rounded-sm object-cover"
//                                                 />

//                                                 <div>
//                                                     <h3 className="text-lg text-gray-900">{item.name}</h3>

//                                                     <dl className="mt-0.5 space-y-px  text-gray-600">
//                                                         <div>
//                                                             <dt className="inline font-medium ">Brand:</dt>
//                                                             <dd className="inline ml-2">{item.brand}</dd>
//                                                         </div>
//                                                         <div>
//                                                             <dt className="inline font-medium ">Model:</dt>
//                                                             <dd className="inline ml-2">{item.model}</dd>
//                                                         </div>
//                                                         <div>
//                                                             <dt className="inline font-medium ">Type:</dt>
//                                                             <dd className="inline ml-2">{item.type}</dd>
//                                                         </div>


//                                                     </dl>
//                                                 </div>

//                                                 <div className="flex flex-1 items-center justify-end gap-2">
//                                                     <form>
//                                                         <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>

//                                                         <input
//                                                             type="number"
//                                                             min="1"
//                                                             defaultValue="1"
//                                                             id="Line1Qty"
//                                                             className="h-8 w-12 rounded-sm border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-hidden [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
//                                                         />
//                                                     </form>

//                                                     <button onClick={() => dispatch(removeFromCart(item._id))} className="text-gray-600 transition hover:text-red-600">
//                                                         <span className="sr-only">Remove item</span>

//                                                         <svg
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             fill="none"
//                                                             viewBox="0 0 24 24"
//                                                             strokeWidth="1.5"
//                                                             stroke="currentColor"
//                                                             className="size-4"
//                                                         >
//                                                             <path
//                                                                 strokeLinecap="round"
//                                                                 strokeLinejoin="round"
//                                                                 d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
//                                                             />
//                                                         </svg>
//                                                     </button>
//                                                 </div>
//                                             </li>
//                                         </div>
//                                     </>)
//                                 }



//                             </ul>

//                             <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
//                                 <div className="w-screen max-w-lg space-y-4">
//                                     <dl className="space-y-0.5 text-sm text-gray-700">

//                                         <div className="flex justify-between">
//                                             <dt>Total Quantity</dt>
//                                             <dd>{cartItems.totalQuantity}</dd>
//                                         </div>

//                                         <div className="flex justify-between">
//                                             <dt>Discount</dt>
//                                             <dd>00 BDT</dd>
//                                         </div>

//                                         <div className="flex justify-between !text-base font-medium">
//                                             <dt>Total Price</dt>
//                                             <dd>{cartItems.totalPrice} BDT</dd>
//                                         </div>
//                                     </dl>



//                                     <div className="flex justify-end">
//                                         <a
//                                             href="#"
//                                             className="block rounded-sm bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
//                                         >
//                                             Checkout
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default MyCart;



import { removeFromCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

const MyCart = () => {
    // Use useAppSelector to get the cart items from the Redux store
    const cartItems = useAppSelector((state: RootState) => state.cart);
    const dispatch = useAppDispatch();

    console.log(cartItems.items);

    return (
        <div>
            <section>
                <div className="lg:ml-60 md:ml-24 ml-4 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="border-2 p-4 rounded-lg">
                        <header className="text-center">
                            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl underline">
                                All Cart
                            </h1>
                        </header>

                        <div className="mt-8">
                            {cartItems.items.length > 0 ? (
                                <ul className="space-y-4">
                                    {cartItems.items.map((item) => (
                                        <div key={item._id}>
                                            <li className="flex items-center gap-4 border-2 p-2 rounded-md bg-fuchsia-100">
                                                <img
                                                    src={item.bicycleImage}
                                                    alt={item.name}
                                                    className="size-16 rounded-sm object-cover"
                                                />

                                                <div>
                                                    <h3 className="text-lg text-gray-900">{item.name}</h3>

                                                    <dl className="mt-0.5 space-y-px  text-gray-600">
                                                        <div>
                                                            <dt className="inline font-medium ">Brand:</dt>
                                                            <dd className="inline ml-2">{item.brand}</dd>
                                                        </div>
                                                        <div>
                                                            <dt className="inline font-medium ">Model:</dt>
                                                            <dd className="inline ml-2">{item.model}</dd>
                                                        </div>
                                                        <div>
                                                            <dt className="inline font-medium ">Type:</dt>
                                                            <dd className="inline ml-2">{item.type}</dd>
                                                        </div>
                                                    </dl>
                                                </div>

                                                <div className="flex flex-1 items-center justify-end gap-2">
                                                    <form>
                                                        <label htmlFor="Line1Qty" className="sr-only">
                                                            {" "}
                                                            Quantity{" "}
                                                        </label>

                                                        <input
                                                            type="number"
                                                            min="1"
                                                            defaultValue="1"
                                                            id="Line1Qty"
                                                            className="h-8 w-12 rounded-sm border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-hidden [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                                        />
                                                    </form>

                                                    <button
                                                        onClick={() => dispatch(removeFromCart(item._id))}
                                                        className="text-gray-600 transition hover:text-red-600"
                                                    >
                                                        <span className="sr-only">Remove item</span>

                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            className="size-4"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </li>
                                        </div>
                                    ))}
                                </ul>
                            ) : (
                                <div className="text-center text-gray-600">
                                    <p>Products not found</p>
                                </div>
                            )}

                            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                                <div className="w-screen max-w-lg space-y-4">
                                    <dl className="space-y-0.5 text-sm text-gray-700">
                                        <div className="flex justify-between">
                                            <dt>Total Quantity</dt>
                                            <dd>{cartItems.totalQuantity}</dd>
                                        </div>

                                        <div className="flex justify-between">
                                            <dt>Discount</dt>
                                            <dd>00 BDT</dd>
                                        </div>

                                        <div className="flex justify-between !text-base font-medium">
                                            <dt>Total Price</dt>
                                            <dd>{cartItems.totalPrice} BDT</dd>
                                        </div>
                                    </dl>

                                    <div className="flex justify-end">
                                        <a
                                            href="#"
                                            className="block rounded-sm bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                                        >
                                            Checkout
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyCart;