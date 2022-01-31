import { createSlice } from "@reduxjs/toolkit"

export const wordSlice = createSlice({
    name: "word",
    initialState: {
        value: ''
    },
    reducers: {
        inputWord: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { inputWord } = wordSlice.actions

export default wordSlice.reducer