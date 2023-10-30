import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Auth({ register }) {
    const registerForm = register ? true : false
    return (
        <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center'>
            <div className='w-75 container'>
                <Link to={"/"} style={{ textDecoration: 'none' }}><h5><i className='fa-solid fa-arrow-left '>&nbsp;&nbsp; </i>Back to Home</h5></Link>
                <div className="card shadow p-5 bg-success">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img src="https://th.bing.com/th/id/OIP.nsLVzk9CzMMQ8T8cD1PSlQHaE8?w=247&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center flex-column">
                                <div className="d-flex  text-light">
                                    <i className="fa-brands fa-r-project fa-bounce fa-3x me-1" style={{ color: 'black' }}></i>
                                    <span className='h1 fw-bolder mb-0' style={{ color: 'black' }}>Project Fair</span>
                                </div>
                                <h5 className='fw-normal mt-4 pb-3 text-light'>
                                    {
                                        registerForm ? 'sign up to your account' : 'sign into your account'
                                    }
                                </h5>
                                <Form className='text-light w-100'>

                                    {registerForm &&
                                        <Form.Group className='' >
                                            <Form.Control type='text' className='mb-2' placeholder='Enter your name' />
                                        </Form.Group>
                                    }
                                    <Form.Group >
                                        <Form.Control type='text'  className='mb-2' placeholder='Enter your email id' />
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Control  className='mb-2' type='password' placeholder='Enter your password' />
                                    </Form.Group>
                                    {
                                        registerForm?
                                        <div>
                                            <Button className='mb-2 btn' variant='light' type='submit' size='lg'> Register </Button>
                                            <p>Already have an account ? <Link style={{textDecoration:'none'}} to={"/login"}>Login Here</Link></p>
                                        </div>:
                                        <div>
                                        <Button className='mb-2 btn ' variant='light' type='submit' size='lg'> Login </Button>
                                        <p>New User ? <Link style={{textDecoration:'none'}} to={"/register"}>Register Here</Link></p>
                                    </div>
                                    }
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Auth