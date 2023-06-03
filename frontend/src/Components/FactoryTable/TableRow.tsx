import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAddress } from '../../hooks/useUserOp';
import { MUMBAI_RPC_URL, POLYGONSCAN_URL } from '../../utils/Contents';
import { shortAddress } from '../../utils/ethereum';
import { FactoryCreated } from '../../utils/types';
import SendModal from '../common/SendModal';

interface Props {
    factoryCreated: FactoryCreated;
    setIsLoading: (arg0: boolean) => void;
    currentAddress: string;
    addStake: (arg0: string, arg1: string) => void;
}


/**
 * tableRows
 */
const TableRow = (porps: Props) => {
    const [address, setAddress] = useState('');
    const [balance, setBalance] = useState('0');

    const factoryCreated = porps.factoryCreated;
    const setIsLoading = porps.setIsLoading;
    const currentAddress = porps.currentAddress;
    const addStake = porps.addStake;


    /**
     * get ContractWallet's balance method
     * @param factoryAddress
     */
    const getBalance = async (factoryAddress: string) => {         
        const contractWalletAddress = await getAddress(factoryAddress);
        setAddress(contractWalletAddress);

        // 残高を取得する。
        const provider = new ethers.providers.JsonRpcProvider(MUMBAI_RPC_URL);
        const getBalancePromise = await provider.getBalance(contractWalletAddress);
        // console.log("balance:", getBalancePromise);
        const formatBalance = Number(ethers.utils.formatEther(getBalancePromise));
        const balance = String(formatBalance.toFixed(3));
        setBalance(balance);
    }

    /**
     * addStake method
     */
    const addStakeETH = async () => {
        try {
            setIsLoading(true);
            await addStake(currentAddress, factoryCreated.factoryAddress);
            alert('send sucess!!!');
            setIsLoading(false);
        } catch(err) {
            console.log("err:", err);
            alert('send fail....');
            setIsLoading(false);
        }
    };

    useEffect(() => { 
        /**
         * 初期化メソッド
         */
        const init = async() => { 
            await getAddress(factoryCreated.factoryAddress);
            await getBalance(factoryCreated.factoryAddress);
        };
        init();
    });

    return (
        <tr key={factoryCreated.factoryId} className="border-b border-slate-300">
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {factoryCreated.factoryId}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm underline underline-offset-4'>
                <a href={POLYGONSCAN_URL + factoryCreated.factoryAddress}>
                    {shortAddress(factoryCreated.factoryAddress)}
                </a>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm underline underline-offset-4'>
                <Link to='/transfer' state={{
                    factoryAddress: factoryCreated.factoryAddress,
                    contractAddress: address
                }}>
                    {address}
                </Link>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {balance}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <SendModal address={address} setIsLoading={setIsLoading} />
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm' >
                <button 
                    className="bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mx-auto transition duration-150 ease-in-out rounded-full px-4 sm:px-8 py-2 text-xs sm:text-sm"
                    onClick={addStakeETH}
                >
                    add stake
                </button>
            </td>
        </tr>
    )
}

export default TableRow;