import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        products :[], // this will have all the products 
        total : 0,
        cartIconQuantity :0  // for the cart icon not used for sate 
    },
    reducers:{

        // used in product[id]
        addProduct:(state,action)=>{
                                    // pizza details will be passed as payload (the whole product)
            state.products.push(action.payload)
            state.cartIconQuantity+= 1
            state.total += action.payload.price*action.payload.quantity
        },
        // For when we have made our payments
        reset:(state) =>{
            state = initialState
        }

    }


});

export const {addProduct,reset} = cartSlice.actions;
export default cartSlice.reducer;