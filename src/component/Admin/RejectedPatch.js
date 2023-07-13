import React from "react";
import Web3 from 'web3';
import ABI from '../ABI/ABI';
import $ from 'jquery';
import { useEffect, useState } from "react";


const RejectedPatch = () => {
    let [account, setAccount] = useState("");
    let [contractdata, setContractdata] = useState({});
    let [data, setData] = useState([]);
    let { ethereum } = window;
    let [time, setTime] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [gas, setGas] = useState('');
    const info = JSON.parse(localStorage.getItem('Info'));
    const [name, setName] = useState("")
    const [transactionHash, setTransactionHash] = useState("")

    useEffect(() => {
        async function Connection() {
            let accounts = await ethereum.request({ method: "eth_requestAccounts" });
            setAccount(accounts[0]);
            const web3 = new Web3(window.ethereum);
            const Address = "0x54e6f321c3685A4Ca2DE4fFc3B42de99dD9433Ec";
            let contract = new web3.eth.Contract(ABI, Address);
            setContractdata(contract);
            let temp = await contract.methods.Developer().call();
            temp = temp.filter((val, ind) => val.check == "Rejected" && val.deploy == 'not'
            ).reverse()
            console.log(temp, "Rejected");
            setData(temp);
            $(function () {
                $('#Rejected-Table').DataTable();
            })
        }
        Connection();

    }, []);
    useEffect(() => {
        if (transactionHash) {
            const submitButton = document.getElementById("submit-button");
            if (submitButton) {
                submitButton.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [transactionHash]);

    function handledownload(varible) {
        const fileBlob = new Blob([new Uint8Array(Web3.utils.hexToBytes(varible))], { type: 'application/octet-stream' });
        const fileUrl = URL.createObjectURL(fileBlob);

        // Create a new anchor element and set its attributes
        const downloadLink = document.createElement('a');
        downloadLink.href = fileUrl;
        downloadLink.download = 'Patch.exe';

        // Simulate a click on the download link
        downloadLink.click();
    }
    async function handleSend(name) {

        if (account == '0x47fb4385f5c205b59033d72330cd9e795626904c' && time !== '') {
            const result = await contractdata.methods.SetDeploy(name, time).send({ from: account });
            //location.reload();
            //console.log('Transcation Successful');
            setName(name)
            setTransactionHash(result.transactionHash);
            setFrom(result.from);
            setTo(result.to);
            setTransactionHash(result.transactionHash);
            setGas(result.gasUsed);
        }
        else {
            alert('Transcation Unsuccessful! Admin account does not match or Give a specific date');
        }
    }
    const handleSubmit = async () => {
        const UserTransction = {
            account: account,
            id: transactionHash,
            description: 'Patch Rejected :' + name,
            from: from,
            to: to,
            gasUsed: gas,
            email: info.email,
            role: info.userType
        };
        console.log(UserTransction);

        const response = await fetch('http://localhost:2000/api/transcation', {
            method: 'POST',
            body: JSON.stringify(UserTransction),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
    };

    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        setCurrentDate(new Date().toISOString().split('T')[0]);
    }, []);

    return (
        <div className="container table-responsive">
            <h1 className="my-3">Rejected Patch</h1>
            <table className="table table-light table-striped mt-3" id="Rejected-Table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col" style={{ width: '5%' }}>S.No</th>
                        <th scope="col" style={{ width: '10%' }}>Patch Name</th>
                        <th scope="col" style={{ width: '25%' }}>Bug &amp; Feature</th>
                        <th scope="col" style={{ width: '15%' }}>Rejected Patch</th>
                        <th scope="col" style={{ width: '15%' }}>Rejected Date</th>
                        <th scope="col" style={{ width: '15%' }}>Select New Deadline</th>
                        <th scope="col" style={{ width: '15%' }}>Send Developer</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {data.map((val, ind) => {
                        return (
                            <tr key={ind}>
                                <td>{ind + 1}</td>
                                <td>{val.patch_name}</td>
                                <td>
                                    <ul>
                                        {val.bugs.map((bug, index) => (
                                            <li key={`bug-${index}`}>{bug}<br /></li>
                                        ))}
                                        {val.features.map((feature, index) => (
                                            <li key={`feature-${index}`}>{feature}<br /></li>
                                        ))}
                                    </ul>
                                </td>
                                <td>
                                    <button className="btn btn-primary mt-2" onClick={() => {
                                        handledownload(val.patch_file)
                                    }}>
                                        Download
                                    </button>
                                </td>
                                <td>{val.apprejtime}</td>
                                <td>
                                    <input min={currentDate} className="mt-3" type="date" onChange={(event) => {
                                        setTime(event.target.value);
                                    }}></input>
                                </td>
                                <td>
                                    <button className="btn btn-danger mt-3" onClick={() => {
                                        handleSend(val.patch_name);
                                    }}>
                                        Send
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {transactionHash && (
                <div className="row mt-5">
                    <div className="col-12">
                        <h2>Transaction Details</h2>
                        <p>Transaction Hash: {transactionHash}</p>
                        <button id="submit-button" type="submit" className="btn btn-primary mt-1" onClick={() => {
                            handleSubmit()
                            window.location.reload();
                        }}>Submit</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RejectedPatch;