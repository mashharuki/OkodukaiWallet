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
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-teal-600 text-left text-xs font-semibold text-white uppercase tracking-wider'>Factory ID</th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-teal-600 text-left text-xs font-semibold text-white uppercase tracking-wider'>Factory Address</th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-teal-600 text-left text-xs font-semibold text-white uppercase tracking-wider'>Contract Wallet Address</th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-teal-600 text-left text-xs font-semibold text-white uppercase tracking-wider'>Balance</th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-teal-600 text-left text-xs font-semibold text-white uppercase tracking-wider'>Deposit</th>
                    </tr>
                </thead>
                <tbody>
                    {TableRows()}
                </tbody>
            </table>
        </>
    );
}

export default FactoryTable;