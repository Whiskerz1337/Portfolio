import React from 'react'
import { skillsList } from '../Data/data'

const SkillsSection = () => {
  return (
    <div className='mb-8 mt-4 flex min-w-full flex-col items-center justify-center border-t-2 border-arcade'>
      <h1 className='m-4 flex justify-center self-center font-exo text-4xl text-primary '>
        Skills
      </h1>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {skillsList.map((skill, index) => (
          <div key={index} className='rounded-3xl border border-arcade bg-secondary p-4 shadow-md'>
            <h2 className='mb-2 font-exo text-xl'>{skill.title}</h2>
            <ul className='list-inside list-disc'>
              {skill.items.map((item, itemIndex) => (
                <li className='font-roboto' key={itemIndex}>
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
