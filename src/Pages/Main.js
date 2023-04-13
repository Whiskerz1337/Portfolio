import React from 'react'
import NavBar from '../components/NavBar'

const Main = () => {
  const skills = [
    'Network security',
    'Information security',
    'Incident response',
    'Penetration testing',
    'Risk management',
    'Compliance',
    'Security architecture',
    'Threat intelligence',
    'Forensics',
    'Communication',
  ]

  const technology = [
    'Firewalls',
    'Intrusion Detection/Prevention Systems (IDS/IPS)',
    'Virtual Private Networks (VPNs)',
    'Antivirus/Antimalware Software',
    'Encryption',
    'Access Control Systems',
    'Security Information and Event Management (SIEM)',
    'Penetration Testing Tools',
    'Vulnerability Scanning Tools',
    'Forensic Tools',
  ]

  return (
    <>
      <NavBar />
      <div className='container mx-auto px-4 py-8'>
        <section className='mb-8'>
          <h1 className='mb-4 text-4xl font-bold'>About Me</h1>
          <p className='text-lg leading-relaxed'>
            Hi, I&apos;m Luke, a cybersecurity student from the UK with a passion for gaming,
            problem-solving, and software development. As an strong communicator, I can effectively
            collaborate with diverse teams and clients in the ever-evolving world of digital
            security. My love for Capture The Flag (CTF) challenges has honed my critical thinking
            skills, while working on practical projects in my spare time has contributed positively
            to my skillset. This blend of theoretical and hands-on experience fuels my ambition to
            become a highly-skilled cybersecurity professional.
          </p>
        </section>
        <section>
          <h2 className='mb-4 text-3xl font-bold'>Skills</h2>
          <ul className='grid grid-cols-2 gap-4 md:grid-cols-3'>
            {skills.map((skill, index) => (
              <li
                key={index}
                className='rounded border border-gray-200 p-4 text-center text-lg font-semibold'
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className='mb-4 text-3xl font-bold'>Technology</h2>
          <ul className='grid grid-cols-2 gap-4 md:grid-cols-3'>
            {technology.map((tech, index) => (
              <li
                key={index}
                className='rounded border border-gray-200 p-4 text-center text-lg font-semibold'
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}

export default Main
