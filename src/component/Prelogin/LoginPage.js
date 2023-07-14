import { useState } from 'react'
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = (props) => {
    const navigate = useNavigate();
    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')
    const loginUser = async (e) => {
        e.preventDefault()
        const response = await fetch('https://blockchainbackend.onrender.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify ({
                email,
                password,
            }),
        })
        const data = await response.json()
        //console.log(data)
        if(data.status === true){
            //console.log('Success');
            sessionStorage.setItem("Role",data.userType);
            props.typeUser(data.userType)
            if(data.userType==="admin"){
                navigate('/admin');
            }
            if(data.userType==="user"){
                navigate('/user');
            }
            if(data.userType==="labeller"){
                navigate('/labeller');
            }
            if(data.userType==="developer"){ 
                navigate('/developer');
            }
            if(data.userType==="verifier"){
                navigate('/verifier');
            }
        localStorage.setItem('Info',JSON.stringify(data))

        }
        else{
            document.getElementById('inCorrect_details').innerHTML = "Login details does not match";
        }
        SetEmail('')
        SetPassword('')
    }

    return (

        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img src="./Images/signup.svg" className="img-fluid" alt="placeholder image" />
                </div>
                <div className="col-md-6 text-start mt-2">
                    <h2 >Login Page</h2>
                    <form onSubmit={loginUser}>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Email address</label>
                            <input type="email" onChange={(e) => SetEmail(e.target.value.toLowerCase())}
                                value={email} className="form-control" id="email" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" onChange={(e) => SetPassword(e.target.value)}
                                value={password} className="form-control" id="password" placeholder="Enter your password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                        {/* {error && <div className='error'>{error}</div>} */}
                        <p className='mt-2 text-danger-emphasis' id="inCorrect_details"></p>
                        <p className="mt-4">By clicking the "Log in" button, you are creating an account, and agree to Group-36's Terms of Service and Privacy Policy</p>
                        <p className="mt-3">Need an account?
                            <Link to="/Signup"> Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
