import React from "react"
import Web3 from 'web3'
import ABI from "../ABI/ABI"
import { useEffect, useState } from "react"

const FeatureReport = () => {
    let [account, setAccount] = useState("")
    let [contractdata, setContractdata] = useState({})
    let { ethereum } = window
    let [isFormFilled, setIsFormFilled] = useState(false)
    let [transactionHash,setTransactionHash] = useState("")
    let [from,setFrom] = useState('')
    let [to,setTo] = useState('')
    let [gas,setGas] = useState('')
    const info = JSON.parse(localStorage.getItem('Info'))

    useEffect(() => {
        async function Connection() {
            let accounts = await ethereum.request({ method: "eth_requestAccounts" })
            setAccount(accounts[0])
            const web3 = new Web3(window.ethereum)
            const Address = "0x8d3Ee0BE38C3F03a08aeFeB58A710d81c89534b5"
            let contract = new web3.eth.Contract(ABI, Address)
            setContractdata(contract)
        }
        Connection()
    }, [])

    const SendFeatureReport = async () => {
        const feat_title = document.getElementById("feat-title").value
        const feat_description = document.getElementById("feat-description").value

        if (account.toLowerCase() === '0xcfca6ef8c30b803ecd38a98c61c52d9d8f9bc8ba'  && isFormFilled) {
            const result = await contractdata.methods.ReciveFeatureReport(feat_title, feat_description).send({ from: account })
            setFrom(result.from)
            setTo(result.to)
            setTransactionHash(result.transactionHash)
            setGas(result.gasUsed)
        }
        else {
            alert("Transcation Unsuccessful! User account does not match")
            const form = document.getElementById('Feat-form-id')
            form.reset()
            setIsFormFilled(false)
        }
    }
    const handleFormChange = () => {
        const bug_title = document.getElementById("feat-title").value
        const bug_description = document.getElementById("feat-description").value
        if (bug_title && bug_description) {
            setIsFormFilled(true)
        } else {
            setIsFormFilled(false)
        }
    }
    const handleSubmit = async () => {
        const UserTransction = {
          account: account,
          id: transactionHash,
          description : 'Feature title : '+ document.getElementById('feat-title').value,
          from : from,
          to : to,
          gasUsed : gas,
          email : info.email,
          role : info.userType
        }
    
        const response = await fetch('http://localhost:2000/api/transcation', {
          method: 'POST',
          body: JSON.stringify(UserTransction),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const json = await response.json()
      }
    return (
        
        <div className="container">
            <div className="row">
                <div className="col-12 mt-5">
                    <h1>Feature Description Form</h1>
                    <form action="#" method="POST" id="Feat-form-id">
                        <div className="form-group mt-3">
                            <label htmlFor="bug-title">Feature Title:</label>
                            <input type="text" className="form-control mt-1" id="feat-title" name="bug-title" onChange={handleFormChange} required />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="bug-description">Feature Description:</label>
                            <textarea className="form-control mt-1" id="feat-description" name="bug-description" rows="5" onChange={handleFormChange} required></textarea>
                        </div>
                    </form>
                    <button type="submit" className="btn btn-primary mt-2" onClick={SendFeatureReport} disabled={!isFormFilled} >Confirm Transaction</button>
                </div>
            </div>
            {transactionHash && (
                <div className="row mt-5">
                    <div className="col-12">
                        <h2>Transaction Done</h2>
                        <p>Transaction Hash: {transactionHash}</p>
                        <button type="submit" className="btn btn-primary mt-2" onClick={() => {
                            handleSubmit()
                            const form = document.getElementById('Feat-form-id')
                            form.reset()
                            setTransactionHash("")
                        }}>Submit</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FeatureReport