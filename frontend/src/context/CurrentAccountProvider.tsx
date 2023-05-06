import { createContext, ReactNode } from "react";
import { useWallet } from "../hooks/useWallet";

const CurrentAccountContext = createContext<[string | undefined, () => void]>([
  "",
  () => {},
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
    const { currentAccount, connectWallet } = useWallet();

    return (
        <CurrentAccountContext.Provider value={[currentAccount, connectWallet]}>
            {children}
        </CurrentAccountContext.Provider>
    );
};

export default CurrentAccountContext;