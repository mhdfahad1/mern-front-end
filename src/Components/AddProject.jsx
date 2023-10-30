import React from 'react'
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddProject() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Project
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label className='text-center' htmlFor="profilepic">
                                <input id='profilepic' type="file" style={{ display: 'none' }} />
                                <img width={'100%'} height={'200px'} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAEgAXgDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAcIBAUGAQID/8QAThAAAQIDAgcIEAQEBgEFAAAAAAECAwQFBhEHFRYhVZTSEjEyQVFhdZITFyI0NTZUcXJzkZWys7TTFCOBsUJSocQkM0NigsFEJVNW0fD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AiIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABcAJAwS+NEfomb+bBI/JAwS+NEfomb+bBAngAAAAAAAFRwABIGCqUkpyvVGFNy0vMQ20iM9rJmDDitR6TEBEciREVL86kz4is5oalajK7BD+CHxiqfQsf6mXJxA12IrOZ//AEalajK7AxFZzQ1K1GV2DYgDXYis5oalajK7AxFZzQ1K1GV2DYgDXYis5oalajK7B5iKzmhqVqMrsGyAGuxFZzQ1K1GV2BiKzmhqVqMrsGxAGuxFZzQ1K1GV2BiKzmhqVqMrsGxAGuxFZzQ1K1GV2BiKzmhqVqMrsGxAGuxFZzQ1K1GV2DzEVnNDUrUZXYNkANdiKzmhqVqMrsDEVnNDUrUZXYNiANdiKzmhqVqMrsDEVnNDUrUZXYNiANdiKzmhqVqMrsDEVnNDUrUZXYNiANdiKzmhqVqMrsDEVnNDUrUZXYNiANdiKzmhqVqMrsDEVnNDUrUZXYNiANdiKzmhqVqMrsHmIrOaGpWoyuwbIAa7EVnNDUrUZXYGIrOaGpWoyuwbEAa7EVnNDUrUZXYGIrOaGpWoyuwbEAa7EVnNDUrUZXYGIrOaGpWoyuwbEAa7EVnNDUrUZXYPMRWc0NStRldg2QA1yUKziKl1HpW+n/gy2wVhn0Rs7PtaiI1JqYRERERERIjsyImYteQNNYMbbxpmaitgSW5ix40Rt82zec9XJxAcASBgm8aI/RM382Cfh2rLc/8AsyOts/8Ao6ywVibTWerkSeqMOWbLukJiXRYUw2I7dvfDciblEv4lAlMDkAAAAAABUcAASPgh8Yqn0LH+plycSDsEPjFU+hY/1MuTiA5TV1W0Fn6K6XZVZ+DKumGvdBSIkRVejFRHKm4avKhtCHcMnfNmPUVD44IHe5eWD05KdWPsDLywenJTqx9grYALJ5eWD05KdWPsDLywenJTqx9grYALJ5eWD05KdWPsDLywenJTqx9grYALJ5eWD05KdWPsDLywenJTqx9grYALJ5eWD05KdWPsDLywenJTqx9grYALJ5eWD05KdWPsDLywenJTqx9grYALJ5eWD05KdWPsDLywenJTqx9grYALJ5eWD05KdWPsDLywenJTqx9grYALJ5eWD05KdWPsDLywenJTqx9grYALJ5eWD05KdWPsDLywenJTqx9grYALJ5eWD05KdWPsDLywenJTqx9grYALJ5eWD05KdWPsDLywenJTqx9grYALJ5eWD05KdWPsDLywenJTqx9grYALJ5eWD05KdWPsDLywenJTqx9grYALJ5eWD05KdWPsDLywenJTqx9grYALJ5eWD05KdWPsDLywenJTqx9grYALJ5eWD05KdWPsDLywenJTqx9grYALJ5eWD05KdWPsDLywenJTqx9grYALJ5eWD05KdWPsDLywenJTqx9grYALJ5eWD05KdWPsDLywenJTqx9grYALJ5eWD05KdWPsArYAAAAkfBD4xVPoWP8AUy5OJB2CHxiqfQsf6mXJxAEPYZO+LMeoqPxwSYSHsMnfFmPUVH44IEUAADaNs9ah7WPZQ6w5j2o9jmyE2rXNcl6Kioy65T3Ju1ega17um/tllqT4Lo/R8l8lhmgVcybtXoGte7pv7YybtXoGte7pv7ZaMAVcybtXoGte7pv7YybtXoGte7pv7ZaMAVcybtXoGte7pv7YybtXoGte7pv7ZaMAVcybtXoGte7pv7YybtXoGte7pv7ZaMAVcybtXoGte7pv7YybtXoGte7pv7ZaMAVcybtXoGte7pv7YybtXoGte7pv7ZaMAVcybtXoGte7pv7YybtXoGte7pv7ZaMAVcybtXoGte7pv7YybtXoGte7pv7ZaMAVcybtXoGte7pv7YybtXoGte7pv7ZaMAVcybtXoGte7pv7Yybt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" alt="profile" />
                            </label>

                        </div>
                        <div className='col-lg-6'>
                            <input type="text" className='form-control mb-2' placeholder='project-name' />
                            <input type="text" className='form-control mb-2' placeholder='language used' />
                            <input type="text" className='form-control mb-2' placeholder='Github link' />
                            <input type="text" className='form-control mb-2' placeholder='Website link' />
                        </div>
                    </div>
                    <input type="text" className='form-control' placeholder='project overview' />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary">Save</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default AddProject