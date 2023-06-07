import { Polybase } from "@polybase/client";
import { ethPersonalSign } from '@polybase/eth';
import { PolybaseProvider } from "@polybase/react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Client, Provider, cacheExchange, fetchExchange } from 'urql';
import Footer from './Components/common/Footer';
import Header from './Components/common/Header';
import Home from './Page/Home';
import TxnPage from './Page/TxnPage';
import { ContractProvider } from './context/ContractProvider';
import { CurrentAccountProvider } from "./context/CurrentAccountProvider";
import './css/App.css';
import { DB_NAME_SPACE, GRAPHQL_API_ENDPOINT } from "./utils/Contents";

const {
  REACT_APP_CONNECT_ADDRESS_PRIVATE_KEY
} = process.env;

// create client instance for GraphQL
const client = new Client({
  url: GRAPHQL_API_ENDPOINT,
  exchanges: [cacheExchange, fetchExchange],
});

// Config of polybase
const polybase = new Polybase({
  defaultNamespace: DB_NAME_SPACE,
});

polybase.signer((data: any) => {
  return {
    h: 'eth-personal-sign',
    sig: ethPersonalSign(`0x${REACT_APP_CONNECT_ADDRESS_PRIVATE_KEY!}`, data)
  }
});

/**
 * App Component
 * @returns 
 */
function App() {
  return(
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/transfer' element={<TxnPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

function Root() {
  return (
    <CurrentAccountProvider>
      <ContractProvider>
        <Provider value={client}>
          <PolybaseProvider polybase={polybase}>
            <BrowserRouter>
              <App/>
            </BrowserRouter>
          </PolybaseProvider>
        </Provider>
      </ContractProvider>
    </CurrentAccountProvider>
  );
}

export default Root;
