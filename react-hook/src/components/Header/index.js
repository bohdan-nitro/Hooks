import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <nav className={"navbar navbar-light"}>
            <div className="container">
                <Link>Media</Link>
            </div>
        </nav>
    )
}
export default Header;