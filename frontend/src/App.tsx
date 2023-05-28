import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Client, Provider, cacheExchange, fetchExchange } from 'urql';
import { GRAPHQL_API_ENDPOINT } from "./Components/common/Contents";
import Header from './Components/common/Header';
import Home from './Page/Home';
import TxnPage from './Page/TxnPage';
import { CurrentAccountProvider } from "./context/CurrentAccountProvider";
import './css/App.css';


// create client
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
    </>
  )
}

function Root() {
  return (
    <CurrentAccountProvider>
      <Provider value={client}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>
    </CurrentAccountProvider>
  );
}

export default Root;
