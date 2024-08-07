import React,{ useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import "./Navbar.css";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div>
      <nav>
        <Link to="/" className="title">Home
        </Link>
        <div className='menu' onClick={()=>{
          setMenuOpen(!menuOpen);
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li>
                <NavLink to="/about">About</NavLink>
                </li>

                <li
                        className="dropdown"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <NavLink to="/">RegistrationPage</NavLink>
                        {dropdownOpen && (
                            <ul className={dropdownOpen ? 'dropdown-menu show' : 'dropdown-menu'}>
                                <li><NavLink to="/Registration">Registration Page</NavLink></li>
                            </ul>
                        )}
                    </li>

                <li
                        className="dropdown"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <NavLink to="/">Login</NavLink>
                        {dropdownOpen && (
                            <ul className={dropdownOpen ? 'dropdown-menu show' : 'dropdown-menu'}>
                                <li><NavLink to="/LoginPage">Login Page</NavLink></li>
                            </ul>
                        )}
                    </li>
                <li
                        className="dropdown"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <NavLink to="/services">Products</NavLink>
                        {dropdownOpen && (
                            <ul className={dropdownOpen ? 'dropdown-menu show' : 'dropdown-menu'}>
                                <li><NavLink to="/RefinedSugar">Refined Sugar</NavLink></li>
                                <li><NavLink to="/BrownSugar">Brown Sugar</NavLink></li>
                                <li><NavLink to="/Jaggery">Jaggery(Gud)</NavLink></li>
                                <li><NavLink to="/Molasses">Molasses</NavLink></li>
                            </ul>
                        )}
                    </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
                </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
