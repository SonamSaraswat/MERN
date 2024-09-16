import React, { useState,useEffect} from 'react'
import {assets} from '../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faShieldHeart} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'


const Sidebar = () => {

  const navigate=useNavigate();
    
  return (
    <div className='lg:w-[25%] md:w-[15%] sm:w-[10%] h-full p-4 flex-col text-white'>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around '>
      <div onClick={()=>navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
  <path fill="white" d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"/>
</svg>  
      </div>
      </div>
      <div className='bg-[#121212] h-[85%] rounded'>
        <div className='p-4 h-[50%] bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
        <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Choose your theme</button>
          <p className='font-light'>It's easy choose any one!</p>

          <div className='flex p-2 gap-4 justify-evenly'>
            <button className='px-4 py-1.5 bg-black text-[15px] text-white rounded-full mt-4'>Pink</button>
            <button className='px-4 py-1.5 bg-black text-[15px] text-white rounded-full mt-4'>Red</button>
            <button className='px-4 py-1.5 bg-black text-[15px] text-white rounded-full mt-4'>Blue</button>
            </div>
            <div className='flex p-2 gap-4 justify-evenly'>
            <button className='px-4 py-1.5 bg-black text-[15px] text-white rounded-full mt-4'>green</button>
            <button className='px-4 py-1.5 bg-black text-[15px] text-white rounded-full mt-4'>White</button>
            <button className='px-4 py-1.5 bg-black text-[15px] text-white rounded-full mt-4'>Orange</button>
            </div>
          
        </div>

        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
          <h1>Let's Talk</h1>
          <p className='font-light'>We'll keep you update with your friends</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Wan'na Talk!</button>
        </div>

      </div>
    </div>
  )
}

export default Sidebar