import QRCode from 'qrcode.react';
import { useContext, useState } from "react";
import CurrentAccountContext from '../../../context/CurrentAccountProvider';

interface Props {
    address: string;
    setIsLoading: (arg0: boolean) => void;
}

/**
 * SendModal
 */
const SendModal = (props: Props) => {
    const [showModal, setShowModal] = useState(false);
    const [value, setValue] = useState(0);
    const [currentAccount, connectWallet, sendETH] = useContext(CurrentAccountContext);

    const { 
        address,
        setIsLoading
    } = props;

    /**
     * モーダルOn/Off用のメソッド
     */
    const handleModal = () => {
        setShowModal(!showModal);
    }

    /**
     * send method
     */
    const send = async() => {
        setIsLoading(true);
        await sendETH(value, address);
        setIsLoading(false);
    }

    return (
        <>
            { showModal ?
                <div className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
                    <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg text-left">
                        <div className="relative py-8 px-5 md:px-2 bg-white shadow-md rounded border border-gray-400">
                            <div className="w-full flex justify-start text-gray-600 mb-3">
                                <svg  
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="icon icon-tabler icon-tabler-wallet" 
                                    width="52" 
                                    height="52" 
                                    viewBox="0 0 24 24" 
                                    stroke-width="1" 
                                    stroke="currentColor" 
                                    fill="none" 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                                    <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                                </svg>
                            </div>
                            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Enter Deposit Details</h1>
                            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">address's QRcode</label>
                            <QRCode value={address} />
                            <label htmlFor="to" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">To Address</label>  
                            <input 
                                id="to" 
                                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" 
                                placeholder="0x..." 
                                value={address}
                                disabled={true}
                            />
                            <label htmlFor="value" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">value</label>  
                            <input 
                                id="value" 
                                type="number"
                                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" 
                                placeholder="0" 
                                value={value}
                                onChange={(e:any) => setValue(e.target.value)}
                            />
                            <div className="flex items-center justify-start w-full">
                                <button 
                                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
                                    onClick={send}
                                >
                                    Deposit
                                </button>
                                <button 
                                    className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                                    onClick={handleModal}
                                >
                                    Cancel
                                </button>
                            </div>
                            <button 
                                className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" 
                                aria-label="close modal" 
                                role="button"
                                onClick={handleModal}
                            >
                                <svg  xmlns="http://www.w3.org/2000/svg"  className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            : 
                <div className="w-full flex justify-center" id="button">
                    <button 
                        className="bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mx-auto transition duration-150 ease-in-out rounded-full px-4 sm:px-8 py-2 text-xs sm:text-sm"
                        onClick={handleModal}
                    >
                        Open Modal
                    </button>
                </div>
            }
        </>
    );
};

export default SendModal;