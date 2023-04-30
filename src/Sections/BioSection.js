import React from 'react'

const BioSection = () => {
  return (
    <section id='bio'>
      <div className=' mb-8 mt-4 flex flex-col items-center justify-center border-t-2 border-arcade'>
        <div className='mx-2 sm:mx-72'>
          <h2 className='m-4 flex justify-center self-center font-exo text-4xl text-secondary'>
            Bio
          </h2>
          <p className='text-center font-roboto text-base leading-relaxed text-primary sm:text-base'>
            Hi, I&apos;m Luke, a British cybersecurity student and versatile software developer
            based in Melbourne, Australia. My unrelenting passion for technology has driven me to
            merge my expertise in cybersecurity with my proficiency in software development.
          </p>
          <br></br>
          <p className='text-center font-roboto text-base leading-relaxed text-primary sm:text-base'>
            Having successfully completed the Certificate IV in Cybersecurity, I&apos;m now pursuing
            the Advanced Diploma in Cybersecurity to further expand my knowledge. My proficiency in
            various programming languages, such as Python, JavaScript, Bash, JSX, and recently Rust,
            keeps me at the forefront of the ever-evolving tech landscape.
          </p>
          <br></br>
          <p className='text-center font-roboto text-base leading-relaxed text-primary sm:text-base'>
            I have a particular love for penetration testing and CTF challenges, and have recently
            released a CLI tool for penetration testers which you can{' '}
            <a
              href='https://www.github.com/whiskerz1337/tip'
              target='_blank'
              rel='noopener noreferrer'
              className='cursor-pointer text-indigo-700 underline'
            >
              View on GitHub.
            </a>
          </p>

          <br></br>
          <p className='text-center font-roboto text-base leading-relaxed text-primary sm:text-base'>
            I am an ardent advocate for learning through hands-on experiences and take immense
            pleasure in diving into personal and collaborative projects. By actively engaging in
            opportunities to tackle complex problems, I continually broaden my skillset in a wide
            rage of areas.
          </p>
          <br></br>
          <p className='text-center font-roboto text-base leading-relaxed text-primary sm:text-base'>
            As I embark on the next chapter of my career, I am eager to secure an entry-level role
            in the cybersecurity field, where I can harness my unique fusion of cybersecurity and
            software development expertise. With my unwavering passion, exceptional problem-solving
            abilities, and keen enthusiasm for learning, I am confident in my ability to leave a
            lasting impact on any organization I join.
          </p>
        </div>
      </div>
    </section>
  )
}

export default BioSection
