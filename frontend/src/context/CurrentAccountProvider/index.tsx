import { createContext, ReactNode } from "react";
import { useWallet } from "../../hooks/useWallet";

const CurrentAccountContext = createContext<[
    string | undefined, 
    () => void,
    (value: number, address: string) => void,
]>([
  "",
  () => {},
 (value: number, address: string) => {},
]);

/**
 * CurrentAccountProvider Comoponent
 * @param param0 
 * @returns 
 */
export const CurrentAccountProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const { currentAccount, connectWallet, sendETH } = useWallet();
 
    return (
        <CurrentAccountContext.Provider 
            value={[currentAccount, connectWallet, sendETH]}
        >
            {children}
        </CurrentAccountContext.Provider>
    );
};

export default CurrentAccountContext;