import React from 'react'
import PropTypes from 'prop-types'
import GitHubButton from '../Components/GitHubButton'

const ProjectArticle = ({ project, children }) => {
  const { title, description, gitHubLink, technologies } = project

  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='mt-2 text-center font-exo text-2xl text-primary'>{title}</h2>
        <p className='hidden text-center font-exo text-sm text-primary md:block'>{description}</p>
        <div className=' hidden flex-wrap justify-center md:flex'>
          {technologies.map((tech, index) => (
            <li key={index} className='inline-flex truncate pr-2 text-xs font-bold text-grey'>
              {tech}
            </li>
          ))}
        </div>

        <div className='flex min-w-full flex-row justify-center border-b-2 border-white/5 pb-2'>
          <GitHubButton url={gitHubLink} label={'View on GitHub'} />
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
