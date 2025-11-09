import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload; 
        let existingItem = state.items.find(
        (cartItem) => cartItem.name === name);
        if(existingItem){
           existingItem.quantity+1;
        }else{
            state.items.push({name, image, cost,quantity:1});
        }
    },
    removeItem: (state, action) => {
        console.log(state.items,action);
        state.items = state.items.filter(e => {
            return e.name !== action.payload.name;
        });
    },
    updateQuantity: (state, action) => {

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
