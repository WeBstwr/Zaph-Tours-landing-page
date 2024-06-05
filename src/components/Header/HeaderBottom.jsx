import{ Link } from "react-router-dom"
import "./header.css";

const HeaderBottom = () => {
  return (
    <div className="header-bottom">
        <nav className="header-nav">
            <ol className="header-nav-list">
                <li className="header-nav-item">
                    <Link to="/" >home</Link>
                </li>
                <li className="header-nav-item">
                    <Link to="/destinations" >destinations</Link>
                </li>
                <li className="header-nav-item">
                    <Link to="/trip-types" >trip types</Link>
                </li>
                <li className="header-nav-item">
                    <Link to="/contact" >contact</Link>
                </li>
            </ol>
        </nav>
    </div>
  )
};

export default HeaderBottom;
