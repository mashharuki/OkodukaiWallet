import { useState } from 'react';
import { transfer } from '../../scripts/simpleAccount/transfer';
import { CLIOpts } from "../../utils/types";
import './../../css/App.css';

/**
 * Transfer Component
 */
const Transfer = (props:any) => { 
    const [address, setAddress] = useState('');
    const [amount, setAmount] = useState('');

    const {
        setIsLoading,
        factoryAddress
    } = props;

    const handleTransfer = async () => {
        const opts: CLIOpts = {
            dryRun: false, // Set to true if you want to perform a dry run
            withPM: false, // Set to true if you want to use a paymaster
        };
    
        try {
            setIsLoading(true);
            await transfer(address, amount, opts, factoryAddress);
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
            <h1 className='text-lg mb-4'>Let's transfer!!</h1>
            <input
                className='block'
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter address"
            />
            <input
                className='block'
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
            />
            <button 
                onClick={handleTransfer}
            >
                Transfer
            </button>
        </div>
    );
}

export default Transfer;
