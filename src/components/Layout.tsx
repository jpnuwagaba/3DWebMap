import React from 'react'
import TopBar from './TopBar'
import SideBar from './SideBar'


const Layout = () => {
  return (
    <div className='w-[90%] mx-auto py-3 relative h-screen'>
      <TopBar />
      <div className='absolute right-0 bottom-20'>
        <SideBar />
      </div>
      
    </div>
  )
}

export default Layout