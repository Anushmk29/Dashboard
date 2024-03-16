import React, { useState } from 'react'
import './Sidebar.css' 
import {UilEstate} from "@iconscout/react-unicons"
import Logo from '../../images/logo.png'
import { SidebarData } from '../../Data/Data'

const Sidebar = () => {
 
  const [selected,setSeleted] = useState(0)

  return (
    <div className='Sidebar'>
      {/* {logo} */}
      <div className="logo">
        <img src = {Logo} alt="" />
        <span>
         Sh<span>o</span>ps
         </span>
      </div>
    </div>
  )
}

export default Sidebar
