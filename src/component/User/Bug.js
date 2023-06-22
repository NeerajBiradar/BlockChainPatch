import React from "react";
import Web3 from 'web3';
import ABI from "../ABI/ABI";
import { useEffect, useState } from "react";

const BugReport = () => {
    let [account, setAccount] = useState("");
    let [contractdata, setContractdata] = useState({});
    let [transactionHash, setTransactionHash] = useState("");
    let [isFormFilled, setIsFormFilled] = useState(false);
    let { ethereum } = window;

    useEffect(() => {
        async function Connection() {
            let accounts = await ethereum.request({ method: "eth_requestAccounts" });
            setAccount(accounts[0]);
            const web3 = new Web3(window.ethereum);
            const Address = "0xC73b335Daeb32f4df2635aA821A4B8532a18EC9c";
            let contract = new web3.eth.Contract(ABI, Address);
            setContractdata(contract);
        }
        Connection(); 
    }, []);
    const SendBugReport = async () => {
        const bug_title = document.getElementById("bug-title").value;
        const bug_description = document.getElementById("bug-description").value;

        if (account.toLowerCase() === '0xcfca6ef8c30b803ecd38a98c61c52d9d8f9bc8ba' && isFormFilled) {
            const result = await contractdata.methods.ReciveBugReport(bug_title, bug_description).send({ from: account });
            setTransactionHash(result.transactionHash);
            alert('Transaction Successful');
        }
        else {
            alert("Transaction Unsuccessful! User account does not match or form is not filled");
            const form = document.getElementById('Bug-form-id');
            form.reset();
            setIsFormFilled(false);
        }
    }

    const handleFormChange = () => {
        const bug_title = document.getElementById("bug-title").value;
        const bug_description = document.getElementById("bug-description").value;
        if (bug_title && bug_description) {
            setIsFormFilled(true);
        } else {
            setIsFormFilled(false);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mt-5">
                    <h1>Bug Description Form</h1>
                    <form action="#" method="POST" id="Bug-form-id">
                        <div className="form-group mt-3">
                            <label htmlFor="bug-title">Bug Title:</label>
                            <input type="text" className="form-control mt-1" id="bug-title" name="bug-title" onChange={handleFormChange} required />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="bug-description">Bug Description:</label>
                            <textarea className="form-control mt-1" id="bug-description" name="bug-description" rows="5" onChange={handleFormChange} required></textarea>
                        </div>
                    </form>
                    <button type="submit" className="btn btn-primary mt-2" onClick={SendBugReport} disabled={!isFormFilled}>Submit</button>
                </div>
            </div>
            {transactionHash && (
                <div className="row mt-5">
                    <div className="col-12">
                        <h2>Transaction Details</h2>
                        <p>Transaction Hash: {transactionHash}</p>
                        <button type="submit" className="btn btn-primary mt-2" onClick={() => {
                            const form = document.getElementById('Bug-form-id');
                            form.reset();
                            setTransactionHash("");
                        }}>New Bug Report</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BugReport;