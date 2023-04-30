import React from 'react'
import { skillsList } from '../Data/data'

const SkillsSection = () => {
  return (
    <div className='mb-8 mt-4 flex min-w-full flex-col items-center justify-center border-t-2 border-arcade'>
      <h1 className='m-4 flex justify-center self-center font-exo text-4xl text-primary'>Skills</h1>
      <div className='grid grid-cols-3 gap-4 px-4 sm:grid-cols-3 sm:px-0'>
        {skillsList.map((skill, index) => (
          <div
            key={index}
            className='rounded-3xl border border-arcade bg-secondary p-2 shadow-md sm:p-4'
          >
            <h2 className='mb-2 flex-wrap font-exo text-lg sm:text-xl'>{skill.title}</h2>
            <ul className='list-inside list-disc'>
              {skill.items.map((item, itemIndex) => (
                <li className='font-roboto text-sm sm:text-base' key={itemIndex}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsSection
