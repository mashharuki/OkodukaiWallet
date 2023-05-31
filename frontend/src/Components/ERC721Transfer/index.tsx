import { useState } from 'react';
import { erc721Transfer } from '../../hooks/useUserOp';
import { CLIOpts } from "../../utils/types";
import './../../css/App.css';
import { NFT_ADDRESS } from "./../common/Contents";

/**
 * ERC721Transfer Component
 */
const ERC721Transfer = (props:any) => { 
    const [nftAddress, setNftAddress] = useState(NFT_ADDRESS);
    const [address, setAddress] = useState('');
    const [tokenId, setTokenId] = useState('');

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
            // NFTをトランスファーする。
            await erc721Transfer(nftAddress, address, tokenId, opts, factoryAddress);
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
