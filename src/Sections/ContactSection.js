import React from 'react'
import LinkButton from '../Components/LinkButton'
import { links } from '../Data/data'

const ContactSection = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center p-4'>
        <h2 className='m-4 flex justify-center self-center font-exo text-4xl text-primary'>
          Contact
        </h2>
        <p className='mb-20 text-center font-roboto text-lg leading-relaxed text-primary'>
          Whether you want to hire me for a project or role, work on a project together, or simply
          grow your network, don&apos;t hesitate to get in touch!
        </p>
        <div className='container my-auto flex flex-row items-center justify-around'>
          {links.map((item, index) => {
            return (
              <LinkButton
                key={'mainlinkbutton-' + index}
                index={index}
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
