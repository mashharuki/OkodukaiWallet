import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Presets } from 'userop';
import config from '../../config.json';
import { shortAddress } from '../../utils/ethereum';
import { FactoryCreated } from '../../utils/types';
import SendModal from '../common/SendModal';
import { MUMBAI_RPC_URL, POLYGONSCAN_URL } from './../common/Contents';

interface Props {
    factoryCreated: FactoryCreated;
}

/**
 * tableRows
 */
const TableRow = (porps: Props) => {
    const [address, setAddress] = useState('');
    const [balance, setBalance] = useState('0');

    const factoryCreated = porps.factoryCreated;

    /**
     * コントラクトウォレットのアドレスを取得するためのメソッド
     */
    const getAddress = async (factoryAddress: string) => { 
        // SimpleAccountオブジェクトを生成
        const simpleAccount = await Presets.Builder.SimpleAccount.init(
            config.signingKey,
            config.rpcUrl,
            config.entryPoint,
            factoryAddress
        );

        setAddress(simpleAccount.getSender());
        return simpleAccount.getSender();
    };

    /**
     * コントラクトウォレットの残高を取得するためのメソッド
     * @param factoryAddress
     */
    const getBalance = async (factoryAddress: string) => { 
        
        const contractWalletAddress = await getAddress(factoryAddress);

        // 残高を取得する。
        const provider = new ethers.providers.JsonRpcProvider(MUMBAI_RPC_URL);
        const getBalancePromise = await provider.getBalance(contractWalletAddress);
        console.log("balance:", getBalancePromise);
        const formatBalance = Number(ethers.utils.formatEther(getBalancePromise));
        const balance = String(formatBalance.toFixed(3));
        setBalance(balance);
    }

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
                <SendModal address={address} />
            </td>
        </tr>
    )
}

export default TableRow;