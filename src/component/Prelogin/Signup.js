import { useState } from 'react'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link} from 'react-router-dom';

const ImageAndForm = () => {

  const [name, SetName] = useState('')
  const [email, SetEmail] = useState('')
  const [password, SetPassword] = useState('')
  const [error, SetError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = {
      name: name.toLowerCase(),
      email: email.toLowerCase(),
      password: password
    };

    const response = await fetch('http://localhost:2000/api/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      SetError(json.error)
    }

    if (response.ok) {
      SetName('')
      SetEmail('')
      SetPassword('')
      SetError(null)
      //console.log("New User Added", json)
    }
  }

  return (

    <div className="container ">
      <div className="row">
        <div className="col-md-6">
          <img src="./Images/Loginimg.jpg" className="img-fluid" alt="placeholder image" />
        </div>
        <div className="col-md-6 text-start my-5">
          <h2 >Sign Up</h2>
          <form onSubmit={handleSubmit} >
            <div className="mb-3 mt-3">
              <label className="form-label">Name</label>
              <input type="text" onChange={(e) => SetName(e.target.value)}
                value={name} className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" onChange={(e) => SetEmail(e.target.value)}
                value={email} className="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" onChange={(e) => SetPassword(e.target.value)}
                value={password} className="form-control" id="password" placeholder="Enter your password" />
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
            {error && <div className='error'>{error}</div>}
            <p className="mt-4">By clicking the "Sign up" button, you are creating an account, and agree to Group-36's Terms of Service and Privacy Policy</p>
            <p className="mt-3">Already have an account?<Link to="/Login"> Log in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ImageAndForm;
