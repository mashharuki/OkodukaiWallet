import config from '../../config.json';
import { ethers } from 'ethers';
import { FactoryCreated } from '../../utils/types';
import { useEffect, useState } from 'react';
import { Presets } from 'userop';
import { Link } from 'react-router-dom';

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
    const sliceFactoryAddress = (factoryCreated.factoryAddress).slice(0, 6) + '...';

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
        const provider = new ethers.providers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com');
        const getBalancePromise = await provider.getBalance(contractWalletAddress);
        console.log("balance:", getBalancePromise);
        const formatBalance = Number(ethers.utils.formatEther(getBalancePromise));
        const balance = String(formatBalance.toFixed(3));
        setBalance(balance);
    }

    useEffect(() => { 
        const init = async() => { 
            await getAddress(factoryCreated.factoryAddress);
            await getBalance(factoryCreated.factoryAddress);
        };
        init();
    });

    return (
        <tr key={factoryCreated.factoryId} className="border-b border-slate-300">
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>{factoryCreated.factoryId}</td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm underline underline-offset-4'>
                <a href={"https://mumbai.polygonscan.com/address/" + factoryCreated.factoryAddress}>
                    {sliceFactoryAddress}
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
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>{balance}</td>
        </tr>
    )
}

export default TableRow;