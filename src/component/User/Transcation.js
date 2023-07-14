import React, { useEffect, useState } from 'react';

const TransactionDetails = () => {
  const info = JSON.parse(localStorage.getItem('Info'));
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('https://blockchainfrontend.onrender.com/api/getTranscation');
        let data = await response.json();
        data = data.filter((val) => val.email === info.email);
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="container-fluid mt-5 px-5">
      <h1 className="mb-4">Transaction Details</h1>
      {transactions.reverse().map((transaction) => (
        <div key={transaction.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">
              Transaction ID: <strong>{transaction.id}</strong>
            </h5>
            <h6 className="card-subtitle mb-2 ">
              <strong>Description:</strong> {transaction.description}
            </h6>
            <div className="row">
              <div className="col-sm-6">
                <p className="card-text">
                  <strong>From:</strong> {transaction.from}
                </p>
                <p className="card-text">
                  <strong>To:</strong> {transaction.to}
                </p>
              </div>
              <div className="col-sm-6">
                <p className="card-text">Gas Used: {transaction.gasUsed}</p>
                <p className="card-text">Transaction Time: {transaction.createdAt}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionDetails;
