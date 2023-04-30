import React from 'react'
import LinkButton from '../Components/LinkButton'
import { links } from '../Data/data'

const ContactSection = () => {
  return (
    <>
      <div className='mb-12 mt-4 flex min-w-full flex-col items-center justify-center border-t-2 border-arcade'>
        <h2 className='m-4 flex justify-center self-center font-exo text-4xl text-secondary'>
          Contact
        </h2>
        <p className='mb-20 text-center font-roboto text-2xl leading-relaxed text-primary sm:mx-72'>
          Whether you want to hire me for a project or role, work on a project together, or simply
          grow your network, don&apos;t hesitate to get in touch!
        </p>
        <div className='container my-auto flex flex-row items-center justify-around'>
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
      </div>
    </>
  )
}

export default ContactSection
