import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticleRoute from './components/Articles/ArticleRoute'; 
import LatestVideoRoute from './components/LatestVideo/LatestVideoRoute';
import Sample from './components/Sample/Sample';
import Sidebar from './components/Sidebar/Sidebar';
import TopNav from './components/TopNav/TopNav';
import TopVideosRoute from './components/TopVideos/TopVideosRoute';
import TrendingRoute from './components/Trending/TrendingRoute';
import Admin from './Pages/Admin/Admin';
import AuthProvider from './Pages/Auth/AuthProvider.js/AuthProvider';
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Register/Register';
import Settings from './Pages/Dashboard/Settings/Settings';
import HistoryRoute from './Pages/History/HistoryRoute';
import Home from './Pages/Home/Home';
import Movies from './Pages/Movies/Movies';
import Purchases from './Pages/Purchases/Purchases';

function App() {
  return (
    <div>   
      <BrowserRouter>
      <TopNav />
      {/* <Sidebar /> */}
        <Routes>
          <Route path='/'>
            <Route index path='/' element={<Home />} /> 
            <Route path='articles' element={<ArticleRoute />} />
            <Route path='latestvideo' element={<LatestVideoRoute />} />
            <Route path='history' element={<HistoryRoute />} />
            <Route path='purchases' element={<Purchases />} />
            <Route path='trending' element={<TrendingRoute />} />
            <Route path='topvideos' element={<TopVideosRoute />} />
            <Route path='movies' element={<Movies />} />
          </Route> 
          <Route path='register' element={<Register />} /> 
          <Route path='login' element={<Login />} /> 
          <Route path='admin-panel' element={<Admin />} />  
          <Route path='form' element={<Sample />} /> 
          <Route path='settings' element={<Settings />} />  
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;

// C954F7  9303FD