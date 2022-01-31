import HeaderSection from '../headerSection/HeaderSection'
import RecentWords from '../recentWords/RecentWords'
import { SearchBox } from '../../components/import'
import './home.css'

const Home = () => {
    return (
        <div className='home-page'>
            <HeaderSection />
            <SearchBox />
            <RecentWords />
        </div>
    )
}

export default Home