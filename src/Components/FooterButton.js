import React from 'react'
import PropTypes from 'prop-types'
import '../styles/button.css'

const FooterButton = ({ url, icon }) => {
  return (
    <a
      href={url}
      className='custom-shadow mx-3 flex h-20 flex-col items-center justify-around rounded-2xl bg-sith object-fill p-4 text-primary hover:scale-105 hover:bg-sith/80 hover:text-arcade'
      target='_blank'
      rel='noopener noreferrer'
    >
      {icon}
    </a>
  )
}

FooterButton.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: PropTypes.element,
}

export default FooterButton
