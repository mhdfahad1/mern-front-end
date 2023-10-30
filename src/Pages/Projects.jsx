import React from 'react'
import Header from '../Components/Header'
import { Row, Col } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'

function Projects() {
  return (
    <>
      <Header />
      {/* all */}
      <div className='text-center' style={{ marginTop: '50px' }}>
        <h1 className='mt-5'>All Projects</h1>
                  {/* search */}

        <div className='d-flex mt-5 justify-content-center w-100'>
          <div className='d-flex align-items-center w-50'>
            <input className='form-control mb-5 shadow' type="text" placeholder='Search by Technologies' />
            <i className='fa-solid fa-magnifying-glass' style={{ marginLeft: '-30px', marginTop: '-50px' }}></i>

          </div>

        </div>
        <div className='container-fluid'>
          <Row>
            <Col sm={12} md={6} lg={4}>
              <ProjectCard />
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Projects