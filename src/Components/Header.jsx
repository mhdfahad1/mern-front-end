import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header({insideDashboard}) {
  return (
    <div>
      <Navbar className=' position-fixed-top-0' style={{ backgroundColor: ' #2eb8b8' }}>
        <Container>
          <Navbar.Brand href="#home">
            <Link style={{ textDecoration: 'none', fontSize: '30px' }} to={"/"}>
              <i className="fa-brands fa-r-project" style={{ color: 'black' }}></i>
              <span style={{ color: 'black' }}>Project Fair</span>
            </Link>
          </Navbar.Brand>
          {
            insideDashboard&&
            <div className='btn btn-dark ms-auto text-light fw-bolder fs-4 d-flex align-items-center'>Logout <i className="fa-solid fa-right-from-bracket ms-2">
              </i></div>
          }
        </Container>
      </Navbar>
    </div>
  )
}

export default Header