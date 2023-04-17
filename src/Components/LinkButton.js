import React from 'react'
import PropTypes from 'prop-types'
import '../styles/button.css'

const LinkButton = ({ url, label, icon }) => {
  return (
    <a
      href={url}
      className='custom-shadow mx-3 flex h-40 w-44 flex-col items-center justify-around whitespace-normal rounded-2xl bg-sith object-fill p-4 font-roboto text-2xl text-primary hover:bg-sith/80'
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
  index: PropTypes.number,
}

export default LinkButton
