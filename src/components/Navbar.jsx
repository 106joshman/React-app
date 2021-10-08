import './Navbar.css';
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/article">Article</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}
 
export default Navbar;