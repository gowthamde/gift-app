import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {

    let menu = null;
    console.log(localStorage.getItem('userType'))

    if (localStorage.getItem('userType') !== 'appUser') {
        menu = (
            <ul className="navbar-nav ml-auto">
            <li className="nav-item nav-link">
                <Link to="/signin" className="nav-link">
                          Login
                          </Link>
                </li>
                  <li className="nav-item nav-link">
                      <Link to="/signup" className="nav-link">
                       Signup
                      </Link>
                  </li>
                  </ul>
        )
    } else {
        <ul className="navbar-nav ml-auto">
                  <li className="nav-item nav-link">
                      Logout
                      </li>
            </ul>
    }
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <Link to="/" className="navbar-brand">
                Gift_App
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                      <Link to="/for-her" className="nav-link">
                          For Her
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/for-him" className="nav-link">
                          For Him
                      </Link>
                  </li>
                </ul>
                {
                    menu
                }
            </div>
        </nav>
        </>
    )
}

export default Header;