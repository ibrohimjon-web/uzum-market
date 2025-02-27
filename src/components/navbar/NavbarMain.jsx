import "./Navbar.css"
import NavbarBottom from "./NavbarBottom"
import NavbarMiddle from './NavbarMiddle'
import NavbarTop from "./NavbarTop"

const NavbarMain = () => {
  return (
    <div className='navbar-main'>
      <NavbarTop />
      <NavbarMiddle />
      <NavbarBottom />
    </div>
  )
}

export default NavbarMain