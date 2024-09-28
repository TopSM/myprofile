import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import React,  { useState } from 'react'
import HomePage from './Pages/HomePage'
import MainLayouts from './Layouts/MainLayout'

import './StylesCSS/Main.css'

const router = createBrowserRouter(
  createRoutesFromElements(  
    <Route path ='/' element={<MainLayouts/>}>
      <Route index element={<HomePage/>}/>
    </Route>
  ),
  {basename:'/myProfile/'}
)

const App = () => {
  const [Color] = useState(true)
  return (<RouterProvider router={router}/>)
}

export default App