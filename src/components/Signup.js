import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [credentials, setCredentials] = useState({name: "", email: "", password: "", cpassword: ""})
    const handleChange = (e)=> {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    let nevigate = useNavigate();
    const handleSubmit = async (e) => {
        const {name, email, password } = credentials;
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
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
            localStorage.setItem('token', json.authtoken); 
            nevigate("/");
        }
        else{
            alert("Invalid credentials");
        }
    }
    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="email" onChange={handleChange} name='name' minLength={5} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={handleChange} name='email' />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" onChange={handleChange} name='password'  minLength={5} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" onChange={handleChange} name='cpassword'  minLength={5} required/>
                </div>
                <button onClick={handleSubmit} type="submit" className="btn btn-primary my-3">Signup</button>
            </form>
        </>
    )
}

export default Signup
