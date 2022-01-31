import { useState, useEffect } from 'react'
import { Word } from '../../components/import'
import './recentWords.css'

const RecentWords = () => {
    const [words, setWords] = useState([])

    useEffect(() => {  
        setWords(JSON.parse(localStorage.getItem("words") || "[]"))
    }, [])

    return  (
        <div className='recentWords'>
            <h3> Recently searched words : </h3>

            <div className="recentWords__container">
                    { words?.map((word, index) => <Word word={word.word} language={word.language} key={index} />) }
            </div>
        </div>
    )
}

export default RecentWords