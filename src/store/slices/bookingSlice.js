import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
    name: 'booking',
    initialState: {
        list: [],
    },
    reducers: {
        addBooking: (state, action)=>{
            state.list.push(action.payload)
        }
    }
})
export const {addBooking} = bookingSlice.actions
export default bookingSlice.reducer;