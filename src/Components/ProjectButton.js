import React from 'react'
import PropTypes from 'prop-types'
import { SiCodereview } from 'react-icons/si'
import '../styles/button.css'

const ProjectButton = ({ title, content, toggleProject }) => {
  return (
    <button
      onClick={() => toggleProject(title)}
      className={
        'custom-shadow mx-3 flex h-8 items-center justify-center rounded-2xl bg-sith p-5 font-roboto text-sm text-primary hover:bg-sith/80 hover:text-arcade '
      }
    >
      {content}
      <SiCodereview className='ml-1 cursor-pointer' style={{ fontSize: '1.5rem' }} />
    </button>
  )
}

ProjectButton.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  toggleProject: PropTypes.func,
}

export default ProjectButton
