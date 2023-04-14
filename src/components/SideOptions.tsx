import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

const SideOptions = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        {/* <AiOutlineClose size={'1.5rem'}/> */}
        <div className="font-bold text-lg">Places</div>
      </div>
      <div className=" mt-5 flex flex-col gap-3">
        <div className="rounded border md p-3 w-full cursor-pointer hover:bg-gray-100">Colleges</div>
        <div className="rounded border md p-3 w-full cursor-pointer hover:bg-gray-100">Halls</div>
        <div className="rounded border md p-3 w-full cursor-pointer hover:bg-gray-100">Open Spaces</div>
        <div className="rounded border md p-3 w-full cursor-pointer hover:bg-gray-100">Hangout Spots</div>
      </div>
    </div>
  )
}

export default SideOptions