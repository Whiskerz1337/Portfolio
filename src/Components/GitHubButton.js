import React from 'react'
import PropTypes from 'prop-types'
import { FaGithub } from 'react-icons/fa'
import '../styles/button.css'

const GitHubButton = ({ url, label }) => {
  return (
    <a
      href={url}
      className='custom-shadow flex scale-75 cursor-pointer items-center justify-center rounded-2xl border border-lime/0 bg-indigo-700 p-2 font-exo text-sm text-secondary transition-all duration-300 ease-linear hover:scale-110 hover:border-white/100 hover:text-white sm:my-3 sm:w-40 sm:scale-105'
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
