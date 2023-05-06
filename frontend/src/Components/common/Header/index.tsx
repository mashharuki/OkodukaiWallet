import CurrentAccountContext from '../../../context/CurrentAccountProvider';
import { useContext } from "react";

/**
 * Header Component
 */
const Header = () => {
    const [currentAccount, connectWallet] = useContext(CurrentAccountContext);

    /**
     * コントラクトアドレスを短くするためのメソッド
     * @param address 接続したウォレットのアドレス
     */
    const shortAddress = (address:any) => {
        if (address.length <= 8) {
            return address;
        } else {
            const firstThree = address.substring(0, 4);
            const lastThree = address.substring(address.length - 4);
            return `${firstThree}...${lastThree}`;
        }
    };

    return (
        <div className="w-full">
            <div className="bg-teal-100">
                <nav className="flex justify-between w-full bg-teal-600 text-white p-4">
                    <span className="font-semibold text-xl tracking-tight">Account Abstruction Dapp</span>
                    <div className="flex text-sm" v-else>
                        {currentAccount !== "" ?
                            <button
                                className="p-2 ml-2 bg-teal-200 text-gray-900 font-semibold leading-none border border-teal-400 rounded hover:border-transparent hover:bg-teal-200"
                            >
                                {shortAddress(currentAccount)}
                            </button>
                        :
                            <button
                                className="p-2 ml-2 bg-teal-200 text-gray-900 font-semibold leading-none border border-teal-400 rounded hover:border-transparent hover:bg-teal-200"
                                onClick={connectWallet}
                            >
                                Connect Wallet
                            </button>
                        }
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;