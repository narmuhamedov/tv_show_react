import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState:{
        mode: "light", // light/dark
    },
    reducers: {
        toogleTheme: (state)=>{
            state.mode = state.mode === "light" ? "dark": "light";
        },
        setTheme: (state, action) => {
            state.mode = action.payload
        }
    },
});

export const { toogleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;