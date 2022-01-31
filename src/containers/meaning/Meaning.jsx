import { WordAudio, WordHeader } from '../../components/import'
import { MeaningSection } from '../import'
import './meaning.css'

const Meaning = ({mean, count}) => {
    return (
        <div className='meaning'>
            <div className="meaning__header">
                <WordAudio  src={mean?.phonetics[0]?.audio}/>
                <WordHeader word={mean?.word} phonetic={mean?.phonetic} count={count} />
            </div>
            
            <MeaningSection />

            {mean?.meanings?.map((meaning,idx) => <MeaningSection key={idx} meaning={meaning} /> ) }
            
            <div className="meaning-section__seperator" />
        </div>
    )
}

export default Meaning