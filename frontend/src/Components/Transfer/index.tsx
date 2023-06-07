import { usePolybase } from "@polybase/react";
import { useState } from 'react';
import { sendNotifications } from '../../hooks/usePush';
import { getAddress, transfer } from '../../hooks/useUserOp';
import { CLIOpts } from "../../utils/types";
import './../../css/App.css';
import { DB_COLLECTION_NAME } from './../../utils/Contents';
import { getCurrentTime } from './../../utils/date';

/**
 * Transfer Component
 */
const Transfer = (props:any) => { 
    const [address, setAddress] = useState('');
    const [amount, setAmount] = useState('');

    const polybase = usePolybase();

    const {
        setIsLoading,
        factoryAddress
    } = props;

    const handleTransfer = async () => {
        const opts: CLIOpts = {
            dryRun: false, // Set to true if you want to perform a dry run
            withPM: false, // Set to true if you want to use a paymaster
        };
        
        // get sender address
        const sender = await getAddress(factoryAddress);

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
                const currentTime = getCurrentTime();
                
                // data insert to Polybase DB
                await polybase
                    .collection(DB_COLLECTION_NAME)
                    .create([
                        sender,
                        "Native",
                        "0x0",
                        address,
                        amount,
                        factoryAddress,
                        "sccess",
                        currentTime
                    ]); 
            });
            
            alert('Transfer successful');
            console.log('Transfer successful');
            setIsLoading(false);
        } catch (err) {
            console.error('Transfer failed', err);
            const currentTime = getCurrentTime();
                
            // data insert to Polybase DB
            await polybase
                .collection(DB_COLLECTION_NAME)
                .create([
                    sender,
                    "Native",
                    "0x0",
                    address,
                    amount,
                    factoryAddress,
                    "fail",
                    currentTime
                ]); 

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
