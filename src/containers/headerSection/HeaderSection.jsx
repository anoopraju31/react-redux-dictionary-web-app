import { Header, LanguageSelect } from '../../components/import'
import './headerSection.css'

const HeaderSection = () => {
    return (
        <div className='header-section'>
            <Header />
            <LanguageSelect />
        </div>
    )
}

export default HeaderSection