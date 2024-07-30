import { Beans } from "@web3uikit/icons";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const Header = () => {
const [account, setAccount] = useState('');
const [web3, setWeb3] = useState(null);

useEffect(() => {
    if (window.ethereum) {
    const web3Instance = new Web3(window.ethereum);
    setWeb3(web3Instance);
    } else if (window.web3) {
    const web3Instance = new Web3(window.web3.currentProvider);
    setWeb3(web3Instance);
    } else {
    window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
}, []);

const connectWallet = async () => {
    if (web3) {
    const accounts = await web3.eth.requestAccounts();
    setAccount(accounts[0]);
    }
};

const disconnectWallet = () => {
    setAccount('');
};

const shortenAddress = (address) => {
    return address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'No wallet connected';
};

return (
    <section className={styles.header}>
    <section className={styles.header_logoSection}>
        <h1 className={styles.title}>Beans Staking</h1>
        <Beans fontSize="20px" className={styles.beans} />
    </section>
      {/* <h5>Connected Account: {account ? account : 'No wallet connected'}</h5> */}
    <section className={styles.header_btn}>
        {account ? (
        <button className={styles.connectBtn} onClick={disconnectWallet}>
        {shortenAddress(account)}
        </button>
        ) : (
        <button className={styles.connectBtn} onClick={connectWallet}>
            Connect Wallet
        </button>
        )}
    </section>
    </section>
);
};

export default Header;
