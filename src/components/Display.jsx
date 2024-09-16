import React, { useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'

const Display = () => {
  const displayref=useRef();
  const location=useLocation();
  return (
    <div className='lg:w-[50%] md:w-[30%] sm:w-[20%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto '>

        <Routes>
            <Route path='/' element={<DisplayHome/>}/>
            <Route path='/album/:id' element={<DisplayAlbum
            />}/>
        </Routes>
    </div>
  )
}

export default Display