import PropTypes from 'prop-types'
import '../styles/imageOpacity.css'

const TipContent = ({ imageUrl }) => {
  return (
    <>
      <div className='relative min-h-full overflow-hidden'>
        <img
          src={imageUrl}
          alt='Background'
          className='absolute inset-0 hidden object-cover object-center opacity-10 sm:block'
        />
        <div className='relative'></div>
        <div className='px-4 sm:p-6'>
          <h2 className='hidden justify-center self-center text-center font-exo text-lg text-secondary sm:block sm:text-2xl'>
            Solution
          </h2>
          <br></br>
          <p className='font-roboto text-sm text-primary sm:text-base'>
            Tip is a command line interface (CLI) tool written in Rust that simplifies managing
            multiple target IP addresses by storing them in a file and allowing you to easily add,
            remove, list, and update targets. It also provides a shell function to source the
            targets into your local variables.
          </p>
          <br></br>
          <p className='font-roboto text-sm text-primary sm:text-base'>
            Normal variable assignment is possible in Linux by default, however these are lost on
            reboot and when creating new shell instances. Personally I regularly find myself with
            multiple terminal windows open running different scans, and having to retype (and
            remember) an IP address over and over again. This tool is primarly designed to aid
            penetration testers and ethical hackers, however will also be useful for network
            engineers/admins whilst testing connectivity and troubleshooting.
          </p>
          <br></br>
          <p className='font-roboto text-sm text-primary sm:text-base'>
            The tool works by storing key-value pairs as target_name=IP, which can be added via
            <i>&apos;tip add cloudflare 1.1.1.1&apos;.</i> Once added, targets are immediately
            accessible as a variable, and can be passed into other tools using the following syntax:
          </p>
          <br></br>
          <p className='font-roboto text-sm text-primary sm:text-base'>
            <i>echo $cloudflare</i>
            <br></br>
            <i>ping $cloudflare</i>
            <br></br>
            <i>nmap -sV -sC $cloudflare</i>
          </p>
        </div>
      </div>
    </>
  )
}

TipContent.propTypes = {
  imageUrl: PropTypes.string,
}

export default TipContent
