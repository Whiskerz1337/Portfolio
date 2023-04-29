import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'

const SmoothFade = ({ in: inProp, children }) => {
  const nodeRef = useRef(null)
  const [opacity, setOpacity] = useState(0)

  const onEntering = () => {
    setOpacity(1)
  }

  const onEntered = () => {
    setOpacity(1)
  }

  const onExiting = () => {
    setOpacity(0)
  }

  useEffect(() => {
    if (inProp) {
      setOpacity(1)
    } else {
      setOpacity(0)
    }
  }, [inProp])

  return (
    <Transition
      nodeRef={nodeRef}
      in={inProp}
      timeout={800}
      onEntering={onEntering}
      onEntered={onEntered}
      onExiting={onExiting}
      unmountOnExit
    >
      {() => (
        <div
          ref={nodeRef}
          style={{
            opacity: opacity,
            transition: 'opacity 800ms ease-in-out',
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  )
}

SmoothFade.propTypes = {
  in: PropTypes.bool.isRequired,
  children: PropTypes.node,
}

export default SmoothFade
