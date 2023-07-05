import React from "react";
import Web3 from 'web3';
import ABI from '../ABI/ABI';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import { useEffect, useState } from "react";

const DownloadPatch = () => {
    let [account, setAccount] = useState("");
    let [contractdata, setContractdata] = useState({});
    let [data, setData] = useState([]);
    let { ethereum } = window;
    useEffect(() => {
        async function Connection() {
            let accounts = await ethereum.request({ method: "eth_requestAccounts" });
            setAccount(accounts[0]);
            const web3 = new Web3(window.ethereum);
            const Address = "0x8d3Ee0BE38C3F03a08aeFeB58A710d81c89534b5";
            let contract = new web3.eth.Contract(ABI, Address);
            setContractdata(contract);
            let temp = await contract.methods.Developer().call();
            temp = temp.filter((val, ind) => {
                return val.deploy == 'deployed'
            });
            setData(temp);
            $(function () {
                $('#Deployed-Table').DataTable();
            })
        }
        Connection();

    }, []);
    // console.log('hii',contractdata);

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
        <div className="container table-responsive mt-2">
            <table className="table table-light table-striped table-hover" id="Deployed-Table">
                <thead className="table-primary">
                    <tr>
                        <th scope="col" style={{ width: '5%' }}>S.No</th>
                        <th scope="col" style={{ width: '15%' }}>Patch Name</th>
                        <th scope="col" style={{ width: '38%' }}>Bug &amp; Feature Fixed</th>
                        <th scope="col" style={{ width: '30%' }}>Deployed Date</th>
                        <th scope="col" style={{ width: '15%' }}>Deployed Patch</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {data.reverse().map((val, ind) => {
                        return (
                            <tr key={ind}>
                                <td>{ind + 1}</td>
                                <td>{val.patch_name}</td>
                                <td>
                                    <ul><h6 className="fw-bold">Bug Fixed</h6>
                                        {val.bugs.map((bug, index) => (
                                            <li key={`bug-${index}`}>{bug}<br /></li>
                                        ))}
                                        <h6 className="mt-3 fw-bold">Feature added</h6>
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

export default DownloadPatch;