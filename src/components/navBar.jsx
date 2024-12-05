import { Link } from "react-router-dom";
import '../assets/styles/Navbar.css'

export default function Navbar(){
    return(
     <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
    </nav>
    
    )
}