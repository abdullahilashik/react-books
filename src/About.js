import React from 'react'
import AboutItem from './components/AboutItem.js';
import book1 from './images/books/book1.jpg';
import book2 from './images/books/book2.jpg';
import book3 from './images/books/book3.jpg';
import book4 from './images/books/book4.jpg';
import book5 from './images/books/book5.jpg';

export default function About() {
    const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  return (
    <section className='text-center py-12'>
        <div className='p-8'>
            <h1 className='text-5xl'>About Us</h1>
            <p className='py-12 px-32 text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className='flex gap-8'>
            {/* about item */}
        <AboutItem image={book1} title='Book title 1' description={description}/>
        {/* about item */}
        <AboutItem image={book2} title='Book title 2' description={description}/>
        {/* about item */}
        <AboutItem image={book3} title='Book title 3' description={description}/>
        </div>
    </section>
  )
}
