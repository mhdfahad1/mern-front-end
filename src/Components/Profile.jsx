import React from 'react'

function Profile() {
    return (
        <div className='card shadow p-5'>
            <div className="d-flex justify-content-between">
                <h2>My Profile</h2>
                <button className='btn btn-outline-primary'><i className='fa-solid fa-check'></i></button>
            </div>
            <div className="row justify-content-center mt-3">
                {/* profile picture */}
                <label className='text-center' htmlFor="profile">
                    <input id='profile' type="file" style={{ display: 'none' }} />
                    <img width={'200px'} height={'200px'} className='rounded-circle' src="https://th.bing.com/th/id/OIP.28jmE4s4hgzuaJnqvGffRQHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="profile" />
                </label>
                <div className="mb-3">
                    <input type="text" className='form-control' placeholder='Username' />
                </div>

                <div className="mb-3">
                    <input type="text" className='form-control' placeholder='Guthub' />
                </div>

                <div className="mb-3">
                    <input type="text" className='form-control' placeholder='LinkdIn' />
                </div>

            </div>

        </div>
    )
}

export default Profile