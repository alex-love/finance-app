import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="green" role="navigation">
          <div className="nav-wrapper container">
            <Link id="logo-container" to="/" className="brand-logo">
              Finance App
            </Link>
            {/* <ul className="right hide-on-med-and-down">
                            <li><a href="#">Navbar Link</a></li>
                        </ul>

                        <ul id="nav-mobile" className="sidenav">
                            <li><a href="#">Navbar Link</a></li>
                        </ul>
                        <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a> */}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
