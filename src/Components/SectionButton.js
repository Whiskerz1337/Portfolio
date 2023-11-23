import React from 'react'
import PropTypes from 'prop-types'
import '../styles/button.css'

const SectionButton = ({ name, content, active, activateSection }) => {
  return (
    <button
      onClick={() => activateSection(name)}
      className={
        active
          ? 'custom-shadow flex h-20 w-28 scale-100 items-center justify-center rounded-2xl border border-white font-exo text-2xl text-primary transition-all ease-linear  hover:text-secondary sm:h-16 sm:w-40'
          : ' custom-shadow flex h-20 w-28 scale-95 items-center justify-center rounded-2xl border border-white/0 font-exo text-2xl text-primary transition-all  ease-linear hover:scale-100 hover:border-white/30 hover:text-secondary  sm:h-16 sm:w-40'
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
