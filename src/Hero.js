import React from 'react'
import book4 from './images/books/book4.jpg';

export default function Hero() {
  return (
    <div className='mt-12'>
      <div className='flex items-center justify-between'>
          <div className='flex flex-col px-12'>
            <h1 className='text-5xl'>Looking for something to read?</h1>
            <p className="py-8 text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, nesciunt earum id officia illo dignissimos adipisci sit recusandae suscipit, quisquam natus tempora sunt vel nisi culpa? Assumenda minus autem sed!</p>

            {/* action buttons */}
            <div className="flex gap-8">
              <button className="px-2 py-3 bg-orange-600 font-semibold text-white w-40">Free Access</button>
              <button className="px-2 py-3 border border-orange-600 font-semibold text-black w-40">Pricing</button>
            </div>
          </div>
          <img src={book4} alt="" className="w-2/5 object-cover rounded-sm"/>
      </div>
    </div>
  )
}
