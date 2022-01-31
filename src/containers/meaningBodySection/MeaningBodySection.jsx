import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Meaning } from '../import'
import './meaningBodySection.css'

const MeaningBodySection = () => {
    const navigate = useNavigate()
	const meaning = useSelector(state => state.meaning.value)
    
    return (
        <div className='meaning-body'>
            <AiOutlineClose  className='meaning-body__close-icon' onClick={() => navigate('/')}/>

            <div className="meaning-body__container">
                { meaning?.map((mean, idx) => <Meaning key={idx} mean={mean} count={idx + 1} />)}
                { meaning?.title}
            </div>
        </div>
    )
}

export default MeaningBodySection