// import PropTypes from 'prop-types'
import React, { } from 'react'
import {
  Link
} from 'react-router-dom';

const Navbar = () => {



  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/newsapp">News Jayachandra</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/newsapp">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/technology">Technology</Link>
              </li>
              <li className="nav-item" style={{ display: "flex" }}  >
                <Link className="nav-link active" to="/technology">Country</Link>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

              </li>


            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  )

}

export default Navbar