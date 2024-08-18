import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../data'
import { buttons } from '../data'

const Projects = () => {
  const [items, setItems] = useState(projects)
  const showProjects = (text) => {
    if (text === 'All') {
      setItems(projects)
    } else {
      const newItems = projects.filter((item) => item.tag == text)
      setItems(newItems)
    }
  }
  return (
    <section className='align-element bg-gray-200 '>
      <div className='py-8'>
        <h1 className='text-6xl text-center font-mono tracking-wider pb-6 '>
          Projects
        </h1>
        <div className=' border-2 border-amber-400 max-w-24 mx-auto'></div>
      </div>
      <div className='border-solid border-4 bg-amber-400'></div>
      <div className=' grid grid-cols-2 gap-4  mb-8 md:flex md:flex-row md:gap-2 md:items-center md:justify-center  md:px-2'>
        {buttons.map(({ id, text }) => {
          return (
            <button
              key={id}
              className='category-btn'
              onClick={() => showProjects(text)}
            >
              {text}
            </button>
          )
        })}
      </div>
      <div className='grid grid-cols-1 gap-8  sm:grid-cols-2 lg:grid-cols-3'>
        {items.map((project) => {
          return <ProjectCard key={project.id} {...project} />
        })}
      </div>
    </section>
  )
}

export default Projects
