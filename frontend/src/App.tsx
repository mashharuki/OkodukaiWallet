import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { transfer } from './scripts/simpleAccount/transfer';
import { CLIOpts } from "../utils/types";

/**
 * App Component
 * @returns 
 */
function App() {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleTransfer = async () => {
    const opts: CLIOpts = {
      dryRun: false, // Set to true if you want to perform a dry run
      withPM: false, // Set to true if you want to use a paymaster
    };
  
    try {
      await transfer(address, amount, opts);
      console.log('Transfer successful');
    } catch (err) {
      console.error('Transfer failed', err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's transfer!!</h1>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter address"
        />
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
        <button onClick={handleTransfer}>Transfer</button>
      </header>
    </div>
  );
}

export default App;
