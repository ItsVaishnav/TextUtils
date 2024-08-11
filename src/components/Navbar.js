import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      
      {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
      <a className="navbar-brand" herf="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
            <a className="nav-link active" aria-current="page" herf="#">Home</a>
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" to="/About">{props.about}</Link> */}
            <a className="nav-link" herf="#">{props.about}</a>
          </li>
          
        </ul>
        <label htmlFor="exampleColorInput" className="form-label">Set Yours Choise Dark Mode</label>
<input type="color" className="form-control form-control-color" id="ColorInput" title="Choose your color" onChange={props.setColorCall}></input>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="modeswitch"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> */}
      </div>
    </div>
    
  </nav>
  )
}

Navbar.propTypesopTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string
}


Navbar.defaultProps = {
  title: "Set Title",
  about: "About Us"
};
