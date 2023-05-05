import React,{ useEffect, useState } from 'react';
import './App.css';
import Transfer from './Components/Transfer';
import ERC20Transfer from './Components/ERC20Transfer';
import Spinner from './Components/common/Spinner';
import config from './config.json';
import { Presets } from 'userop';
import query from './graphql/query';
import { Client, Provider, cacheExchange, fetchExchange, useQuery } from 'urql';
import FactoryTable from './Components/FactoryTable';

// SubGraph用の API エンドポイント
const API_URL = "https://api.studio.thegraph.com/query/44992/aa-factorymanager/v0.0.1";

// create client
const client = new Client({
  url: API_URL,
  exchanges: [cacheExchange, fetchExchange],
});

/**
 * App Component
 * @returns 
 */
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedAddress, setGeneratedAddress] = useState('');

  // execute query
  const [result] = useQuery({ query });
  const { data, fetching, error } = result;
  
  useEffect(() => {
    /**
     * 初期化メソッド
     */
    const init = async () => {
      setIsLoading(true);

      const simpleAccount = await Presets.Builder.SimpleAccount.init(
        config.signingKey,
        config.rpcUrl,
        config.entryPoint,
        config.simpleAccountFactory
      );

      const address = simpleAccount.getSender();
      setGeneratedAddress(address);
      setIsLoading(false);
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
            <div>Deployed FactoryContract by FactoryManager</div>
            {data !== undefined && <FactoryTable data={data} />}
          </>
        )}
      </header>
    </div>
  );
}

function Root() {
  return (
    <Provider value={client}>
      <App />
    </Provider>
  );
}

export default Root;
