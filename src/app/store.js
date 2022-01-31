import { configureStore } from '@reduxjs/toolkit'
import wordReducer from '../features/word/word'
import meaningReducer from '../features/meaning/meaning'
import languageReducer from '../features/language/language'

export const store = configureStore({
	reducer: {
		word: wordReducer,
		meaning: meaningReducer,
		language: languageReducer,
  	},
})
