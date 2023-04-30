import React from 'react'
import PropTypes from 'prop-types'
import '../styles/button.css'

const SectionButton = ({ name, content, active, activateSection }) => {
  return (
    <button
      onClick={() => activateSection(name)}
      className={
        active
          ? 'custom-shadow flex h-20 w-28 scale-100 items-center justify-center rounded-2xl bg-arcade font-exo text-2xl text-primary hover:text-sith sm:h-24 sm:w-40 '
          : ' custom-shadow flex h-20 w-28 scale-95 items-center justify-center rounded-2xl bg-sith font-exo text-2xl text-primary hover:scale-100 hover:bg-sith/80 hover:text-arcade sm:h-24 sm:w-40 '
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
