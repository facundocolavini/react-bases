import { Link, NavLink } from 'react-router-dom'

type Props = {}

interface Navbar {

}

export const Navbar:  React.FC<Navbar> = (props: Props) => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">useContext</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink 
              className={({isActive})=>`nav-link ${isActive ? 'active' : ''}`}
              to="/"
            >Home
            </NavLink>
            <NavLink 
              className={({isActive})=>`nav-link ${isActive ? 'active' : ''}`}
              to="/login"
              >Login
              </NavLink>
            <NavLink 
              className={({isActive})=>`nav-link ${isActive ? 'active' : ''}`}
              to="/about"
              >About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
        // <Link to="/">Home</Link>
        // <Link to="/about">About</Link>
        // <Link to="/login">Login</Link>
 
  )
}