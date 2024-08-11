import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CheckIsAuth from './Middleware/CheckIsAuth'
import Login from './pages/Admin/Login'
import Admin from './pages/Admin'
// import Register from './pages/Register'
import PreventAfterLogin from './Middleware/PreventAfterLogin'
import Dashboard from './pages/Admin/Tabs/Dashboard'
import Experience from './pages/Experience'
import AddNewVideo from './pages/Admin/Tabs/AddNewVideo'
import AddNewGraphic from './pages/Admin/Tabs/AddNewGraphic'
// import AllVideo from './pages/Admin/Tabs/AllVideo'
import AllVideos from './pages/Admin/Tabs/AllVideos'
import AllGraphic from './pages/Admin/Tabs/AllGraphics'
import AllFaqs from './pages/Admin/Tabs/AllFaqs'
import AddNewFaqs from './pages/Admin/Tabs/AddNewFaqs'

const App = () => {

  useEffect(()=>{
    document.addEventListener('contextmenu', event => {
      event.preventDefault();
  });

  },[])
  return (
    <div>
      <Routes>
        <Route element={<PreventAfterLogin/>}>
          <Route path='/login' element={<Login/>} />
          {/* <Route path='/register' element={<Register/>} /> */}
        </Route>
        {/*  */}
        <Route element={<CheckIsAuth/>}>
          <Route path='/myadmin-panel' element={<Admin/>}>
            <Route index element={<Dashboard/>} />
            <Route path='allvideo' element={<AllVideos/>} />
            <Route path='video' element={<AddNewVideo/>} />
            <Route path='allgraphic' element={<AllGraphic/>} />
            <Route path='graphic' element={<AddNewGraphic/>} />
            <Route path='allfaqs' element={<AllFaqs/>} />
            <Route path='faqs' element={<AddNewFaqs/>} />
      </Route>
        </Route>
      <Route path='/' element={<Home/>} />
      <Route path='/experience' element={<Experience/>} />
      </Routes>
    </div>
  )
}

export default App