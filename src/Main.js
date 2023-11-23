import React, { useState, useLayoutEffect } from 'react'
import Footer from './Components/Footer'
import BioSection from './Sections/BioSection'
import SkillsSection from './Sections/SkillsSection'
import ProjectsSection from './Sections/ProjectsSection'
import ContactSection from './Sections/ContactSection'
import SectionButton from './Components/SectionButton'
import SmoothCollapse from './styles/SmoothCollapse'
import SmoothFade from './styles/SmoothFade'

const Main = () => {
  const [activeSection, setActiveSection] = useState(null)

  const sectionButtons = [
    { content: 'Projects', name: 'projects' },
    { content: 'Bio', name: 'bio' },
    { content: 'Skills', name: 'skills' },
    { content: 'Contact', name: 'contact' },
  ]

  const activateSection = (targetName) => {
    if (activeSection !== targetName) setActiveSection(targetName)
    else setActiveSection('')
  }

  useLayoutEffect(() => {
    if (activeSection === null) {
      setTimeout(function () {
        setActiveSection('projects')
      }, 300)
    }
  }, [])

  return (
    <>
      <div className='container mx-auto min-h-screen w-full bg-faster-black-radial-gradient p-4'>
        <section id='title' className='mb-2'>
          <h1 className='mb-1 flex justify-center self-center font-exo text-2xl text-secondary sm:text-4xl'>
            Luke Bailey
          </h1>
          <h1 className='mb-1 flex justify-center self-center text-center font-exo text-lg text-primary sm:text-2xl'>
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
            <div className='min-h-[60vh] min-w-full'>
              <ContactSection id='contact' />
            </div>
          </SmoothCollapse>
          <SmoothCollapse in={activeSection === 'skills'}>
            <SkillsSection id='skills' />
          </SmoothCollapse>
          <SmoothCollapse in={activeSection === 'projects'}>
            <ProjectsSection id='projects' />
          </SmoothCollapse>
        </section>
        <div className='border-t-2 border-arcade'></div>
        <div className='sticky top-[100vh] min-w-full'>
          <SmoothFade in={activeSection !== 'contact'}>
            <Footer />
          </SmoothFade>
        </div>
      </div>
    </>
  )
}

export default Main
