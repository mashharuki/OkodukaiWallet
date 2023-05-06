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
        <table>
            <thead>
                <tr >
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>Factory ID</th>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>Factory Address</th>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>Contract Wallet Address</th>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>Balance</th>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>Deposit</th>
                </tr>
            </thead>
            <tbody>
                {TableRows()}
            </tbody>
        </table>
    );
}

export default FactoryTable;