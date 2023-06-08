import { usePolybase } from "@polybase/react";
import { useState } from 'react';
import { sendNotifications } from '../../hooks/usePush';
import { erc721Transfer, getAddress } from '../../hooks/useUserOp';
import { NFT_ADDRESS } from "../../utils/Contents";
import { CLIOpts } from "../../utils/types";
import './../../css/App.css';
import { DB_COLLECTION_NAME } from './../../utils/Contents';
import { getCurrentTime } from './../../utils/date';

/**
 * ERC721Transfer Component
 */
const ERC721Transfer = (props:any) => { 
    const [nftAddress, setNftAddress] = useState(NFT_ADDRESS);
    const [address, setAddress] = useState('');
    const [tokenId, setTokenId] = useState('');

    const polybase = usePolybase();

    const {
        setIsLoading,
        factoryAddress
    } = props;

    /**
     * NFTをtransferするためのメソッド
     */
    const handleErc721Transfer = async () => {
        const opts: CLIOpts = {
            dryRun: false, // Set to true if you want to perform a dry run
            withPM: false, // Set to true if you want to use a paymaster
        };
    
        try {
            setIsLoading(true);
            // get sender address
            const sender = await getAddress(factoryAddress);
            // send NFT 
            await erc721Transfer(
                nftAddress, 
                address, 
                tokenId, 
                opts, 
                factoryAddress
            ).then(async(res) => {
                // send notifications
                await sendNotifications(address);
                const currentTime = getCurrentTime();
                
                // data insert to Polybase DB
                await polybase
                    .collection(DB_COLLECTION_NAME)
                    .create([
                        res,
                        sender, 
                        "NFT",
                        nftAddress,
                        address,
                        tokenId,
                        factoryAddress,
                        "success",
                        currentTime
                    ]); 
            });;
            alert('Transfer successful');
            console.log('Transfer successful');
            setIsLoading(false);
        } catch (err) {
            console.error('Transfer failed', err);
            alert('Transfer failed');
            setIsLoading(false);
        }
    };

    return (
        <div className='px-6 py-6 bg-white rounded-md border-b border-gray-200'>
            <h1 className='text-lg mb-4'>Let's NFT transfer!!</h1>
            <input
                className='block'
                type="text"
                value={nftAddress}
                onChange={(e) => setNftAddress(e.target.value)}
                placeholder="Enter ERC20 Token address"
            />
            <input
                className='block'
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter to address"
            />
            <input
                className='block'
                type="text"
                value={tokenId}
                onChange={(e) => setTokenId(e.target.value)}
                placeholder="Enter tokenID"
            />
            <button
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
                onClick={handleErc721Transfer}
            >
                Transfer
            </button>
        </div>
    );
}

export default ERC721Transfer;
