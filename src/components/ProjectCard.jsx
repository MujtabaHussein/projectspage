import React from 'react'

const ProjectCard = ({ img, title, url }) => {
  return (
    <a
      className='cursor-pointer rounded-md shadow-md hover:shadow-2xl duration-300'
      href={url}
      target='_blank'
    >
      <img
        src={img}
        alt={title}
        className='w-full object-cover rounded-t-md h-72'
      />
      <p className='font-mono text-center py-4 text-2xl bg-slate-50 rounded-b-md capitalize'>
        {title}
      </p>
    </a>
  )
}

export default ProjectCard
