import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import ERC20Transfer from "../Components/ERC20Transfer";
import ERC721Transfer from "../Components/ERC721Transfer";
import Transfer from "../Components/Transfer";
import Spinner from "../Components/common/Spinner";
import { POLYGONSCAN_URL } from "./../Components/common/Contents";

/**
 * TxnPage Component
 * @returns 
 */
const TxnPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const factoryAddress = location.state.factoryAddress;
  const contractAddress = location.state.contractAddress;

  return(
    <div className="App">
      <header className="App-header">
        <h2 className='text-base'>
          factory address: 
          <a href={POLYGONSCAN_URL + factoryAddress}>
            {factoryAddress}
          </a>
        </h2>
        <h2 className='text-base mb-8'>
          contract address: 
          <a href={POLYGONSCAN_URL + contractAddress}>
            {contractAddress}
          </a>
        </h2>
        {isLoading ?
          <Spinner/>
        :(
          <>
            <div className='flex flex-row gap-16 mb-4'>
              <Transfer setIsLoading={setIsLoading} factoryAddress={factoryAddress}/>
              <ERC20Transfer setIsLoading={setIsLoading} factoryAddress={factoryAddress}/>
              <ERC721Transfer setIsLoading={setIsLoading} factoryAddress={factoryAddress}/>
            </div>
            <button
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
            >
              <Link to='/'>
                Return to Home
              </Link>
            </button>
          </>
        )}
      </header>
    </div>
  )
}

export default TxnPage;