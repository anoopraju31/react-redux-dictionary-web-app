import { createSlice } from "@reduxjs/toolkit"

export const languageSlice = createSlice({
    name: "language",
    initialState: {
        value: 'en'
    },
    reducers: {
        inputLang: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { inputLang } = languageSlice.actions

export default languageSlice.reducer