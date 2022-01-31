import { useNavigate } from 'react-router-dom'
import { LanguageSelect, SearchBox } from '../../components/import'
import './meaningHeaderSection.css'

const MeaningHeaderSection = () => {
    const navigate = useNavigate()
    
    return (
        <div className='meaning-header'>
            <h1 onClick={() => navigate('/')}> Dictionary </h1>
            <SearchBox />
            <LanguageSelect />
        </div>
    )
}

export default MeaningHeaderSection