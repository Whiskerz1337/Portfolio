import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'

const SmoothCollapse = ({ in: inProp, children }) => {
  const nodeRef = useRef(null)
  const [maxHeight, setMaxHeight] = useState('0px')

  const onEntering = () => {
    setMaxHeight(`${nodeRef.current.scrollHeight}px`)
  }

  const onEntered = () => {
    setMaxHeight('auto')
  }

  const onExiting = () => {
    setMaxHeight(`${nodeRef.current.scrollHeight}px`)
    setTimeout(() => {
      setMaxHeight('0px')
    }, 0)
  }

  useEffect(() => {
    if (inProp) {
      if (window.innerWidth <= 640) {
        // Adjust the value to your desired breakpoint
        setMaxHeight('80vh') // Adjust the value based on your desired mobile height
      } else {
        setMaxHeight('auto')
      }
    } else {
      setMaxHeight('0px')
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
            overflow: 'hidden',
            maxHeight: maxHeight,
            transition: 'max-height 400ms ease-in-out',
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  )
}

SmoothCollapse.propTypes = {
  in: PropTypes.bool.isRequired,
  children: PropTypes.node,
}

export default SmoothCollapse
