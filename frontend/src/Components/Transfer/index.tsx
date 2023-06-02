import { useState } from 'react';
import { sendNotifications } from '../../hooks/usePush';
import { transfer } from '../../hooks/useUserOp';
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
            // call transfer method
            await transfer(
                address, 
                amount, 
                opts, 
                factoryAddress
            ).then(async() => {
                // send notifications
                await sendNotifications(address);
            });
            
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
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
                onClick={handleTransfer}
            >
                Transfer
            </button>
        </div>
    );
}

export default Transfer;
