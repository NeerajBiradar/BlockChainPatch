import React from "react";
import Web3 from 'web3';
import ABI from '../ABI/ABI';
import $ from 'jquery';
import { useEffect, useState } from "react";


const PatchRequestForm = () => {
  let [account, setAccount] = useState("");
  let [contractdata, setContractdata] = useState({});
  let [bug_data, setBugData] = useState([]);
  let [feature_data, setFeatureData] = useState([]);
  let { ethereum } = window;
  let [Bugcheck, BugisChecked] = useState(false);
  let [Featurecheck, FeatureisChecked] = useState(false);
  let [transactionHash, setTransactionHash] = useState("");
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [gas, setGas] = useState('');
  const info = JSON.parse(localStorage.getItem('Info'));
  const [name, setName] = useState("")

  useEffect(() => {
    async function Connection() {
      let accounts = await ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
      const web3 = new Web3(window.ethereum);
      const Address = "0x54e6f321c3685A4Ca2DE4fFc3B42de99dD9433Ec";
      let contract = new web3.eth.Contract(ABI, Address);
      setContractdata(contract);
      let tempbug_data = await contract.methods.SendBugReport().call();
      let tempfeature_data = await contract.methods.SendFeatureReport().call();
      //console.log(tempbug_data);
      tempbug_data = tempbug_data.filter((val, ind) => val.priority != "default" && val.labelbugs == 0).reverse()
      //console.log(tempbug_data);

      setBugData(tempbug_data);
      tempfeature_data = tempfeature_data.filter((val, ind) => val.priority != "default" && val.labelfeatures == 0).reverse()
      setFeatureData(tempfeature_data);

      $(function () {
        $('#Bug-Table').DataTable({
          paging: false
        });
      })
      $(function () {
        $('#Feature-Table').DataTable({
          paging: false
        });
      })
    }
    Connection();

  }, []);

  const BugArr = [];
  const FeatArr = [];
  const SendTeamBugReport = async () => {
    for (let i = 0; i < bug_data.length; i++) {
      const checkbox = document.getElementById('checkbox-b-' + i);
      if (checkbox.checked) {
        BugisChecked(true);
        BugArr.push(bug_data[i].bug_title);
      }
    }
    for (let i = 0; i < feature_data.length; i++) {
      const checkbox = document.getElementById('checkbox-f-' + i);
      if (checkbox.checked) {
        FeatureisChecked(true);
        FeatArr.push(feature_data[i].feat_title);
      }
    }
    const patch_name = document.getElementById('Patch-Name').value;
    setName(patch_name)
    const deadline = document.getElementById('deadline').value;
    console.log(BugArr, FeatArr, patch_name, deadline);
    const temp = BugArr.length + FeatArr.length;
    if (temp > 0 && patch_name.trim() != '' && deadline.trim() != '') {
      if (account.toLowerCase() == '0x47fb4385f5c205b59033d72330cd9e795626904c') {
        const result = await contractdata.methods.SetPatch(BugArr, FeatArr, patch_name, deadline).send({ from: account });
        setTransactionHash(result.transactionHash);
        setFrom(result.from);
        setTo(result.to);
        setTransactionHash(result.transactionHash);
        setGas(result.gasUsed);

      }
      else {
        alert('Transcation Unsuccessful! Admin account does not match');
      }
    }
    else {
      alert("Make sure every field is selected");
    }
  }

  const handleSubmit = async () => {
    const UserTransction = {
      account: account,
      id: transactionHash,
      description: 'Patch Requested :' + name,
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
  useEffect(() => {
    if (transactionHash) {
      const submitButton = document.getElementById("submit-button");
      if (submitButton) {
        submitButton.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [transactionHash]);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toISOString().split('T')[0]);
  }, []);

  return (
    < div className='container my-2' >
      <div className="row">
        <h1 className="my-3">Patch Request</h1>
        <div className="col-md-6 table-responsive">
          <table className="table table-light table-striped mt-3" id="Bug-Table">
            <thead className="table-dark">
              <tr>
                <th scope="col" style={{ width: '10%' }}>S.No</th>
                <th scope="col" style={{ width: '50%' }}>Bugs Title</th>
                <th scope="col" style={{ width: '30%' }}>Bugs Priority</th>
                <th scope="col" style={{ width: '10%' }}>Select</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {bug_data.map((val, ind) => {
                return (
                  <tr key={ind}>
                    <td>{ind + 1}</td>
                    <td>{val.bug_title}</td>
                    <td>
                      {val.priority}
                    </td>
                    <td>
                      <input type="checkbox" name="myCheckbox" id={`checkbox-b-${ind}`} />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="col-md-6 table-responsive">
          <table className="table table-light table-striped mt-3" id="Feature-Table">
            <thead className="table-dark">
              <tr>
                <th scope="col" style={{ width: '10%' }}>S.No</th>
                <th scope="col" style={{ width: '50%' }}>Feature Title</th>
                <th scope="col" style={{ width: '30%' }}>Feature Priority</th>
                <th scope="col" style={{ width: '10%' }}>Select</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {feature_data.map((val, ind) => {
                return (
                  <tr key={ind}>
                    <td>{ind + 1}</td>
                    <td>{val.feat_title}</td>
                    <td>
                      {val.priority}
                    </td>
                    <td>
                      <input type="checkbox" name="myCheckbox" id={`checkbox-f-${ind}`} />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <form action="#" method="POST">
        <div className="form-group mt-3" style={{ width: '50%' }}>
          <label htmlFor="Patch-Name">
            <h6>Patch Name</h6>
          </label>
          <input
            id="Patch-Name"
            type="text"
            className="form-control mt-1"
            name="bug-title"
            required
          />
        </div>
      </form>
      <div className="form-group mt-3" style={{ width: '50%' }}>
        <label htmlFor="deadline">
          <h6>Deadline:</h6>
        </label>
        <div className="input-group date" id="datetimepicker" data-target-input="nearest">
          <input
            type="date"
            className="form-control datetimepicker-input"
            id="deadline"
            data-target="#datetimepicker"
            placeholder="Select deadline"
            min={currentDate}
          />
          <div className="input-group-text">
            <i className="fa fa-calendar"></i>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-2" onClick={SendTeamBugReport}>Confirm Transaction</button>
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
    </div >
  );
}

export default PatchRequestForm;
