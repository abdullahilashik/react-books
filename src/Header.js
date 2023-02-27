import React from 'react';
import Logo from '../src/images/logo.png';

export default function Header() {
  return (
    <div className='mt-12 flex items-center justify-between'>
      <img src={Logo} alt="" className='w-16 h-16'/>
      <ul className='flex gap-12 text-md font-'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Books</a></li>
        <li><a href="#">About Me</a></li>
        <li><a href="#">Contact</a></li>
        <button className='bg-orange-500 text-white rounded-sm py-1 px-3'>Get Access</button>
      </ul>
    </div>
  )
}
