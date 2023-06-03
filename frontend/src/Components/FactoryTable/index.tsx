import { useContext } from "react";
import ContractContext from '../../context/ContractProvider';
import CurrentAccountContent from "./../../context/CurrentAccountProvider";
import { FactoryCreated } from './../../utils/types';
import TableRow from './TableRow';

interface Props {
  data: { factoryCreateds: FactoryCreated[] };
}

/**
 * GraphQLで取得した結果を表形式で出力するためのコンポーネント
 * @param data データ
 */
const FactoryTable = ({ data }:Props) => {

    const { factoryCreateds } = data;
    const [currentAccount] = useContext(CurrentAccountContent);
    const [createNewFactory] = useContext(ContractContext);

    /**
     * tableRows
     */
    const TableRows = () => {
        return (factoryCreateds.map((factoryCreated: FactoryCreated) => (
            <TableRow factoryCreated={factoryCreated} />
        )))
    }
        
    return (
        <>
            <div className="mb-8">
                Deployed FactoryContract by FactoryManager
            </div>
            <table>
                <thead>
                    <tr >
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-teal-600 text-center text-xs font-semibold text-white uppercase tracking-wider'>Factory ID</th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-teal-600 text-center text-xs font-semibold text-white uppercase tracking-wider'>Factory Address</th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-teal-600 text-center text-xs font-semibold text-white uppercase tracking-wider'>Contract Wallet Address</th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-teal-600 text-center text-xs font-semibold text-white uppercase tracking-wider'>Balance</th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-teal-600 text-center text-xs font-semibold text-white uppercase tracking-wider'>Deposit</th>
                    </tr>
                </thead>
                <tbody>
                    {TableRows()}
                </tbody>
            </table>
            <div className="m-4">
                <button 
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
                    onClick={async() => await createNewFactory(currentAccount!)}
                >
                    Create New Factory
                </button>
            </div>
        </>
    );
}

export default FactoryTable;