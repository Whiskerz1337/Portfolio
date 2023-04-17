import React, { useState } from 'react'
import SkillsSection from './Sections/SkillsSection'
import ProjectsSection from './Sections/ProjectsSection'
import ContactSection from './Sections/ContactSection'
import SectionButton from './Components/SectionButton'

const Main = () => {
  const [activeSection, setActiveSection] = useState([
    { name: 'See my skills', active: false },
    { name: 'Check out my projects', active: false },
    { name: 'Get in touch!', active: false },
  ])

  const activateSection = (targetName) => {
    setActiveSection(
      activeSection.map((section) => {
        if (targetName === section.name) return { ...section, active: !section.active }
        else return { ...section, active: false }
      }),
    )
    const targetSection = document.getElementById('main-section')
    targetSection.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className='container mx-auto w-full bg-primary px-4 py-8'>
        <section id='bio' className='mb-8'>
          <h1 className='mb-2 flex justify-center self-center font-exo text-5xl text-sith'>
            Luke Bailey
          </h1>
          <h1 className='mb-8 flex justify-center self-center text-center font-exo text-2xl text-primary'>
            Bridging Cybersecurity and Software Development Expertise
          </h1>
          <p className='text-center font-roboto text-xl leading-relaxed text-primary'>
            Hi, I&apos;m Luke, a Melbourne based cybersecurity student from the UK with a passion
            for penetration testing, problem-solving, and software development. As a strong
            communicator, I can effectively collaborate with diverse teams and clients in the
            ever-evolving world of digital security.
            <br />
            <br />
            My love for Capture The Flag (CTF) challenges has honed my critical thinking skills,
            while working on both team-based and solo projects in my spare time has contributed
            positively to my skillset. This blend of theoretical and hands-on experience fuels my
            ambition to become a highly-skilled cybersecurity professional.
          </p>
        </section>
        <section
          id='main-section'
          className='flex min-h-screen flex-col justify-start border-t-2 border-arcade p-10'
        >
          <div className='container flex w-full flex-row items-center justify-evenly'>
            {activeSection.map((section, index) => (
              <SectionButton
                key={'section-button-' + index}
                name={section.name}
                active={section.active}
                activateSection={activateSection}
              />
            ))}
          </div>
          {activeSection[0].active && <SkillsSection />}
          {activeSection[1].active && <ProjectsSection />}
          {activeSection[2].active && <ContactSection />}
        </section>
      </div>
    </>
  )
}

export default Main
