import React from 'react'
import Header from '../Components/Header'
import {Col, Row} from 'react-bootstrap'
import MyProjects from '../Components/MyProjects'
import Profile from '../Components/Profile'

function Dashboard() {
  return (
    <>
    <Header insideDashboard={true}/>
    <Row style={{marginTop:'50px'}} className='container-fluid'>
      <Col sm={12} md={8} className='mb-5'>
        <h1 >Welcome <span className='text-warning'>User</span></h1>
        {/* my project section */}
        <MyProjects/>
      </Col>
      <Col sm={12} md={4} >
        {/* project section */}
        <Profile/>
      </Col>

    </Row>
      
    </>
  )
}

export default Dashboard