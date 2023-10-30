import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import { Link } from 'react-router-dom'

function HomeProjects() {
  return (
    <>
      <div >
        <h1 className='text-center mb-5'>Explore our projects</h1>
        <marquee width={'100%'} scrollAmount={30}>
          <div className='w-100 d-flex justfy-content-between'>
            <div className='w-25'>
              <ProjectCard />
            </div>
          </div>
        </marquee>
        <div className='text-center mb-5'><Link style={{ color: 'blue' }} to={'/projects'}>view more Projects</Link></div>
      </div>
    </>
  )
}

export default HomeProjects