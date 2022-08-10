import { configureStore} from "@reduxjs/toolkit";
import cartReducer from './cartSlice'

export default configureStore({
    reducer:{
        cart:cartReducer,

    }
})

// Now ill use my cart slice and store everywhere in app so wrap in app.js