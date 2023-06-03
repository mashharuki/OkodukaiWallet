import { POLYGONSCAN_URL } from "../../../utils/Contents";

interface Props {
  nft: any;
}

/**
 * tableRows
 */
const TableRow = (props: Props) => {

  const nft = props.nft;

  return (
    <tr key={nft.tokenId} className="border-b border-slate-300">
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <a href={POLYGONSCAN_URL + nft.contract.address}>
          {nft.contract.address}
        </a>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm underline underline-offset-4'>
        {nft.contract.name}
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {nft.tokenId}
      </td>
    </tr>
  );
};

export default TableRow;