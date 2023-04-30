import PropTypes from 'prop-types'
import '../styles/imageOpacity.css'

const RaspiContent = ({ imageUrl }) => {
  return (
    <div className='relative min-h-full overflow-hidden'>
      <img
        src={imageUrl}
        alt='Background'
        className='absolute inset-0 hidden min-w-full object-fill object-center opacity-20 sm:block '
      />
      <div className='relative'>
        <div className='px-4 sm:p-6'>
          <h2 className=' hidden justify-center self-center text-center font-exo text-lg text-primary sm:block sm:text-xl'>
            Solution
          </h2>
          <br></br>
          <p className='font-roboto text-sm text-primary sm:text-base'>
            My client for this project, a removals company, requested a time and attendance
            application with some additional features, as they were currently using multiple
            applications for time and attendance, payroll management and fleet management.
          </p>
          <br></br>
          <p className='font-roboto text-sm text-primary sm:text-base'>
            I personally dealt with the majority of the project design, as well as the front-end in
            React, though I&apos;ve yet to properly style the application. Our most recent demo (dev
            branch) features fully functional user management with filtering, authentication,
            authorisation, schedule planning, publishing, timesheet validation and editing.
          </p>
          <br></br>
          <p className='font-roboto text-sm text-primary sm:text-base'>
            The flagship feature of the application is the schedule planner, which allows operations
            managers to quickly and efficiently plan out the next days shifts. Each user in the
            system is an employee which contains a roster. When the schedule is being planned for a
            particular day, the planner automatically pulls in employees that are rostered for that
            day, along with other filtering options, such as role and location. These users can then
            be added to truck routes (usually teams of two), along with a start time and shift
            message.
          </p>
          <div className='hidden sm:block'>
            <br></br>
            <p className='font-roboto text-sm text-primary sm:text-base'>
              Once this has been published, the plan is stored in the database, and is available for
              editing. The actual start, finish and break times are entered by each employee via the
              phone application. These can then later be validated via the operations team.
            </p>
            <br></br>
            <p className='hidden font-roboto text-sm text-primary sm:block sm:text-base'>
              Due to the sheer scale of this project, along with personal time contraints, the
              project is currently on hold.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

RaspiContent.propTypes = {
  imageUrl: PropTypes.string,
}

export default RaspiContent
