import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[
        {id: 1, title: "iphone 14", category: "electronics"},
        {id: 2, title: "Nike Air Max", category: "clothes"},
        {id: 3, title: "Samsung Tv", category: "electronics"},
        {id: 4, title: "Adidas Hoodie", category: "clothes"},
        {id: 5, title: "Shaurma with meat", category: "food"},
    ],
    filter: "all",
};


const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
        setFilter(state, action){
            state.filter = action.payload;
        },
    },
});

export const {setFilter} = productsSlice.actions;
export default productsSlice.reducer;


