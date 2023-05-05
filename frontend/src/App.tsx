import React,{ useEffect, useState } from 'react';
import './App.css';
import Transfer from './Components/Transfer';
import ERC20Transfer from './Components/ERC20Transfer';
import Spinner from './Components/common/Spinner';
import config from './config.json';
import { Presets } from 'userop';

/**
 * App Component
 * @returns 
 */
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedAddress, setGeneratedAddress] = useState('');

  useEffect(() => {
    /**
     * 初期化メソッド
     */
    const init = async () => {
      setIsLoading(true)
      const simpleAccount = await Presets.Builder.SimpleAccount.init(
        config.signingKey,
        config.rpcUrl,
        config.entryPoint,
        config.simpleAccountFactory
      );

      const address = simpleAccount.getSender();
      setGeneratedAddress(address);
      setIsLoading(false)
    };
    // 初期化メソッド呼び出し
    init();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Account Abstruction Dapp</h1>
        {isLoading ?
          <Spinner/>
        : (
          <>
            Generated Address : {generatedAddress}
            <Transfer setIsLoading={setIsLoading} /> 
            <ERC20Transfer setIsLoading={setIsLoading} />
          </>
        )}
      </header>
    </div>
  );
}

export default App;
