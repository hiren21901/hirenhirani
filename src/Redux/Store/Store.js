import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "../CreateSlice/cartSlice";


const Store=configureStore({
    reducer:{
        cart:cartReducer,
    }
})

export default Store;