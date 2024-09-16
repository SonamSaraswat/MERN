import { useState , useContext} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import Rightbar from './components/Rightbar'
import { PlayerContext } from './context/PlayerContext'



const App=()=> {

  const {audioRef,track}=useContext(PlayerContext)

  return (
    <div className='h-screen bg-black' >
      <div className='h-[90%] flex'>
       <Sidebar/>
       <Display/>
       <Rightbar/>
    </div>
    <Player/>
    <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App
