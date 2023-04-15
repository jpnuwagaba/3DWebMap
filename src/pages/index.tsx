import { useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Footer from '@/components/Footer'
import MapModel from '@/model/MapModel'
// import Map from '@/model/Map'
import TopBar from '@/components/TopBar'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { IoLocateSharp } from 'react-icons/io5'
import { AiOutlineCompass } from 'react-icons/ai'
import SideOptions from '@/components/SideOptions'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [sideOptions, setSideOptions] = useState(true)

  return (
    <div className='relative'>
      <MapModel />
      {/* <Map /> */}
      {/* top bar */}
      <div className="absolute z-20 top-0 w-full">
        <div className=' flex justify-between items-center px-5 py-8'>
          <div onClick={() => setSideOptions(!sideOptions)} id='sideOptions' className='z-50'>
            {sideOptions ? <AiOutlineMenu size={'1.5rem'} color='darkGreen' /> : <AiOutlineClose size={'1.5em'} color='darkGreen' />}
          </div>
          <AiOutlineSearch size={'1.5rem'} color='darkGreen' />
          <div style={sideOptions ? { display: 'none' } : { display: 'block' }}
            className='absolute z-30 top-0 w-[70%] transition duration-300 ease-out -translate-x-5 pt-24 h-screen bg-white p-6 md:w-[50%] lg:w-[25%] '>
            <SideOptions />
          </div>
        </div>
      </div>

      {/* side bar */}
      <div className="absolute z-50 bottom-20 right-0 px-4">
        <div className='flex flex-col items-center w-min gap-2'>
          <div className='rounded-full  w-12 h-12 p-3 w-min shadow-md bg-white'>
            <IoLocateSharp size={'1.5rem'} color={'lightRed'} />
          </div>
          <div className='rounded-full w-12 h-12 p-3 w-min font-bold shadow-md text-lightRed bg-white flex items-center justify-center text-lg'>3D</div>
          <div className='rounded-full w-12 h-12 p-3 w-min shadow-md bg-white'>
            <AiOutlineCompass size={'1.5rem'} fill={'lightRed'} />
          </div>
        </div>
      </div>
      {/* footer */}
      <div className='absolute z-50 bottom-0 px-5 py-2 bg-darkRed w-full text-white'>
        <Footer />
      </div>
    </div>
  )
}
