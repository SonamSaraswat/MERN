import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'

const Display = () => {
  return (
    <div className='w-[50%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto '>

        <Routes>
            <Route path='/' element={<DisplayHome/>}/>
            <Route path='/album/:id' element={<DisplayAlbum
            />}/>
        </Routes>
    </div>
  )
}

export default Display