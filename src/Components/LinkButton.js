import React from 'react'
import PropTypes from 'prop-types'
import '../styles/button.css'

const LinkButton = ({ url, label, icon }) => {
  return (
    <a
      href={url}
      className='custom-shadow mb-16 flex h-44 w-44 scale-75 flex-col items-center justify-evenly rounded-2xl bg-sith object-fill font-exo text-2xl text-primary hover:scale-105 hover:bg-sith/80 hover:text-arcade sm:scale-100'
      target='_blank'
      rel='noopener noreferrer'
    >
      {icon}
      <div>{label}</div>
    </a>
  )
}

LinkButton.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: PropTypes.element,
}

export default LinkButton
