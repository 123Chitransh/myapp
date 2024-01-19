import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <h1 style={{color:props.mode === "dark"?"white":"black"}}>{props.title}</h1>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-4">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-disabled="true" to='/about'>{props.about}</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                    </div>
                    <div class={`form-check form-switch mx-3 text-${props.mode==='light'? 'Dark' : 'light'}`}>
                        <input class="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label class="form-check-label" for="flexSwitchCheckDefault">{props.level}</label>
                    </div>
                </div>
            </nav>
        </div>
    )
}
