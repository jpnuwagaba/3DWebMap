import React from 'react'
import {IoLocateSharp} from 'react-icons/io5'
import {AiOutlineCompass} from 'react-icons/ai'

const SideBar = () => {
  return (
    <div className='flex flex-col items-center w-min gap-2'>
      <div className='rounded-full p-3 w-min shadow-md'>
        <IoLocateSharp size={'1.5rem'} color={'lightRed'}/>
      </div>
      <div className='rounded-full p-3 w-min font-bold shadow-md text-lightRed'>3D</div>
      <div className='rounded-full p-3 w-min shadow-md'>
        <AiOutlineCompass size={'1.5rem'} fill={'lightRed'}/>
      </div>
    </div>
  )
}

export default SideBar