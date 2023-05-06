import './App.css';
import { Client, Provider, cacheExchange, fetchExchange } from 'urql';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import TxnPage from './Components/Page/TxnPage';
import Home from './Components/Page/Home';
import Header from './Components/common/Header';
import { CurrentAccountProvider } from "./context/CurrentAccountProvider";

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
