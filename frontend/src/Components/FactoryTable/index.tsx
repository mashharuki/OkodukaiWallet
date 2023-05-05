import { FactoryCreated } from './../../utils/types';

interface Props {
  data: { factoryCreateds: FactoryCreated[] };
}

/**
   * GraphQLで取得した結果を表形式で出力するためのコンポーネント
   * @param data データ
   */
const FactoryTable = ({ data }:Props) => {

    const { factoryCreateds } = data;

    const tableRows = factoryCreateds.map((factoryCreated: FactoryCreated) => (
        <tr key={factoryCreated.factoryId}>
            <td>{factoryCreated.factoryId}</td>
            <td>
                <a href={"https://mumbai.polygonscan.com/address/" + factoryCreated.factoryAddress}>
                    {factoryCreated.factoryAddress}
                </a>
            </td>
        </tr>
    ))

    return (
        <table>
            <thead>
                <tr>
                    <th>Factory ID</th>
                    <th>Factory Address</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    );
}

export default FactoryTable;