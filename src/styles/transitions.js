import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import './transitions.css'

const duration = 1000

export function Fade({ in: inProp, children, appear }) {
  const nodeRef = useRef(null)
  return (
    <Transition nodeRef={nodeRef} in={inProp} timeout={duration} appear={appear}>
      {(state) => (
        <div
          ref={nodeRef}
          className={`${
            state === 'entering' || state === 'entered' ? 'fade-enter-active' : 'fade-exit-active'
          }`}
        >
          {children}
        </div>
      )}
    </Transition>
  )
}

Fade.propTypes = {
  in: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  appear: PropTypes.bool,
}

Fade.defaultProps = {
  appear: false,
}

export function Collapse({ in: inProp, children }) {
  const nodeRef = useRef(null)
  return (
    <Transition nodeRef={nodeRef} in={inProp} timeout={duration} unmountOnExit>
      {(state) => (
        <div
          ref={nodeRef}
          className={`${
            state === 'entering' || state === 'entered'
              ? 'collapse-enter-active'
              : state === 'exiting' || state === 'exited'
              ? 'collapse-exit-active'
              : ''
          }`}
        >
          {children}
        </div>
      )}
    </Transition>
  )
}

Collapse.propTypes = {
  in: PropTypes.bool.isRequired,
  children: PropTypes.node,
}
