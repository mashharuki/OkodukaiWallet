import { ethers } from 'ethers';
import { useCallback, useEffect, useState } from "react";
import { getEthereum } from "../utils/ethereum";

type ReturnUseWallet = {
    currentAccount: string | undefined;
    connectWallet: () => void;
    sendETH: (value: number, address: string) => void;
};

/**
 * useWallet hook
 * @returns 
 */
export const useWallet = (): ReturnUseWallet => {
    const [currentAccount, setCurrentAccount] = useState<string>();
    // getEthereum
    const ethereum = getEthereum();

    /**
     * connectWallet function
     * @returns 
     */
    const connectWallet = async () => {
        try {
            if (!ethereum) {
                alert("Get Wallet!");
                return;
            }
            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });

            if (!Array.isArray(accounts)) return;
            console.log("Connected: ", accounts[0]);
            setCurrentAccount(accounts[0]); 
        } catch (error) {
            console.log(error);
        }
    };

    /**
     * checkIfWalletIsConnected function
     */
    const checkIfWalletIsConnected = useCallback(async () => {
        try {
            if (!ethereum) {
                console.log("Make sure you have Wallet!");
                return;
            } else {
                console.log("We have the ethereum object", ethereum);
            }
            const accounts = await ethereum.request({ method: "eth_accounts" });
            if (!Array.isArray(accounts)) return;
            if (accounts.length !== 0) {
                const account = accounts[0];
                console.log("Found an authorized account:", account);
                setCurrentAccount(account);
            } else {
                console.log("No authorized account found");
            }
        } catch (error) {
            console.log(error);
        }
    }, [ethereum]);

    /**
     * send NativeToken method
     * @param value value
     * @param address to address
     */
    const sendETH = async(value: number, address: string) => {
        if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
            const { ethereum } = window;

            if (!ethereum) {
                console.log("Ethereum object doesn't exist!");
                return;
            }
            
            try {
                console.log(`value:${value}`)

                const transactionObject: any = {
                    to: address,
                    value: ethers.utils.parseEther(value.toString())._hex,
                    from: currentAccount
                };

                console.log(`tx info:${JSON.stringify(transactionObject)}`)

                await ethereum.request({
                    method: "eth_sendTransaction",
                    params: [transactionObject],
                });

                alert('send sucess!!!');
            } catch (e){
                alert('send fail...');
                console.log(`err: ${e}`);
            }
        }
    };

    useEffect(() => {
        checkIfWalletIsConnected();
    }, [checkIfWalletIsConnected]);

    return {
        currentAccount,
        connectWallet,
        sendETH,
    };
};