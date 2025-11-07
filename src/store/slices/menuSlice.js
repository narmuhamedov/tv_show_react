import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMenu = createAsyncThunk("menu/fetchMenu", async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
    const data = await response.json()
    return data.map((item) => ({
        id: item.id,
        title: item.title,
        body: item.body.slice(0, 100),
        price: Math.floor(Math.random() * 10) + 10,
    }))
})

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    reducers: [],
    extraReducers: (builder) => {
        builder
            .addCase(fetchMenu.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchMenu.fulfilled, (state, action) => {
                state.loading = false  // ✅ Исправлено: добавлен state.
                state.items = action.payload
            })
            .addCase(fetchMenu.rejected, (state) => {
                state.loading = false
                state.error = 'error loading'
            })
    }
})

export default menuSlice.reducer;