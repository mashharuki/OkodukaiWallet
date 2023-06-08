import { usePolybase } from "@polybase/react";
import * as PushAPI from '@pushprotocol/restapi';
import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import ERC20Transfer from "../Components/ERC20Transfer";
import ERC721Transfer from "../Components/ERC721Transfer";
import Notifications from '../Components/Notifications';
import ERC20Table from "../Components/TokenTable/ERC20Table";
import NftTable from "../Components/TokenTable/NftTable";
import Transfer from "../Components/Transfer";
import TxTable from '../Components/TxTable';
import SliderBar from '../Components/common/Slidebar';
import Spinner from "../Components/common/Spinner";
import { loadNotifications } from "../hooks/usePush";
import { POLYGONSCAN_URL } from "../utils/Contents";
import { createAlchemy } from "../utils/alchemy";
import { DB_COLLECTION_NAME } from './../utils/Contents';

const alchemy = createAlchemy();

/**
 * TxnPage Component
 * @returns 
 */
const TxnPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tokens, setTokens] = useState<any[]>([]);
  const [nfts, setNfts] = useState<any[]>([]);
  const [spams, setSpams] = useState<PushAPI.ParsedResponseType[]>([]);
  const [txs, setTxs] = useState<any[]>([]);
  const [notificateFlg, setNotificateFlg] = useState(false);
  const [txFlg, setTxFlg] = useState(false);

  // Polybase config
  const polybase = usePolybase();
  const location = useLocation();
  const factoryAddress = location.state.factoryAddress;
  const contractAddress = location.state.contractAddress;


  useEffect(() => {
    const init = async() => {
      setIsLoading(true);

      // get own's NFT
      await alchemy.nft.getNftsForOwner(contractAddress).then((res:any) => {
        setNfts(res.ownedNfts);
      });
      // get own's ERC20 token
      await alchemy.core.getTokenBalances(contractAddress).then((res:any) => {
        setTokens(res.tokenBalances);
      });

      // get notifications
      const notifications = await loadNotifications(false, contractAddress);
      setSpams(notifications);
      console.log("spams:", notifications);

      var res = await polybase.collection(`${DB_COLLECTION_NAME}`)
                          .where("sender", "==", `${contractAddress}`)
                          .sort("date", "desc")
                          .get();

      console.log("txs:", res.data);
      
      setTxs(res.data);
      setIsLoading(false);
    };
    init();
  }, []);

  return(
    <div className="App">
      <header className="App-header">
        {isLoading ? (
          <Spinner/>
        ) : (
          <div className='flex flex-row'>
            <SliderBar 
              setNotificateFlg={setNotificateFlg} 
              setTxFlg={setTxFlg} 
              spams={spams !== undefined ? spams.length : 0}
              txs={txs !== undefined ? txs.length : 0}
            />
            {notificateFlg && (
              <div>
                <Notifications spams={spams} />
              </div>
            )}
            {txFlg && (
              <div>
                <>{txs !== undefined && <TxTable txs={txs} />}</>
              </div>
            )}  
            {(!notificateFlg && !txFlg ) && (
              <div>
                <div className="mb-4">
                  My Assets
                </div>
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
                {/* NFT Balance Table */}
                <NftTable nfts={nfts} />
                {/* ERC20 Token Balance Table */}
                <ERC20Table tokens={tokens} />
                <div className='flex flex-row gap-16 mt-4 mb-4'>
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
              </div>
            )}
          </div>
        )}
      </header>
    </div>
  )
}

export default TxnPage;