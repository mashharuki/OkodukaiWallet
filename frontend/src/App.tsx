import React from 'react';
import './App.css';
import Transfer from './Components/Transfer';
import ERC20Transfer from './Components/ERC20Transfer';

/**
 * App Component
 * @returns 
 */
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Account Abstruction Dapp</h1>
        <Transfer/> 
        <ERC20Transfer/>
      </header>
    </div>
  );
}

export default App;
