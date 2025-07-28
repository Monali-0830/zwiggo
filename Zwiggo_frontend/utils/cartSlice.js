import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItems: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find(
                (i) => i.card.info.id === item.card.info.id
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }
        },
        removeItems: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.items.find(
                (i) => i.card.info.id === itemId
            );

            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    // Remove completely if quantity is 1
                    state.items = state.items.filter(
                        (i) => i.card.info.id !== itemId
                    );
                }
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
