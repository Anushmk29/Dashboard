import React from 'react'
import './Sidebar.css' 
import Logo from '../../images/logo.png'
const Sidebar = () => {
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
