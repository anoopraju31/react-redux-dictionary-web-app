import { MeaningPortion } from '../../components/import'
import './meaningSection.css'

const MeaningSection = ({meaning}) => {
    return (
        <div className='meaning-section'>
            <h3> {meaning?.partOfSpeech} </h3>

            { meaning?.definitions.map((definition, idx) => <MeaningPortion key={idx} definition={definition} count={idx + 1} />) }
        </div>
    )
}

export default MeaningSection