import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='bg-blue-500 p-4'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          <ul className='flex space-x-4'>
            <li>
              <Link to='/' className='text-white hover:text-blue-300'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/Projects' className='text-white hover:text-blue-300'>
                Projects
              </Link>
            </li>
            <li>
              <Link to='/CV' className='text-white hover:text-blue-300'>
                CV
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
