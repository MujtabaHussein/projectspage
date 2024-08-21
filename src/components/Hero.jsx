import React from 'react'
import SectionTitle from './SectionTitle'
import heroImg from '../assets/hero-img.jpg'
const Hero = () => {
  return (
    <section className='align-element '>
      <div className='lg:grid lg:grid-cols-2 lg:gap-4 lg:items-center items-center'>
        <div className=' '>
          <SectionTitle title={'my projects'} />
          <p className='text-2xl text-slate-700 font-light max-w-2xl leading-normal '>
            Take a look at the
            <span className='font-bold tracking-widest uppercase italic underline text-black underline-offset-8 under decoration-amber-400 px-2'>
              projects
            </span>
            I've completed so far, each one a testament to my dedication and
            passion. I'm constantly updating this list with new work, so be sure
            to check back often to see what's new!
            <p className='font-bold tracking-widest uppercase italic underline text-black underline-offset-8 under decoration-amber-400 px-2 py-4'>
              mujtaba hussein
            </p>
          </p>
          <form action=''>
            <button className='btn mt-10 animate-bounce' type='submit'>
              my resumae
            </button>
          </form>
        </div>
        <img
          src={heroImg}
          alt='hero-img'
          className='w-full object-cover hidden lg:block '
        />
      </div>
    </section>
  )
}

export default Hero
