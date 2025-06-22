import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// Load cart state from localStorage
const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem("cart");
        if (serializedState === null) return undefined;
        return {
            cart: {
                items: JSON.parse(serializedState),
            }
        };
    } catch (e) {
        console.warn("Could not load cart from localStorage", e);
        return undefined;
    }
};

// Save cart state to localStorage
const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state.cart.items);
        localStorage.setItem("cart", serializedState);
    } catch (e) {
        console.warn("Could not save cart to localStorage", e);
    }
};

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState: loadFromLocalStorage(), 
    devTools: process.env.NODE_ENV !== 'production',// 👈 Load the cart if available
});

// 👇 Subscribe to store updates and persist the cart
appStore.subscribe(() => {
    saveToLocalStorage(appStore.getState());
});

export default appStore;
