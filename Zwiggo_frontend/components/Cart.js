import React from 'react';
import Itemlist from './Itemlist';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
                {cartItems.length > 0 && (
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
                        onClick={handleClearCart}
                    >
                        Clear Cart
                    </button>
                )}
            </div>

            {cartItems.length === 0 ? (
                <div className="text-center mt-20 text-gray-600 text-lg font-medium">
                    🛒 Your cart is empty. Add some delicious items!
                </div>
            ) : (
                <div className="bg-white p-4 rounded-xl shadow-md">
                    <Itemlist items={cartItems} />
                </div>
            )}
        </div>
    );
};

export default Cart;
