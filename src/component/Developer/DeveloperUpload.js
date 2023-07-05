import React from "react";
import Web3 from 'web3';
import ABI from "../ABI/ABI";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function BugReportDetails() {
    let obj = JSON.parse(localStorage.getItem("object"));
    const navigate = useNavigate();

    let [account, setAccount] = useState("");
    let [contractdata, setContractdata] = useState({});
    let [transactionHash, setTransactionHash] = useState("");
    let { ethereum } = window;
    let [file,isFile] = useState(false);

    useEffect(() => {
        async function Connection() {
            let accounts = await ethereum.request({ method: "eth_requestAccounts" });
            setAccount(accounts[0]);
            const web3 = new Web3(window.ethereum);
            const Address = "0x8d3Ee0BE38C3F03a08aeFeB58A710d81c89534b5";
            let contract = new web3.eth.Contract(ABI, Address);
            setContractdata(contract);
        }
        Connection();
    }, []);

    const SendPatch = () => {
        let obj = JSON.parse(localStorage.getItem("object"));
        let fileinput = document.getElementById("Patch-File");
        const file = fileinput.files[0];
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = async () => {
            const fileData = new Uint8Array(reader.result);
            const timestamp = new Date();
            const Time = timestamp.toString();
            console.log(obj[0], obj[1], timestamp, fileData);
            document.getElementById('up').innerHTML = "Upload Time:";
            document.getElementById('upload-time').innerHTML = Time;
            const result = await contractdata.methods.SetPatchFile(obj[2], fileData,Time).send({ from: account });
            setTransactionHash(result.transactionHash);
            alert('Transcation Successful');
        }
    }

    return (
        <div className="container my-5 py-3">
            <div className="card">
                <div className="card-header">
                    <h2 className="card-title text-center">Bug Report Details</h2>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="bug-title">
                                    <h5>Patch Name:</h5>
                                </label>
                                <span id="patch-name" className="form-control-plaintext">{obj[2]}</span>
                            </div>
                            <div className="form-group mt-4">
                                <label htmlFor="bug-title">
                                    <h5>Bugs Title:</h5>
                                </label>
                                <span id="bug-title" className="form-control-plaintext">
                                    {obj[0].join('\n')}
                                </span>
                            </div>
                            <div className="form-group mt-4">
                                <label htmlFor="feature-title">
                                    <h5>Features Title:</h5>
                                </label>
                                <span id="feature-title" className="form-control-plaintext">{obj[1].join('\n')}</span>
                            </div>
                            <div className="form-group mt-4">
                                <label htmlFor="feature-description">
                                    <h5>Deadline:</h5>
                                </label>
                                <span id="deadline" className="form-control-plaintext">
                                    {obj[3]}
                                </span>
                            </div>
                            <div className="form-group mt-4">
                                <label htmlFor="feature-description">
                                    <h5 id="up"></h5>
                                </label>
                                <span id="upload-time" className="form-control-plaintext"></span>
                            </div>
                            <div className="form-group">
                                <div className="input-group mb-3 mt-3">
                                    <input onChange={()=>isFile(true)} type="file" className="form-control" id="Patch-File" />
                                    <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary mt-2" onClick={SendPatch} disabled={!file}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            {transactionHash && (
                <div className="row mt-5">
                    <div className="col-12">
                        <h2>Transaction Details</h2>
                        <p>Transaction Hash: {transactionHash}</p>
                        <button type="submit" className="btn btn-primary mt-2" onClick={()=>{navigate('/UploadPatch')}}>New Upload</button>
                    </div>
                </div>
            )}
        </div>
    );


}

export default BugReportDetails;
