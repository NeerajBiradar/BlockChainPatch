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

    useEffect(() => {
        async function Connection() {
            let accounts = await ethereum.request({ method: "eth_requestAccounts" });
            setAccount(accounts[0]);
            const web3 = new Web3(window.ethereum);
            const Address = "0xC73b335Daeb32f4df2635aA821A4B8532a18EC9c";
            let contract = new web3.eth.Contract(ABI, Address);
            setContractdata(contract);
            let temp = await contract.methods.Developer().call();
            temp = temp.filter((val, ind) => {
                return val.check == "Rejected" && val.deploy == 'not'
            });
            console.log(temp, "Rejected");
            setData(temp);
            $(function () {
                $('#Rejected-Table').DataTable();
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
    async function handleSend(name) {

        if (account == '0x47fb4385f5c205b59033d72330cd9e795626904c') {
            await contractdata.methods.SetDeploy(name, time).send({ from: account });
            //location.reload();
            console.log('Transcation Successful');
        }
        else {
            console.log('Transcation Unsuccessful! Admin account does not match');
        }
    }


    return (
        <div className="container table-responsive">
            <table className="table table-light table-striped mt-3" id="Rejected-Table">
                <thead className="table-primary">
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
                                    <input className="mt-3" type="date" onChange={(event) => {
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
        </div>
    );
}

export default RejectedPatch;