import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Client, Provider, cacheExchange, fetchExchange } from 'urql';
import Footer from './Components/common/Footer';
import Header from './Components/common/Header';
import Home from './Page/Home';
import TxnPage from './Page/TxnPage';
import { ContractProvider } from './context/ContractProvider';
import { CurrentAccountProvider } from "./context/CurrentAccountProvider";
import './css/App.css';
import { GRAPHQL_API_ENDPOINT } from "./utils/Contents";


// create client instance for GraphQL
const client = new Client({
  url: GRAPHQL_API_ENDPOINT,
  exchanges: [cacheExchange, fetchExchange],
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
          <BrowserRouter>
            <App/>
          </BrowserRouter>
        </Provider>
      </ContractProvider>
    </CurrentAccountProvider>
  );
}

export default Root;
