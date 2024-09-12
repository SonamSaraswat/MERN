import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import Rightbar from './components/Rightbar'



const App=()=> {

  return (
    <div className='h-screen bg-black' >
      <div className='h-[90%] flex'>
       <Sidebar/>
       <Display/>
       <Rightbar/>
    </div>
    <Player/>
    </div>
  )
}

export default App
