import { FormControl, InputLabel, Select, MenuItem, ThemeProvider } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import languageCategories from './languageCategory'
import { inputLang } from '../../features/language/language'
import theme from './style'
import './languageSelect.css'

const LanguageSelect = () => {
	const dispatch = useDispatch()
	const language = useSelector(state => state.language.value)

	return (
		<div className="language">
			<ThemeProvider theme={theme} >
				<FormControl  variant="standard">
					<InputLabel id="language-select-label"> Language </InputLabel>
					<Select
						labelId="language-select-label"
						id="language-select"
						value={language}
						onChange={(e) => dispatch(inputLang(e.target.value))}
						label="Language"
					>
					{
						languageCategories.map((language, index) => <MenuItem key={index}value={language.label} sx={{color: '#E9FBF8'}}> {language.value} </MenuItem>)
					}
					</Select>
				</FormControl>
			</ThemeProvider>
		</div>
	)
}

export default LanguageSelect