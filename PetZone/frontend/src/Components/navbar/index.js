import React from 'react'
import { useNavigate } from 'react-router-dom'
import './navbar.css'

const Index = () => {
  const history = useNavigate()
  return (
    
    <nav className="navbar sticky-top navbar-expand-md bg-light ">
    <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <a className="navbar-brand mt-2 mt-lg-0" >
        <h1 className='navbar-title'>PET ZONE</h1>
      </a>

      <form className="ms-auto search-bar">
            <input type="text" className='input-field' placeholder="search..." />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
            
          </form>

      <ul className="navbar-nav me-2 mb-2 mb-lg-0">
        <li onClick={()=> history('/homepage')} className="nav-item">
          <a className="nav-link" >Home</a>
        </li>
        <li onClick={()=> history('/blogs')} className="nav-item">
          <a className="nav-link" >Blogs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Pet Shop</a>
        </li>
        <li onClick={()=> history('/product-shop')} className="nav-item">
          <a className="nav-link" >Product Shop</a>
        </li>
      </ul>

    </div>


    <div className="d-flex align-items-center">
      
      <a className=" me-3" >
        <i className="fas fa-shopping-cart"></i>
      </a>

      <div className="dropdown">
        <a
          className="dropdown-toggle d-flex align-items-center hidden-arrow"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a className="dropdown-item">My profile</a>
          </li>
          <li>
            <a className="dropdown-item">Settings</a>
          </li>
          <li>
            <a className="dropdown-item">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>

  )
}

export default Index