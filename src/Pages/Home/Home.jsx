import React from 'react' 
import Articles from '../../components/Articles/Articles'
import HomeBanner from '../../components/HomeBanner/HomeBanner'
import LatestVideo from '../../components/LatestVideo/LatestVideo'
import Shorts from '../../components/Shorts/Shorts'
import Sidebar from '../../components/Sidebar/Sidebar'
import TopNav from '../../components/TopNav/TopNav'
import TopVideos from '../../components/TopVideos/TopVideos'
import Trending from '../../components/Trending/Trending'
import { AuthUser } from '../Auth/AuthUser/AuthUser'
import './home.css'


const Home = () => {
  // const {user} = AuthUser();
  // console.log(user)
  return (
    <div className='home'>  
        <div className="sidebarAndContent"> 
          {/* <Sidebar />  */}
          <div className='contentContainer'>
            <HomeBanner />
             <Trending />
             <Shorts />
             <TopVideos />
             <Articles />
             <LatestVideo />
          </div> 
        </div> 
    </div>
  )
}

export default Home
