import { Link } from "react-router-dom";
import './styles.css';


export default function Navbar(){
    return ( <div className="nav safe">
      <h2 id="brand">Dev for Society</h2>
        <Link className="nav__icon" to="/">Home</Link>
        <Link className="nav__icon" to="about">About</Link>
        <Link className="nav__icon" to="contact">Contact</Link>
      </div>);
}