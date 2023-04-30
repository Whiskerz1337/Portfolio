import PropTypes from 'prop-types'
import '../styles/imageOpacity.css'

const RaspiContent = ({ imageUrl }) => {
  return (
    <div className='relative min-h-full overflow-hidden'>
      <img
        src={imageUrl}
        alt='Background'
        className='absolute inset-0 hidden opacity-10 sm:block'
      />
      <div className='relative'>
        <div className='px-4 sm:p-6'>
          <h2 className='hidden justify-center self-center text-center font-exo text-lg text-primary sm:block sm:text-xl'>
            Solution
          </h2>
          <br></br>
          <p className='font-roboto text-sm text-primary sm:text-base'>
            This project is a collaboration between myself and another Cybersecurity student, and is
            currently in development. We wanted to devise a way to keep track of CSGO skin prices
            over time, and have these presented in graph form to the user, with various filtering
            options.
          </p>
          <div className='hidden sm:block'>
            <br></br>
            <p className='font-roboto text-sm text-primary sm:text-base'>
              To achieve this, we are running a separate server and client on NodeJS using the
              &apos;Concurrently&apos; package. The server is running Express, and contains the
              logic for the database connection, as well as timed price update scripts.
            </p>
          </div>
          <br></br>
          <p className='font-roboto text-sm text-primary sm:text-base'>
            The front-end is built using React, which dynamically renders a cascade of options based
            on user selection. Once the full selection has been done, we use this information to
            generate a Steam Community API URL, which we can use to grab skin data.
          </p>
          <br></br>
          <p className='font-roboto text-sm text-primary sm:text-base'>
            We are including a watchlist, where users can add a particular skin to the list, and our
            Express server will regularly get price updates for the skin from the API, and save them
            to the Firebase database.
          </p>
          <br></br>
          <p className='font-roboto text-sm text-primary sm:text-base'>
            Once data has been collected, we pull down these prices, and present them to the user in
            graph form, displaying price points at different times. This system allows for multiple
            skins to be added to the watchlist at any one time, with a variety of filtering options
            for display.
          </p>
        </div>
      </div>
    </div>
  )
}

RaspiContent.propTypes = {
  imageUrl: PropTypes.string,
}

export default RaspiContent
