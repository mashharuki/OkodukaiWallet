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
                <tr>
                    <th>Factory ID</th>
                    <th>Factory Address</th>
                    <th>Contract Wallet Address</th>
                    <th>Balance</th>
                    <th>Deposit</th>
                </tr>
            </thead>
            <tbody>
                {TableRows()}
            </tbody>
        </table>
    );
}

export default FactoryTable;