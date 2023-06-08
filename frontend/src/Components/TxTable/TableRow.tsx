import { shortAddress } from '../../utils/ethereum';
import { CollectionRecord } from "../../utils/types";

type Props = {
  tx: CollectionRecord;
};

/**
 * TableRow
 */
const TableRow = (data: Props) => {

  const { tx } = data;

  return (
    <tr key={tx.data.id} className="border-b border-slate-300">
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {shortAddress(tx.data.to)}
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {tx.data.type}
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {shortAddress(tx.data.tokenAddr)}
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {tx.data.amount}
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {tx.data.date}
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {tx.data.status}
      </td>
    </tr> 
  );
};

export default TableRow;