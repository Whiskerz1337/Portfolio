import React, { useState, useEffect } from 'react'
import BioSection from './Sections/BioSection'
import SkillsSection from './Sections/SkillsSection'
import ProjectsSection from './Sections/ProjectsSection'
import ContactSection from './Sections/ContactSection'
import SectionButton from './Components/SectionButton'
// import { Fade } from './styles/transitions'
import SmoothCollapse from './styles/SmoothCollapse'
const Main = () => {
  const [activeSection, setActiveSection] = useState(null)
  const sectionButtons = [
    { content: 'Check out my projects', name: 'projects' },
    { content: 'See my skills', name: 'skills' },
    { content: 'Bio', name: 'bio' },
    { content: 'Get in touch!', name: 'contact' },
  ]

  const activateSection = (targetName) => {
    if (activeSection !== targetName) setActiveSection(targetName)
    else setActiveSection('projects')
  }

  useEffect(() => {
    if (activeSection === null) {
      setTimeout(function () {
        setActiveSection('projects')
      }, 200)
    }
  }, [])

  return (
    <>
      <div className='container mx-auto  w-full bg-primary p-4'>
        <section id='title' className='mb-2'>
          <h1 className='mb-1 flex justify-center self-center font-exo text-5xl text-sith'>
            Luke Bailey
          </h1>
          <h1 className='mb-1 flex justify-center self-center text-center font-exo text-2xl text-primary'>
            Bridging Cybersecurity and Software Development Expertise
          </h1>
        </section>

        <section
          id='main-section'
          className='flex flex-col justify-start border-t-2 border-arcade py-4'
        >
          <div className='container flex w-full flex-row items-center justify-evenly py-1'>
            {sectionButtons.map((section, index) => (
              <SectionButton
                key={'section-button-' + index}
                name={section.name}
                content={section.content}
                active={activeSection === section.name}
                activateSection={activateSection}
              />
            ))}
          </div>
          <SmoothCollapse in={activeSection === 'bio'}>
            <BioSection id='bio' />
          </SmoothCollapse>
          <SmoothCollapse in={activeSection === 'contact'}>
            <ContactSection id='contact' />
          </SmoothCollapse>
          <SmoothCollapse in={activeSection === 'skills'}>
            <SkillsSection id='skills' />
          </SmoothCollapse>
          <SmoothCollapse in={activeSection === 'projects'}>
            <ProjectsSection id='projects' />
          </SmoothCollapse>
        </section>
        <div className='border-t-2 border-arcade'></div>
      </div>
    </>
  )
}

export default Main
