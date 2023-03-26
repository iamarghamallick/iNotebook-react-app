import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [creadentials, setCreadentials] = useState({email: "", password: ""})
    let nevigate = useNavigate();
    const handleChange = (e)=> {
        setCreadentials({...creadentials, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e)=> {
        e.preventDefault();
        console.log("Logging in");
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({email: creadentials.email, password: creadentials.password})
        })
        const json = await response.json();
        console.log(json);
        if(json.success) {
            // save the authtoken and redirect
            localStorage.setItem('token', json.authToken);
            props.showAlert("Logged in sucessfully", "success");
            nevigate("/");
        } else {
            alert("Invalid credentials");
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={creadentials.email} onChange={handleChange} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="password" name="password" value={creadentials.password} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    )
}

export default Login