import React from 'react'
import PropTypes from 'prop-types'
import { TbWorldWww } from 'react-icons/tb'
import '../styles/button.css'

const ExternalButton = ({ url, label }) => {
  return (
    <a
      href={url}
      className='custom-shadow mx-3 flex h-8 cursor-pointer items-center justify-center rounded-2xl bg-sith p-5 font-roboto text-sm text-primary hover:bg-sith/80 hover:text-arcade'
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='mr-1'>{label}</div>
      <TbWorldWww style={{ fontSize: '1.5rem' }} />
    </a>
  )
}

ExternalButton.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: PropTypes.element,
  index: PropTypes.number,
}

export default ExternalButton
