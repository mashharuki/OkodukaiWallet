import { useState } from "react";
import { useLocation } from 'react-router-dom';

import ERC20Transfer from "../ERC20Transfer";
import Transfer from "../Transfer";
import Spinner from "../common/Spinner";

const TxnPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const contractAddress = location.state.contractAddress;
  console.log('state: ', location.state);
  console.log('contractAddress: ', contractAddress);

  return(
    <header className="App-header">
      <h1>Account Abstruction Dapp</h1>
      {isLoading ?
      <Spinner/>:(
        <>
          <Transfer/>
          <ERC20Transfer/>
        </>
      )
    }
    </header>
  )
}

export default TxnPage;