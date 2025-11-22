import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: 'language',
    initialState: {
        lang: "ru", //ru / en
    },
    reducers: {
        switchLanguage: (state)=>{
            state.lang = state.lang === 'ru' ? 'en': 'ru';
        },

        setLanguage: (state, action)=>{
            state.lang = action.payload
        }
    }
})

export const {switchLanguage, setLanguage} = languageSlice.actions
export default languageSlice.reducer;