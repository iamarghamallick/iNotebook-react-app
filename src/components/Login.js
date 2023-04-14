import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'


const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let nevigate = useNavigate();

    const handleSubmit = async (e) => {
        props.showLoading(true)
        // const host = "http://localhost:5000"
        const host = "https://inotebook-backend-9rjg.onrender.com"
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            props.showLoading(false)
            props.showAlert("Logged in sucessfully", "success");
            nevigate("/");
        }
        else{
            props.showLoading(false)
            props.showAlert("Invalid credentials", "danger");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div className='my-3'>
            <h2>Login to continue with iNotebook</h2>
            <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input placeholder='Enter your email' type="email" className="form-control text-light" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" style={{background: "#1f1f4b", border:"1px solid blue" }}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input placeholder='Enter your password' type="password" className="form-control text-light" value={credentials.password} onChange={onChange} name="password" id="password" style={{background: "#1f1f4b", border:"1px solid blue" }}/>
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
                <p className='my-2'>Not a user? <Link to='/signup' className='text-warning'>Create an Account</Link></p>
            </form>
        </div>
    )
}

export default Login
