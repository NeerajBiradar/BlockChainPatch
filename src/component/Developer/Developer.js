import React from "react";
import Web3 from 'web3';
import ABI from '../ABI/ABI';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DeveloperTable() {
  let [account, setAccount] = useState("");
  let [contractdata, setContractdata] = useState({});
  let [data, setData] = useState([]);
  let { ethereum } = window;
  const navigate = useNavigate();

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
        return val.patch_file == "0x64656661756c74"
      });
      console.log(temp, "Developer");
      setData(temp);
      $(function () {
        $('#Developer-Table').DataTable();
      })
    }
    Connection();

  }, []);
  return (


    <div className="container table-responsive">
      <table className="table table-light table-striped mt-3 table-hover" id="Developer-Table">
        <thead className="table-dark">
          <tr>
            <th scope="col" style={{ width: "10%" }}>S.No</th>
            <th scope="col" style={{ width: "20%" }}>Patch Name</th>
            <th scope="col" style={{ width: "40%" }}>Bug &amp; Feature</th>
            <th scope="col" style={{ width: "15%" }}>Deadline</th>
            <th scope="col" style={{ width: "15%" }}>Upload Patch</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {data.reverse().map((val, ind) => {
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
                <td>{val.deadline}</td>
                <td>
                  <button className="btn btn-success mt-3" onClick={() => {
                    localStorage.setItem("object", JSON.stringify(val));
                    navigate('/Upload')
                  }}>
                    Upload
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

export default DeveloperTable;
