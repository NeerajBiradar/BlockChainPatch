import { useState } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const ImageAndForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [signupSuccess, setSignupSuccess] = useState(false); // New state variable

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name: name.toLowerCase(),
      email: email.toLowerCase(),
      password: password,
    };

    const response = await fetch(process.env.REACT_APP_SERVER_LINK+'/api/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setName('');
      setEmail('');
      setPassword('');
      setError(null);
      setSignupSuccess(true); // Set signup success to true
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 ">
          <img src="./Images/Loginimg.jpg" className="img-fluid " alt="Login image" />
        </div>
        <div className="col-md-6 text-start my-5">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 mt-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="form-control"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
            {error && <div className="error">{error}</div>}
            {signupSuccess && <div className="success mt-3">New User Added</div>} {/* Display success message */}
            <p className="mt-4">
              By clicking the "Sign up" button, you are creating an account, and agree to Group-36's Terms of Service
              and Privacy Policy
            </p>
            <p className="mt-3">
              Already have an account?<Link to="/Login"> Log in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ImageAndForm;
