import React from 'react'
import PropTypes from 'prop-types'
import GitHubButton from '../Components/GitHubButton'

const ProjectArticle = ({ project, children }) => {
  const { title, description, gitHubLink, technologies } = project

  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='mt-2 flex justify-center self-center font-exo text-3xl text-primary'>
          {title}
        </h2>
        <p className='font-roboto text-sm text-primary'>{description}</p>
        <div className='flex flex-row'>
          {technologies.map((tech, index) => (
            <li key={index} className='inline-flex truncate pr-2 text-xs text-grey'>
              {tech}
            </li>
          ))}
        </div>
        <div className='flex min-w-full flex-row justify-center border-b-2 border-arcade pb-2'>
          {gitHubLink ? <GitHubButton url={gitHubLink} label={'View on GitHub'} /> : <></>}
        </div>
        {children}
      </div>
    </>
  )
}

ProjectArticle.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    gitHubLink: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
  }),
  children: PropTypes.node,
}
export default ProjectArticle
