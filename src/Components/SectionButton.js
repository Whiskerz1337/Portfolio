import React from 'react'
import PropTypes from 'prop-types'
import '../styles/button.css'

const SectionButton = ({ name, content, active, activateSection }) => {
  return (
    <button
      onClick={() => activateSection(name)}
      className={
        active
          ? 'custom-shadow mx-3 flex h-24 w-36 items-center justify-center rounded-2xl bg-arcade p-5  font-roboto text-xl text-primary hover:bg-arcade/80 '
          : ' custom-shadow mx-3 flex h-24 w-36 items-center justify-center rounded-2xl bg-sith p-5 font-roboto text-xl text-primary hover:bg-sith/80 hover:text-arcade '
      }
    >
      {content}
    </button>
  )
}

SectionButton.propTypes = {
  name: PropTypes.string,
  content: PropTypes.string,
  active: PropTypes.bool,
  activateSection: PropTypes.func,
}

export default SectionButton
