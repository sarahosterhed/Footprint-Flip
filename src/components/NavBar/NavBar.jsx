import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return (
        <>
            <nav>
                <div className="languages">
                    <Link to="/en">
                        <li>Svenska</li>
                    </Link>
                    <Link to="/sv">
                        <li>English</li>
                    </Link>

                </div>

            </nav>
        </>
    );
};

export default NavBar;