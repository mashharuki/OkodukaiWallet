import { createContext, ReactNode } from "react";
import { useContract } from "../../hooks/useContract";

const ContractContext = createContext<[
    (currentAccount: string) => void,
]>([
  (currentAccount: string) => {},
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
    const { createNewFactory } = useContract();
 
    return (
        <ContractContext.Provider 
            value={[createNewFactory]}
        >
            {children}
        </ContractContext.Provider>
    );
};

export default ContractContext;