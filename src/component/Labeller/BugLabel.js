import React from "react";
import Web3 from 'web3';
import ABI from '../ABI/ABI';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';
import { useEffect, useState } from "react";

const BugLabel = () => {
    let [account, setAccount] = useState("");
    let [contractdata, setContractdata] = useState({});
    let [data, setData] = useState([]);
    let { ethereum } = window;
    let [count,setCount] = useState(false);
    let [transactionHash, setTransactionHash] = useState("");

    useEffect(() => {
        async function Connection() {
            let accounts = await ethereum.request({ method: "eth_requestAccounts" });
            setAccount(accounts[0]);
            const web3 = new Web3(window.ethereum);
            const Address = "0xC73b335Daeb32f4df2635aA821A4B8532a18EC9c";
            let contract = new web3.eth.Contract(ABI, Address);
            setContractdata(contract);
            let temp = await contract.methods.SendBugReport().call();
            temp = temp.filter((val, ind) => {
                return val.priority === 'default'
            });
            setData(temp);
            $(function () {
                $('#Bugs-Label-Table').DataTable();
            })
        }
        Connection();

    }, []);

    const BugArr = [];
    const Bugpriority = [];
    const SendBugReport = async () => {
        for (let i = 0; i < data.length; i++) {
            const priority_value = document.getElementById('bug-priority'+i).value;
            if (priority_value !== '') {
                BugArr.push(data[i].bug_title);
                Bugpriority.push(priority_value);
            }
        }
        const result = await contractdata.methods.SetPrioritybug(BugArr, Bugpriority).send({ from: account });
        setTransactionHash(result.transactionHash);
        alert('Transaction Successful');
    }
    const handlePriorityChange = (index) => {
        const priority_value = document.getElementById('bug-priority' + index).value;
        if (priority_value !== '') {
            setCount(true);
        } else {
            setCount(false);
        }
    }
    return (
        <div className="container table-responsive">
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
                    {data.reverse().map((val, ind) => {
                        return (
                            <tr key={ind}>
                                <td>{ind + 1}</td>
                                <td>{val.bug_title}</td>
                                <td>{val.bug_description.replace(/\n/g, '<br>')}</td>
                                <td>
                                    {<div>
                                        <select className="form-select" id={"bug-priority" + ind} onChange={()=>handlePriorityChange(ind)}>
                                            <option value="">Select Priority</option>
                                            <option value="High">High</option>
                                            <option value="Medium">Medium</option>
                                            <option value="Low">Low</option>
                                        </select>
                                    </div>

                                    }
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button className="btn btn-primary m-2" type="submit" value="Bug Priority" onClick={SendBugReport} disabled={!count} >Submit</button>
            {transactionHash && (
                <div className="row mt-5">
                    <div className="col-12">
                        <h2>Transaction Details</h2>
                        <p>Transaction Hash: {transactionHash}</p>
                        <button type="submit" className="btn btn-primary mt-1" onClick={() => {
                            window.location.reload(true);
                            setTransactionHash("");
                        }}>New Priority</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BugLabel;