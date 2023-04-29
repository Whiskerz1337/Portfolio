import React from 'react'
import PropTypes from 'prop-types'
import { FaGithub } from 'react-icons/fa'
import '../styles/button.css'

const GitHubButton = ({ url, label }) => {
  return (
    <a
      href={url}
      className='custom-shadow mx-3 mt-3 flex h-8 cursor-pointer items-center justify-center rounded-2xl bg-sith p-5 font-roboto text-sm text-primary hover:bg-sith/80 hover:text-arcade'
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='mr-1'>{label}</div>
      <FaGithub style={{ fontSize: '1.5rem' }} />
    </a>
  )
}

GitHubButton.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string,
}

export default GitHubButton
