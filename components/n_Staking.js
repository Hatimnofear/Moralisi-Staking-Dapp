import React, { useState } from 'react';
import Web3 from 'web3';
import { stakingContractABI, stakingContractAddress } from '../utils/contractInteraction';

const Staking = () => {
  const [amount, setAmount] = useState('');

  const stakeTokens = async () => {
    const web3 = new Web3(window.ethereum);
    const stakingContract = new web3.eth.Contract(stakingContractABI, stakingContractAddress);
    const accounts = await web3.eth.getAccounts();
    await stakingContract.methods.stakeTokens(web3.utils.toWei(amount, 'ether')).send({ from: accounts[0] });
  };

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount to stake"
      />
      <button onClick={stakeTokens}>Stake</button>
    </div>
  );
};

export default Staking;
