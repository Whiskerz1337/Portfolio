import React from 'react'
import PropTypes from 'prop-types'
import '../styles/button.css'

const SectionButton = ({ name, active, activateSection }) => {
  return (
    <button
      onClick={() => activateSection(name)}
      className={
        active
          ? 'custom-shadow mx-3 h-32 w-56 rounded-2xl bg-arcade p-5  font-roboto text-2xl text-primary hover:bg-arcade/80 sm:p-3'
          : ' custom-shadow mx-3 h-32 w-56 rounded-2xl bg-sith p-5 font-roboto text-2xl text-primary hover:bg-sith/80 hover:text-arcade sm:p-3'
      }
    >
      {name}
    </button>
  )
}

SectionButton.propTypes = {
  name: PropTypes.string,
  active: PropTypes.bool,
  activateSection: PropTypes.func,
}

export default SectionButton
