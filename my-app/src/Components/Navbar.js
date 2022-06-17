import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props){
    return(
        <nav classname="navbar navbar-expand-lg navbar-light bg-light">
  <div classname="container-fluid">
    <a classname="navbar-brand" href="/">{props.title}</a> 
    {/* receiving value from app.js using props, props are read-only  */}

    <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span classname="navbar-toggler-icon"></span>
    </button>
    <div classname="collapse navbar-collapse" id="navbarSupportedContent">
      <ul classname="navbar-nav me-auto mb-2 mb-lg-0">
        <li classname="nav-item">
          <a classname="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li classname="nav-item">
          <a classname="nav-link" href="#">About</a>
        </li>
      </ul>
      <form classname="d-flex">
        <input classname="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button classname="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}

// it defines what type of input we will be sending using props to this file
//isRequired tells us that we must have a value to the variable either by default proptype or through import, it ensures that the props are not undefined
Navbar.proptypes = {
    title: PropTypes.string.isRequired
}

//default props sets default value to a property, they get used when we do not pass any value to props
Navbar.defaultProps = {
    title: " Set title here"
}