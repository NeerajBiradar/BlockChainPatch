import React, { useEffect, useState } from "react";
import Web3 from 'web3';
import ABI from '../ABI/ABI';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';
import { useNavigate } from "react-router-dom";
import Address from "../ABI/Address";

const BugLabel = () => {
    const [account, setAccount] = useState("");
    const [contractdata, setContractdata] = useState({});
    const [data, setData] = useState([]);
    const { ethereum } = window;
    const [count, setCount] = useState(false);
    const [transactionHash, setTransactionHash] = useState("");
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [gas, setGas] = useState('');
    const [bugArr, setBugArr] = useState([]);
    const [bugPriority, setBugPriority] = useState([]);
    const info = JSON.parse(localStorage.getItem('Info'));

    useEffect(() => {
        async function Connection() {
            let accounts = await ethereum.request({ method: "eth_requestAccounts" });
            setAccount(accounts[0]);
            const web3 = new Web3(window.ethereum);
            
            let contract = new web3.eth.Contract(ABI, Address);
            setContractdata(contract);
            let temp = await contract.methods.SendBugReport().call();
            temp = temp.filter((val, ind) => val.priority === 'default').reverse();
            setData(temp);
            $(function () {
                $('#Bugs-Label-Table').DataTable({
                    paging: false
                });
            });
        }
        Connection();
    }, []);

    const SendBugReport = async () => {
        for (let i = 0; i < data.length; i++) {
            const priority_value = document.getElementById('bug-priority'+ i).value;
            if (priority_value !== '') {
                bugArr.push(data[i].bug_title);
                bugPriority.push(priority_value);
            }
        }
        setBugArr(bugArr);
        setBugPriority(bugPriority);
        console.log(bugArr,bugPriority)
        const result = await contractdata.methods.SetPrioritybug(bugArr,bugPriority).send({ from: account });
        setFrom(result.from);
        setTo(result.to);
        setTransactionHash(result.transactionHash);
        setGas(result.gasUsed);
    };

    const handlePriorityChange = (index) => {
        const priority_value = document.getElementById(`bug-priority${index}`).value;
        setCount(priority_value !== '');
    };

    const handleSubmit = async () => {
        const UserTransction = {
            account: account,
            id: transactionHash,
            description: 'Bug Title :' + bugArr.join(', '),
            from: from,
            to: to,
            gasUsed: gas,
            email: info.email,
            role: info.userType
        };
        console.log(UserTransction, bugArr);

        const response = await fetch('http://localhost:2000/api/transcation', {
            method: 'POST',
            body: JSON.stringify(UserTransction),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
    };
    useEffect(() => {
        if (transactionHash) {
            const submitButton = document.getElementById("submit-button");
            if (submitButton) {
                submitButton.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [transactionHash]);
    return (
        <div className="container table-responsive my-2">
            <h1 className="my-3">Bug Label</h1>
            <table className="table table-light table-hover table-striped mt-3" id="Bugs-Label-Table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col" style={{ width: '10%' }}>S.No</th>
                        <th scope="col" style={{ width: '20%' }}>Bug Name</th>
                        <th scope="col" style={{ width: '50%' }}>Bug Description</th>
                        <th scope="col" style={{ width: '20%' }}>Set Priority</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((val, ind) => (
                        <tr key={ind}>
                            <td>{ind + 1}</td>
                            <td>{val.bug_title}</td>
                            <td>{val.bug_description.replace(/\n/g, '<br>')}</td>
                            <td>
                                <div>
                                    <select className="form-select" id={`bug-priority${ind}`} onChange={() => handlePriorityChange(ind)}>
                                        <option value="">Select Priority</option>
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Low">Low</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-primary m-2" type="submit" value="Bug Priority" onClick={SendBugReport} disabled={!count}>Confirm Transaction</button>
            {transactionHash && (
                <div className="row mt-5">
                    <div className="col-12">
                        <h2>Transaction Details</h2>
                        <p>Transaction Hash: {transactionHash}</p>
                        <button id="submit-button" type="submit" className="btn btn-primary mt-1" onClick={() => {
                            handleSubmit();
                            window.location.reload()
                        }}>Submit</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BugLabel;
