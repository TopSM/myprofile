import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React, { useState } from 'react'
import HomePage from './Pages/HomePage'
import NotFound from './Pages/PageNotFound'
import MainLayouts from './Layouts/MainLayout'
// import GalleryPage from './Pages/GalleryPage'
import './StylesCSS/Main.css'
import PoemsPage from './Pages/PoemsPage'
import TicTacToePage from './Pages/TicTacToePage'
// import basicColors from './Components/Builds/basicColors'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayouts />}>
      <Route index element={<HomePage />} />      
      <Route path="mypoems" name="MyPoems" element={<PoemsPage />} />
      <Route path='*' element={<NotFound />} />
      {/* <Route path='myGallery' element={<GalleryPage />} /> */}
      <Route path='Tic-Tac-Toe' element={<TicTacToePage/>}/>
    </Route>

  ),
  { basename: '/myProfile/' }
)

const App = () => {
  return (
  <div>
    <RouterProvider router={router} /> 
  </div>
  )
}

export default App