import React from "react";
import Web3 from 'web3';
import ABI from '../ABI/ABI';

import $ from 'jquery';
import { useEffect, useState } from "react";

const DeployedPatch = () => {
    let [account, setAccount] = useState("");
    let [contractdata, setContractdata] = useState({});
    let [data, setData] = useState([]);
    let { ethereum } = window;
    useEffect(() => {
        async function Connection() {
            let accounts = await ethereum.request({ method: "eth_requestAccounts" });
            setAccount(accounts[0]);
            const web3 = new Web3(window.ethereum);
            const Address = "0x54e6f321c3685A4Ca2DE4fFc3B42de99dD9433Ec";
            let contract = new web3.eth.Contract(ABI, Address);
            setContractdata(contract);
            let temp = await contract.methods.Developer().call();
            temp = temp.filter((val, ind) =>val.deploy == 'deployed').reverse()
            setData(temp);
            $(function () {
                $('#Deployed-Table').DataTable();
            })
        }
        Connection();

    }, []);

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

    return (
        <div className="container table-responsive">
            <h1 className="my-3">Deployed Patch</h1>
            <table className="table table-light table-striped mt-3" id="Deployed-Table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col" style={{ width: '5%' }}>S.No</th>
                        <th scope="col" style={{ width: '10%' }}>Patch Name</th>
                        <th scope="col" style={{ width: '35%' }}>Bug &amp; Feature</th>
                        <th scope="col" style={{ width: '25%' }}>Deployed Date</th>
                        <th scope="col" style={{ width: '25%' }}>Deployed Patch</th>
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
                                <td>{val.deploytime}</td>
                                <td>
                                    <button className="btn btn-primary mt-2" onClick={() => {
                                        handledownload(val.patch_file)
                                    }}>
                                        Download
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default DeployedPatch;