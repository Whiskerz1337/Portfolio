import React from 'react'
import PropTypes from 'prop-types'

const PortfolioItem = ({ title, description, imageUrl, technologies, link }) => {
  return (
    <div className='mb-6 flex flex-wrap overflow-hidden rounded border border-gray-300'>
      <img className='h-48 w-48 object-cover' src={imageUrl} alt={title} />
      <div className='flex-1 p-4'>
        <h3 className='mb-2 text-lg font-bold'>{title}</h3>
        <p className='mb-2 text-sm'>{description}</p>
        <ul className='mb-2 list-none pl-0'>
          {technologies.map((tech, index) => (
            <li key={index} className='mr-2 inline rounded bg-gray-200 px-2 py-1 text-xs'>
              {tech}
            </li>
          ))}
        </ul>
        {link && (
          <a
            className='text-blue-600 hover:underline'
            href={link}
            target='_blank'
            rel='noopener noreferrer'
          >
            View Project
          </a>
        )}
      </div>
    </div>
  )
}

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string,
}

PortfolioItem.defaultProps = {
  link: null,
}

export default PortfolioItem
