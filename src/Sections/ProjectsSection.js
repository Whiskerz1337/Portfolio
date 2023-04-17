import React from 'react'
import PortfolioItem from '../Components/PortfolioItem'
import { projectData } from '../Data/data'

const ProjectsSection = () => {
  return (
    <>
      <div className=' flex flex-col items-center justify-center p-4'>
        <h2 className='m-4 flex justify-center self-center font-exo text-4xl text-primary'>
          Projects
        </h2>
        {projectData &&
          projectData.map((project, index) => {
            return (
              <PortfolioItem
                key={project.title + '-' + index}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                technologies={project.technologies}
                link={project.link}
              />
            )
          })}
      </div>
    </>
  )
}

export default ProjectsSection
