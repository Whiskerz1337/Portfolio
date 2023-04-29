/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const PortfolioItem = ({ id, title, description, imageUrl, technologies, active, setActive }) => {
  return (
    <div
      onClick={() => setActive(id)}
      className={`mb-2 flex h-40 min-w-full cursor-pointer flex-row overflow-hidden rounded-2xl border border-arcade transition-all duration-500 ease-linear hover:opacity-80 ${
        active ? 'bg-sith' : 'bg-primary'
      }`}
    >
      <img className='w-44 select-none object-cover opacity-95' src={imageUrl} alt={title} />
      <div className='ml-4 flex-1 p-2'>
        <h3 className='select-none font-exo text-lg text-primary'>{title}</h3>
        <p className='mb-0 select-none font-roboto text-sm text-primary'>{description}</p>
        <ul className='mb-2 select-none list-none pl-0'>
          {technologies.map((tech, index) => (
            <li key={index} className='inline-flex truncate pr-2 text-xs text-grey'>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

PortfolioItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string),
  active: PropTypes.bool,
  setActive: PropTypes.func,
}

export default PortfolioItem
