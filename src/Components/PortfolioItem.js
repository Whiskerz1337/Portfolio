/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import '../styles/button.css'

const PortfolioItem = ({ id, title, description, imageUrl, technologies, active, setActive }) => {
  return (
    <div
      onClick={() => setActive(id)}
      className={`custom-shadow mb-2 flex h-36 min-w-full cursor-pointer flex-row overflow-hidden rounded-2xl border border-white/0 transition-all duration-500 ease-in-out hover:scale-100 sm:h-40 ${
        active ? 'scale-100  border-white/100' : 'scale-95 hover:border-white/30'
      }`}
    >
      <img
        className='hidden w-44 select-none object-cover opacity-95 sm:block'
        src={imageUrl}
        alt={title}
      />
      <div className='ml-2 flex-1 p-2 sm:ml-4'>
        <h3 className='select-none font-exo text-xl text-primary'>{title}</h3>
        <p className='mb-0 select-none font-exo text-xs text-primary sm:text-sm'>{description}</p>
        <ul className='mb-2 hidden select-none list-none pl-0 sm:block'>
          {technologies.map((tech, index) => (
            <li
              key={index}
              className='inline-flex truncate pr-1 text-xs font-bold text-grey sm:pr-2'
            >
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
