import React, { useState, useLayoutEffect } from 'react'
import PortfolioItem from '../Components/PortfolioItem'
import { projectData } from '../Data/data'
import ProjectArticle from './ProjectArticle'
import SmoothCollapse from '../styles/SmoothCollapse'
import RaspiContent from '../Articles/RaspiContent'
import TipContent from '../Articles/TipContent'
import CSGraphsContent from '../Articles/CSGraphsContent'
import JunkAppContent from '../Articles/JunkAppContent'

const ProjectsSection = () => {
  const [activeArticle, setActiveArticle] = useState(null)

  const activateOnClick = (targetId) => {
    targetId === activeArticle ? setActiveArticle(null) : setActiveArticle(targetId)
  }

  useLayoutEffect(() => {
    if (activeArticle === null) {
      setTimeout(function () {
        setActiveArticle(0)
      }, 400)
    }
  }, [])

  return (
    <>
      <h2
        className='m-4 flex justify-center self-center border-t-2 border-arcade pt-4
      font-exo text-4xl text-primary'
      >
        Projects
      </h2>
      <div className='flex min-w-full flex-row'>
        <div className='flex w-1/3 flex-col items-center justify-start'>
          {projectData &&
            projectData.map((project, index) => {
              return (
                <PortfolioItem
                  key={project.title + '-' + index}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  technologies={project.technologies}
                  active={activeArticle === project.id}
                  setActive={activateOnClick}
                />
              )
            })}
        </div>
        <div
          className={`ml-5 flex h-full min-h-[58vh] w-2/3 flex-col overflow-hidden rounded-2xl border border-arcade text-primary lg:min-h-0`}
        >
          <>
            <SmoothCollapse in={activeArticle === 0}>
              <div className='h-full'>
                <ProjectArticle project={projectData[0]}>
                  <RaspiContent imageUrl={projectData[0].imageUrl} />
                </ProjectArticle>
              </div>
            </SmoothCollapse>
            <SmoothCollapse in={activeArticle === 1}>
              <div className='h-full'>
                <ProjectArticle project={projectData[1]}>
                  <TipContent imageUrl={projectData[1].imageUrl} />
                </ProjectArticle>
              </div>
            </SmoothCollapse>
            <SmoothCollapse in={activeArticle === 2}>
              <div className='h-full'>
                <ProjectArticle project={projectData[2]}>
                  <CSGraphsContent imageUrl={projectData[2].imageUrl} />
                </ProjectArticle>
              </div>
            </SmoothCollapse>
            <SmoothCollapse in={activeArticle === 3}>
              <div className='h-full'>
                <ProjectArticle project={projectData[3]}>
                  <JunkAppContent imageUrl={projectData[3].imageUrl} />
                </ProjectArticle>
              </div>
            </SmoothCollapse>
          </>
        </div>
      </div>
    </>
  )
}

export default ProjectsSection
