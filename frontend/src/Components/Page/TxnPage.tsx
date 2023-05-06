import { useState } from "react";
import { useLocation } from 'react-router-dom';

import ERC20Transfer from "../ERC20Transfer";
import Transfer from "../Transfer";
import Spinner from "../common/Spinner";

const TxnPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const factoryAddress = location.state.factoryAddress;
  const contractAddress = location.state.contractAddress;

  return(
    <header className="App-header">
      <h1>Account Abstruction Dapp</h1>
      <h2>factoryAddress: {factoryAddress}</h2>
      <h2>contractAddress: {contractAddress}</h2>
      {isLoading ?
      <Spinner/>:(
        <>
          <Transfer setIsLoading={setIsLoading} factoryAddress={factoryAddress}/>
          <ERC20Transfer setIsLoading={setIsLoading} factoryAddress={factoryAddress}/>
        </>
      )
    }
    </header>
  )
}

export default TxnPage;