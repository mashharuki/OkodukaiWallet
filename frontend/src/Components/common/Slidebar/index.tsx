
type ChildProps = {
    setNotificateFlg: (flg: boolean) => void;
    setTxFlg: (flg: boolean) => void;
    spams: number;
    txs: number;
};

/**
 * SlideBar component
 * @returns 
 */
const SliderBar = ({ 
    setNotificateFlg, 
    setTxFlg,
    spams,
    txs
}:ChildProps) => {
    
    return (
        <div className="relative bg-white dark:bg-gray-800 mr-4">
            <div className="flex flex-col sm:flex-row sm:justify-around">
                <div className="h-screen w-72">
                    <nav className="mt-10 px-6 ">
                        <a 
                            className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " 
                            onClick={() => {
                                setNotificateFlg(false);
                                setTxFlg(false);
                            }}
                        >
                            <span className="mx-4 text-lg font-normal">
                                DashBoard
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                        </a>
                        <a 
                            className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg " 
                            onClick={() => {
                                setNotificateFlg(true)
                                setTxFlg(false);
                            }}
                        >
                            <span className="mx-4 text-lg font-normal">
                                Notificatios
                            </span>
                            <span className="flex text-right">
                                <button 
                                    type="button" 
                                    className="w-6 h-6 text-xs rounded-full text-white bg-red-500"
                                >
                                    <span className="p-2">
                                        {spams}
                                    </span>
                                </button>
                            </span>
                        </a>
                        <a 
                            className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg" 
                            onClick={() => {
                                setNotificateFlg(false);
                                setTxFlg(true)
                            }}
                        >
                            <span className="mx-4 text-lg font-normal">
                                Transactions
                            </span>
                            <span className="flex text-right">
                                <button 
                                    type="button" 
                                    className="w-6 h-6 text-xs rounded-full text-white bg-red-500"
                                >
                                    <span className="p-2">
                                        {txs}
                                    </span>
                                </button>
                            </span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default SliderBar;