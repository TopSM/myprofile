import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import React,  { useState } from 'react'
import HomePage from './Pages/HomePage'
import NotFound from  './Pages/NotFound'
import MainLayouts from './Layouts/MainLayout'
import GalleryPage from './Pages/GalleryPage'
import './StylesCSS/Main.css'

const router = createBrowserRouter(
  createRoutesFromElements(  
    <Route path ='/' element={<MainLayouts/>}>
      <Route index element={<HomePage/>}/>
      <Route path='*' element={<NotFound/>}/> 
      <Route path='/MyGallery' element={<GalleryPage/>}/> 
    </Route>

  ),
  {basename:'/myProfile/'}
)

const App = () => {
  const [Color] = useState(true)
  return (<RouterProvider router={router}/>)
}

export default App