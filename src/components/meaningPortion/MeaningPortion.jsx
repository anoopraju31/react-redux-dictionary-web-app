import './meaningPortion.css'

const MeaningPortion = ({definition, count}) => {
    return (
        <div className='meaning-portion'>
            <div className="meaning-portion__counter">
                 <p> {count}. </p>
            </div>
            
            <div className="meaning-portion__container">
                <p className='meaning-portion__primary'> {definition?.definition} </p>
                { definition?.example && <p className="meaning-portion__example"> "{definition?.example}" </p> }
                { definition?.synonyms.length !== 0 && <p className="meaning-portion__similar"> <span> Similar : </span> { definition?.synonyms.join(', ') } </p> }
            </div>
        </div>
    )
}

export default MeaningPortion