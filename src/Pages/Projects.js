import React from 'react'
import PortfolioItem from '../Components/PortfolioItem'

const Projects = () => {
  return (
    <PortfolioItem
      title={'IPvariables'}
      description={
        'A CLI tool written in bash for saving a target IP address to an environment variable whilst pentesting'
      }
      imageUrl={`${process.env.PUBLIC_URL}/kali_logo.png`}
      technologies={['Bash']}
      link={'https://github.com/Whiskerz1337/IP_variables'}
    />
  )
}

export default Projects
