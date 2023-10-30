import React, { useState } from 'react'
import Footer from '../Components/Footer'
import { Col, Row } from 'react-bootstrap'
import projectIcon from '../Assets/project-icon.png';
import HomeProjects from '../Components/HomeProjects';
import { Link } from 'react-router-dom';
function PFHome() {
  const [isLoggdIn,setIsloggedIn]=useState(false)
  return (
    <>
      {/* landing page section */}
      <div className='container-fluid rounded' style={{ width: '100%', height: '100vh', backgroundColor: ' #2eb8b8' }}>
        <Row className='align-items-center p-5'>
          <Col sm={12} md={6}>
            <h1 style={{ fontSize: '50px', color: 'white' }}><i className="fa-brands fa-r-project" style={{ color: 'white' }}></i>
              &nbsp;  Project Fair</h1>
            <p>One stop Destination for all software development projects...</p>
            {
              isLoggdIn?
              <Link to={'/dashboard'} className='btn btn-dark'>Manage Your Projects 
             <i class="fa-solid fa-right-long fa-beat ms-2"></i></Link>:
             <Link to={'/login'} className='btn btn-dark'>Getting Started 
             <i class="fa-solid fa-right-long fa-beat ms-2"></i></Link>
            }
          </Col>
          <Col sm={12} md={6}>
            <img width={'450px'} src={projectIcon} alt="" />
          </Col>

        </Row>
      </div>

      {/* glimpse of all projects */}

      <div className='all-projects mt-5'>
        <HomeProjects />
      </div>
    </>
  )
}

export default PFHome