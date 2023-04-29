import PropTypes from 'prop-types'
import '../styles/imageOpacity.css'

const RaspiContent = ({ imageUrl }) => {
  return (
    <div className='relative min-h-full overflow-hidden'>
      <img src={imageUrl} alt='Background' className='absolute inset-0 opacity-10' />
      <div className='relative'>
        <div className='p-6'>
          <h2 className='flex justify-center self-center text-center font-exo text-xl text-primary'>
            Solution
          </h2>
          <br></br>
          <p className='font-roboto text-primary'>
            My client for this project requested a system to keep track of truck damage and cargo.
            This is a System designed for a removals company that leverages Google Forms for data
            collection and Raspberry Pis for image capturing. When a truck arrives at the depot, the
            crew fills out a Google Form with relevant load information. This form submission serves
            as a trigger for the camera system, eliminating the need for motion detection or manual
            activation. I opted for four Raspberry Pi devices, which are cost-effective, easily
            programmable, and compatible with the high-resolution camera module V3.
          </p>
          <br></br>
          <p className='font-roboto text-primary'>
            To manage the incoming data, I set up a webhook listener on Ubuntu Server, utilizing
            Python with Quart and Ngrok. Although I initially used Flask for the server, I switched
            to Quart for its superior multitasking capabilities. Upon receiving the Google Form
            webhook, the server sends GET requests to all Raspberry Pis, which are listening through
            a Flask route. Before capturing an image, the cameras undergo a brief configuration and
            autofocus cycle. The captured images are then sent back in the response.
          </p>
          <br></br>
          <p className='font-roboto text-primary'>
            Simultaneously, the server creates a new folder on Google Drive using data from the
            webhook. Once the images are received, they are uploaded to this folder, and upon
            successful upload, deleted from the server.
          </p>
          <br></br>
          <p className='font-roboto text-primary'>
            Currently, I employ Ngrok to expose the server to the web, ensuring easy encryption of
            web traffic. In the future, I plan to open a dedicated port and use a reverse-proxy for
            enhanced server and network protection.
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
