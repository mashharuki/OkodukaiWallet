import React, { useState } from 'react';
import './../../App.css';
import erc20Transfer from '../../scripts/simpleAccount/erc20Transfer';
import { CLIOpts } from "../../utils/types";

/**
 * ER20Transfer Component
 */
const ERC20Transfer = () => { 
    const [tokenAddress, setTokenAddress] = useState('0x326C977E6efc84E512bB9C30f76E30c160eD06FB');
    const [address, setAddress] = useState('');
    const [amount, setAmount] = useState('');

    const handleErc20Transfer = async () => {
        const opts: CLIOpts = {
        dryRun: false, // Set to true if you want to perform a dry run
        withPM: false, // Set to true if you want to use a paymaster
    };
    
        try {
            await erc20Transfer(tokenAddress, address, amount, opts);
            alert('Transfer successful');
            console.log('Transfer successful');
        } catch (err) {
            console.error('Transfer failed', err);
            alert('Transfer failed');
        }
    };

    return (
        <>
            <h1>Let's ERC20 Token transfer!!</h1>
            <input
                type="text"
                value={tokenAddress}
                onChange={(e) => setTokenAddress(e.target.value)}
                placeholder="Enter ERC20 Token address"
            />
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter to address"
            />
            <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
            />
            <button 
                onClick={handleErc20Transfer}
            >
                Transfer
            </button>
        </>
    );
}

export default ERC20Transfer;
