import React from 'react';
import { Link } from 'react-router-dom';

const IntroductionPage = () => {
  return (
    <div className="container">
      <div className='row'>
        <div className='col'>
          <h1 className="mb-3 mt-5">Welcome to the Blockchain-based Patch Management Team</h1>
          <p className="mb-5">
            Our team uses blockchain technology to provide a secure and transparent way to manage patches for your organization.
          </p>
          <h2 className='mb-3'>What is blockchain?</h2>
          <p className='mb-5'>
            Blockchain is a decentralized digital ledger that records transactions in a secure and transparent manner. Each
            block in the chain contains a timestamp and a cryptographic hash of the previous block, creating an unbreakable
            chain of records that cannot be tampered with.
          </p>
          <h2 className='mb-3'>How does our patch management system work?</h2>
          <p>
            Our system uses blockchain technology to securely track and manage patches across your organization's systems.
            Each patch is assigned a unique identifier and stored on the blockchain, creating an immutable record of all
            patches applied and their status. This ensures that your systems remain up-to-date and secure, while also providing
            complete transparency into the patch management process.
          </p>
          <div className="mt-5">
            <Link to="/PatchRequest">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;


