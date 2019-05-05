import React from 'react';
import { Link } from 'react-router-dom';
//import { Globals } from "@/models/api";
import logo from '../assets/logo.svg';

const Globals = { user: null, oAuthUser: null };

export default props=> (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link className="navbar-brand" to="/" >
            <img src={logo} classNameName="App-logo" alt="logo" height="30" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item ">
                    <Link className="nav-link" to="/" active-className="active" exact>Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/About" active-className="active">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/MyFriends">My Friends</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link disabled" to="#"  active-className="active">Disabled</Link>
                </li>
            </ul>
            {!props.user &&
            <form className="form-inline mt-2 mt-md-0" >
                <Link to="/Login" className="nav-link">Login</Link>
                <Link to="/Register" className="nav-link">Sign Up</Link>
            </form>
            }
            { props.user &&
            <span className="navbar-text">
                <img width="30" src={`https://graph.facebook.com/${Globals.oAuthUser.id}/picture`} alt="facebook img" />
                Welcome {props.user.FirstName} {props.user.LastName}
            </span>
            }

        </div>
    </nav>
    
)
