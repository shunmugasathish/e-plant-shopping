import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const item = action.payload;
        const existingItem = state.find(
        (cartItem) => cartItem.name === item.name);
        if(existingItem){
           existingItem = existingItem.quantity+1;
            state.push({...item,quantity:existingItem});
        }else{
            state.push({...state,quantity:1});
        }
    },
    removeItem: (state, action) => {
        return state.filter(e => {
            e.name !== action.payload.name;
        })
    },
    updateQuantity: (state, action) => {

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
