import React from 'react'

const SectionTitle = ({ title }) => {
  return (
    <div>
      <h1 className='text-4xl md:text-5xl font-mono font-semibold capitalize tracking-widest mb-8'>
        {title}
      </h1>
      <div></div>
    </div>
  )
}

export default SectionTitle
