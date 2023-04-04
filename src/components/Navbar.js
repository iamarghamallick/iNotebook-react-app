import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import noteContext from "../context/notes/noteContext"

const Navbar = (props) => {
    const context = useContext(noteContext);
    const { user } = context;
    let nevigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        props.showAlert("Logged out successfully", 'success');
        nevigate('/login');
    }
    let location = useLocation();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">iNotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                            </li>

                        </ul>
                        {!localStorage.getItem('token')
                            ? <form className="d-flex">
                                <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                                <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                            </form>
                            : <form className="d-flex">
                                <Link to='/userprofile' className="btn btn-dark mx-1 border border-primary"><FontAwesomeIcon icon={faUser} /> &nbsp; {user.name}</Link>
                                <Link onClick={handleLogout} className="btn btn-primary mx-1" to="/login" role="button">Logout</Link>
                            </form>}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
