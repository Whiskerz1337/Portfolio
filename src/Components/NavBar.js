import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/CV">CV</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
