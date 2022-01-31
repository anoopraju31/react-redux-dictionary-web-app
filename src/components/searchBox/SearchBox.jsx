import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { inputWord } from '../../features/word/word'
import './searchBox.css'

const SearchBox = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [word, setWord] = useState('')

    const handleChange = (e) => setWord(e.target.value)
    const handleClick = () => setWord('')
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(inputWord(word))
        setWord('')
        navigate('/meaning')
    }

    return (
        <form className='searchBox' onSubmit={handleSubmit} >
            <BiSearch className='searchBox__icon searchBox__search-icon' />
            <input 
                className='searchBox__input' 
                type="text" 
                placeholder='search a word'
                value={word}
                onChange={handleChange}
            />
            
            { word && <AiOutlineClose className='searchBox__close-icon searchBox__icon' onClick={handleClick} /> }

            <button 
                className='searchBox__button'
                type="submit"
            > submit </button>
        </form>
    )
}

export default SearchBox