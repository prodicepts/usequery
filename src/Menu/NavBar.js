import {Link} from "react-router-dom";
const NavBar = () => {
    return (
        <nav>
                    <Link to="/" className='Link'>Home</Link>
                    <Link to="/about" className='Link'>About Us</Link>
                    <Link to="/contact" className='Link'>Contact Us</Link>

        </nav>
    );
}
export default NavBar;