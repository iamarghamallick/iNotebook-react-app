import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

const Userprofile = () => {
    const context = useContext(noteContext);
    const { user } = context;
    let d = new Date(user.date)

    return (
        <div className='d-flex flex-column justify-content-center my-3'>
            {!localStorage.getItem('token') && <h6 className='my-3'>Login to view your user-data</h6>}
            <div className="card text-light" style={{ "background":"#4f488ad6" }}>
                <img src="user.png" className="card-img-top p-2 rounded-circle" alt="User Badge" style={{height: "200px", width:"200px"}}/>
                <div className="card-body">
                    <h5 className="card-title my-3"><span className='text-warning'>Hello,</span> {user.name}</h5>
                    <h6 className="card-text my-3">Email: <span className='text-warning'>{user.email}</span></h6>
                    <h6 className="card-text my-3">User since <span className='text-warning'>{d.toString()}</span></h6>
                </div>
            </div>
        </div>
    )
}

export default Userprofile