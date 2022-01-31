import { useState, useEffect} from 'react'
import { BiVolumeFull } from 'react-icons/bi'
import './wordAudio.css'

const WordAudio = ({src}) => {
    const [play, setPlay] = useState(false)
    const audio = document.querySelector('#audio') 

    useEffect(() => {
        if (play) {
            audio.play()
            setPlay(false)
        }
    }, [play])

    return (
        <div className='word-audio'>
            <audio
                id='audio'
                src={src}
            >
                Your browser does not support the audio element.
            </audio>

            <BiVolumeFull className='audio-icon' onClick={() => setPlay(true)} />
        </div>
    )
}

export default WordAudio