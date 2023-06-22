import React, { useState, useEffect } from 'react'
import Web3 from "web3";
import ABI from './ABI';


const Web3Contract = () => {
    const { ethereum } = window;
    const [contract, setContract] = useState(null);
    const [account, setAccount] = useState("");
    useEffect(() => {
        const connectMetamask = async () => {
            if (window.ethereum !== "undefined") {
                const accounts = await ethereum.request({
                    method: "eth_requestAccounts",
                });
                setAccount(accounts[0]);
            }
            const Address = "0xC73b335Daeb32f4df2635aA821A4B8532a18EC9c";
            window.web3 = new Web3(window.ethereum);
            window.contract = await new window.web3.eth.Contract(ABI, Address);
            setContract(window.contract);
        };
        connectMetamask();
    }, []);
    return [account,contract];
};

export default Web3Contract;