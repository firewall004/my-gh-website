import './Navbar.css'
import { Link } from "react-router-dom"

const Navbar = ({ menuItems }) => {
    return (
        <nav className="NavbarItems">
            <ul className="nav-menu">
                {menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={item.url} className='nav-link'>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar
