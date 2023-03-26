import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
  let nevigate = useNavigate();
  const [creadentials, setCreadentials] = useState({ name: "", email: "", password: "", cpassword: "" })
  const handleChange = (e) => {
    setCreadentials({ ...creadentials, [e.target.name]: e.target.value })
  }
  const { name, email, password } = creadentials;
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signing in");
    const response = await fetch('http://localhost:5000/api/auth/createuser', {
      method: 'POST',
      headers: {
          'Content-Type' : 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // save the authtoken and redirect
      localStorage.setItem('token', json.authToken);
      props.showAlert("Account created sucessfully", "success");
      nevigate("/");
    } else {
      props.showAlert("Invalid details", "danger");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={handleChange} />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="password" name="password" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Confirm Password</label>
        <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Signup</button>
    </form>
  )
}

export default Signup