import React from 'react'
import Navbar from './Navbar'
import {assets, albumsData,songsData } from '../assets/assets'
import { useParams } from 'react-router-dom'


const DisplayAlbum = () => {
  const {id}=useParams();
  const albumData=albumsData[id];

  return (
    <>
    <Navbar/>
    <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
      <img className='w-48 rounded' src={albumData.image} alt=""/>
      <div className='flex flex-col'>
        <p>PlayList</p>
        <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
        <h4>{albumData.desc}</h4>
        <p className='mt-1'>        
          <b>1,323,154 likes</b>
           <b>50 songs</b>
             about 2 hr 30 min
        </p>
      </div>
    </div>
    <br></br>
    <hr></hr>
    <div className=' m-2 mb-2 p-2 pb-2 flex justify-around'>
      <button className=' px-4 py-1.5 rounded text-black bg-white mt-4'>Open Chat</button>
      <button className=' px-4 py-1.5 rounded text-black bg-white mt-4'>Add Comments</button>
    </div>
    <hr></hr>
    
      

   
    </>
  )
}

export default DisplayAlbum