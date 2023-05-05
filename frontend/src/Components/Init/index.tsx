import React, { useState } from 'react';
import './../../App.css';
import config from '../../config.json';
import { Presets } from 'userop';

/**
 * Init Component
 * @returns 
 */
const Init = () => { 
    const [generatedAddr, setGeneratedAddress] = useState('');

    const handleInit = async () => {
        try {
            const simpleAccount = await Presets.Builder.SimpleAccount.init(
                config.signingKey,
                config.rpcUrl,
                config.entryPoint,
                config.simpleAccountFactory
            );

            const address = simpleAccount.getSender();
            setGeneratedAddress(address);

            alert('generate address successful');
            console.log('generate address successful');
        } catch (err) {
            console.error('generate address failed', err);
            alert('generate address failed');
        }
    };

    return (
        <>
            <h1>Let's Generate Address!!</h1>
            <button 
                onClick={handleInit}
            >
                Generate Address
            </button>
            <div>Generated: {generatedAddr}</div>
        </>
    );
};

export default Init;