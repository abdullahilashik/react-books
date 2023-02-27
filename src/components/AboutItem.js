import React from 'react'

export default function AboutItem(props) {
  return (
    <div className='flex flex-col w-1/3 shadow-sm gap-2'>
        <div  className='w-full'>
            <img src={props.image} alt="Book1" className='h-80 object-cover'/>
        </div>
        <h2 className='text-2xl'>{props.title}</h2>
        <p className='text-sm'>{props.description} <span className='text-blue-500 font-semibold'>..Read More</span></p>
    </div>
  )
}
