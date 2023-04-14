import { useState } from 'react'
import React from 'react'
import {AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'

const TopBar = () => {

  // const [menu, setMenu] = useState(false)

  return (
    <div className=' flex justify-between items-center px-6'>
      <AiOutlineMenu size={'1.5rem'}/>
      <AiOutlineSearch size={'1.5rem'}/>
    </div>
  )
}

export default TopBar