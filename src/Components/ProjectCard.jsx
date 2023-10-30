import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import projectImg from '../Assets/designer.jpeg'
import Modal from 'react-bootstrap/Modal';
import { Col, ModalFooter, Row } from 'react-bootstrap';

function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card style={{width:'300px'}} className='shadow p-3 mb-5 btn ' onClick={handleShow}>
                <Card.Img className='img-fluid' variant="top" src={projectImg} />
                <Card.Body>
                    <Card.Title>Project Title</Card.Title>

                </Card.Body>
            </Card>

            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col >
                            <img style={{ height: '200px' }} className='img-fluid' src={projectImg} alt="" />
                        </Col>
                        <Col>
                            <h2>Project Title</h2>
                            <p>project overview</p>
                            <p>language used: <span className='ms-2 fw-bolder'>HTML,CSS,React</span></p>
                        </Col>

                    </Row>
                    <br />
                    <div>
                        <a href="https://github.com/" target='_blank' className='btn '><i className="fa-brands fa-github fa-2x"></i></a>
                        <a href="https://github.com/" target='_blank' className='btn '><i class="fa-solid fa-link fa-2x"></i></a>

                    </div>

                </Modal.Body>
                

            </Modal>

        </>)
}

export default ProjectCard