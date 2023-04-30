import React from 'react'
import { footerLinks } from '../Data/data'
import FooterButton from './FooterButton'

const Footer = () => {
  return (
    <div className='flex  flex-row'>
      <div className='mb-6 flex w-80 flex-row items-end p-4 font-exo text-sm text-arcade sm:text-lg'>
        Luke Bailey - 2023
      </div>
      <div className='container flex flex-row justify-end p-4'>
        {footerLinks.map((item) => {
          const { url, label, icon } = item
          return <FooterButton key={'footer-button-' + label} url={url} label={label} icon={icon} />
        })}
      </div>
    </div>
  )
}

export default Footer
