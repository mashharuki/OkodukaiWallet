import { createContext, ReactNode } from "react";
import { useContract } from "../../hooks/useContract";

const ContractContext = createContext<[
    (currentAccount: string) => void,
    (currentAccount: string, factoryAddress: string) => void
]>([
  (currentAccount: string) => {},
  (currentAccount: string, factoryAddress: string) => {}
]);

/**
 * ContractProvider Comoponent
 * @param param0 
 * @returns 
 */
export const ContractProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const { createNewFactory, addStake } = useContract();
 
    return (
        <ContractContext.Provider 
            value={[createNewFactory, addStake]}
        >
            {children}
        </ContractContext.Provider>
    );
};

export default ContractContext;