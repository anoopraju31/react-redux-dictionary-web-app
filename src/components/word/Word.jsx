import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { inputWord } from '../../features/word/word'
import { inputLang } from '../../features/language/language'
import './word.css'

const Word = ({word, language}) => {
	const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = () => {
        dispatch(inputWord(word))
        dispatch(inputLang(language))
        navigate('/meaning')
    }

    return (
        <div 
            className='word'
            onClick={handleClick}
        >
            { word }
        </div>
    )
}

export default Word