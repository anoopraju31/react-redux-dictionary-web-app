import './wordHeader.css'

const WordHeader = ({word, phonetic, count}) => {
    return (
        <div className='word-header'>
            <h2> {word} <sup>{count}</sup></h2>
            <p>/{phonetic}/</p>
        </div>
    )
}

export default WordHeader