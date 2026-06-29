import { Link } from "react-router-dom";

function NavBar (){
    return <nav className="navabar">
        <div className="navbar-brand">
            <Link to="/">Movie Info</Link>
        </div>
        <div className="navbar-links">
            <link to="/" className="nav-link">Home</link>
             <link to="/" className="nav-link">Favorites</link>
        </div>
    </nav>
}

export default NavBar