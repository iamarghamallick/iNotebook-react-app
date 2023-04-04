import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Signup = (props) => {
    const [credentials, setCredentials] = useState({name: "", email: "", password: "", cpassword: ""})
    const handleChange = (e)=> {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    let nevigate = useNavigate();
    const handleSubmit = async (e) => {
        props.showLoading(true)
        // const host = "http://localhost:5000"
        const host = "https://inotebook-backend-9rjg.onrender.com"
        const {name, email, password } = credentials;
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            // localStorage.setItem('token', json.authtoken); 
            props.showLoading(false)
            props.showAlert("Account Created Sucessfully", "success");
            nevigate("/login");
        }
        else{
            props.showLoading(false)
            props.showAlert("Invalid Details", "danger");
        }
    }
    return (
        <div className='my-3'>
            <h2>Create an account to use iNotebook</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input placeholder='Enter your name' type="text" className="form-control text-light my-1" id="email" style={{background: "#1f1f4b", border:"1px solid blue" }} onChange={handleChange} name='name' minLength={5} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input placeholder='Enter your email' type="email" className="form-control text-light my-1" id="email" aria-describedby="emailHelp" onChange={handleChange} name='email' style={{background: "#1f1f4b", border:"1px solid blue" }} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input placeholder='Enter a strong password' type="password" className="form-control text-light my-1" id="password" onChange={handleChange} name='password'  minLength={5} style={{background: "#1f1f4b", border:"1px solid blue" }} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Confirm Password</label>
                    <input placeholder='Password must be matched' type="password" className="form-control text-light my-1" id="cpassword" onChange={handleChange} name='cpassword'  minLength={5} style={{background: "#1f1f4b", border:"1px solid blue" }} required/>
                </div>
                <button onClick={handleSubmit} type="submit" className="btn btn-primary my-3">Signup</button>
            </form>
            <p className='my-2'>Already have an Account? <Link to='/login' className='text-warning'>Click here to Login</Link></p>
        </div>
    )
}

export default Signup
