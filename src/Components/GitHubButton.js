import React from 'react'
import PropTypes from 'prop-types'
import { FaGithub } from 'react-icons/fa'
import '../styles/button.css'

const GitHubButton = ({ url, label }) => {
  return (
    <a
      href={url}
      className='custom-shadow flex scale-75 cursor-pointer items-center justify-center rounded-2xl bg-sith p-2 font-exo text-sm text-primary hover:scale-105 hover:text-arcade sm:my-3 sm:scale-100'
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='mr-1'>{label}</div>
      <FaGithub style={{ fontSize: '1.8rem' }} />
    </a>
  )
}

GitHubButton.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string,
}

export default GitHubButton
