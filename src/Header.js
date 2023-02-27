import React, {useState} from 'react';
import Logo from '../src/images/logo.png';
import {FaMoon, FaSun} from 'react-icons/fa'

export default function Header(props) {
  
  const onClick = () => {

  }
  
  return (
    <div className='mt-12 flex items-center justify-between'>
      <div className='flex gap-2 items-center'>
        <img src={Logo} alt="" className='w-16 h-16'/>
        <h4 className='text-2xl'>Bookshelf</h4>
      </div>
      <ul className='flex gap-12 text-md font-semibold items-center'>
        <li><a href="/">Home</a></li>
        <li><a href="/">Books</a></li>
        <li><a href="/">About Me</a></li>
        <li><a href="/">Contact</a></li>
        <button className='bg-orange-500 text-white rounded-sm py-1 px-3'>Get Access</button>
        <FaMoon />
      </ul>
    </div>
  )
}
