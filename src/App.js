import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Dictionary } from './containers/import'
import { wordMeaning } from './features/meaning/meaning'
import { storeData } from './util'
import './App.css'

const App = () => {
    const word = useSelector(state => state.word.value)
	const language = useSelector(state => state.language.value)
	const dispatch = useDispatch()

	useEffect(() => {
		const getData = async () => {
			dispatch(wordMeaning([]))

			if (word !== '') {
				const url = `https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`
				
				axios.get(url)
				.then(data => {
					dispatch(wordMeaning(data.data))
					storeData(word, language)	
				})
			}
		}

		getData()
	}, [word, language, dispatch])
	
	return (
    	<div className="dictionary-app">
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/meaning' element={ <Dictionary />} />
				</Routes>
      		</Router>
		</div>
  	)
}

export default App