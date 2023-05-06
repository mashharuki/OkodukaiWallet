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
        console.log("balance:", getBalancePromise)
        setBalance(ethers.utils.formatEther(getBalancePromise))
    }

    useEffect(() => { 
        const init = async() => { 
            await getAddress(factoryCreated.factoryAddress);
            await getBalance(factoryCreated.factoryAddress);
        };
        init();
    });

    return (
        <tr key={factoryCreated.factoryId}>
            <td>{factoryCreated.factoryId}</td>
            <td>
                <a href={"https://mumbai.polygonscan.com/address/" + factoryCreated.factoryAddress}>
                    {factoryCreated.factoryAddress}
                </a>
            </td>
            <td>
                <Link to='/transfer' state={{contractAddress: address}}>
                    {address}
                </Link>
            </td>
            <td>{balance}</td>
        </tr>
    )
}

export default TableRow;