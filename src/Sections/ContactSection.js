import React, { useState, useLayoutEffect } from 'react'
import LinkButton from '../Components/LinkButton'
import { links } from '../Data/data'
import SmoothFade from '../styles/SmoothFade'

const ContactSection = () => {
  const [appear, setAppear] = useState(false)

  useLayoutEffect(() => {
    if (appear === false) {
      setTimeout(function () {
        setAppear(true)
      }, 250)
    }
  }, [])

  return (
    <>
      <div className='mb-12 mt-4 flex min-w-full  max-w-full flex-col items-center justify-evenly border-t-2 border-arcade'>
        <h2 className='m-4 mb-12 flex justify-center self-center font-exo text-4xl text-secondary'>
          Contact
        </h2>
        <p className='mb-20 mt-12 text-center font-exo text-2xl leading-relaxed text-primary sm:mx-96 sm:mb-24'>
          Whether you want to hire me for a project or role, work on a project together, or simply
          grow your network, don&apos;t hesitate to <b className='text-indigo-700'>get in touch!</b>
        </p>
        <SmoothFade in={appear}>
          <div className='container my-auto flex max-w-full flex-row flex-wrap justify-evenly sm:scale-100'>
            {links.map((item) => {
              return (
                <LinkButton
                  key={'mainlinkbutton-' + item.label}
                  url={item.url}
                  label={item.label}
                  icon={item.icon}
                />
              )
            })}
          </div>
        </SmoothFade>
      </div>
    </>
  )
}

export default ContactSection
