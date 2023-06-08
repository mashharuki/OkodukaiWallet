import { CollectionRecord } from "../../utils/types";
import TableRow from './TableRow';

type Props = {
  txs: CollectionRecord[];
};

/**
 * TxTable Component
 */
const TxTable = (props: Props) => { 

  const { txs } = props;

  console.log("txs:", txs)

  /**
   * TableRows
   */
  const tableRows = () => {
    return (txs.map((tx: CollectionRecord) => (
      <TableRow tx={tx} />
    )))
  }

  return (
    <>
      <div className="mb-8">
        Txbalance
      </div>
      <table>
        <thead>
          <tr >
            <th className='px-5 py-3 border-b-2 border-gray-200 bg-teal-600 text-center text-xs font-semibold text-white uppercase tracking-wider'>To</th>
            <th className='px-5 py-3 border-b-2 border-gray-200 bg-teal-600 text-center text-xs font-semibold text-white uppercase tracking-wider'>Type</th>
            <th className='px-5 py-3 border-b-2 border-gray-200 bg-teal-600 text-center text-xs font-semibold text-white uppercase tracking-wider'>Token Address</th>
            <th className='px-5 py-3 border-b-2 border-gray-200 bg-teal-600 text-center text-xs font-semibold text-white uppercase tracking-wider'>amount</th>
            <th className='px-5 py-3 border-b-2 border-gray-200 bg-teal-600 text-center text-xs font-semibold text-white uppercase tracking-wider'>Date</th>
            <th className='px-5 py-3 border-b-2 border-gray-200 bg-teal-600 text-center text-xs font-semibold text-white uppercase tracking-wider'>Status</th>
          </tr>
        </thead>
        <tbody>
          {tableRows()}
        </tbody>
      </table>
    </>
  );
}

export default TxTable;