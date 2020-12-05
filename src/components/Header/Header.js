import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Login from '../Common/Login/Login';

const Header = () => {
    let dialogContent = null;

    const handleLoginDialog = () => {
        dialogContent = <div>
            <Login value={ true }/>
            </div>
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
                <ul className="navbar-nav ml-auto">
                <li className="nav-item nav-link" onClick={handleLoginDialog}>
                          Login
                </li>
                  <li className="nav-item nav-link">
                      Signup
                  </li>
                </ul>
            </div>
        </nav>
        {
            dialogContent
        }
        </>
    )
}

export default Header;