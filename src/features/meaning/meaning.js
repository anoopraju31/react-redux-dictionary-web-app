import { createSlice } from "@reduxjs/toolkit"

export const meaningSlice = createSlice({
    name: "meaning",
    initialState: {
        value: []
    },
    reducers: {
        wordMeaning: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { wordMeaning } = meaningSlice.actions

export default meaningSlice.reducer