import TableRow from "./TableRow";

interface Props {
  nfts: any[];
}

/**
 * NftTable Component
 */
const NftTable = (props :Props) => { 

  const { nfts } = props;

  /**
   * tableRows
   */
  const TableRows = () => {
    return (nfts.map((nft: any) => (
      <TableRow nft={nft} />
    )))
  }

  return (
    <>
      <div className="mb-4">
        NFT Balance
      </div>
      <div className="flex justify-center">
        <table>
          <thead>
            <tr >
              <th className='px-5 py-3 border-b-2 border-gray-200 bg-teal-600 text-center text-xs font-semibold text-white uppercase tracking-wider'>Address</th>
              <th className='px-5 py-3 border-b-2 border-gray-200 bg-teal-600 text-center text-xs font-semibold text-white uppercase tracking-wider'>Name</th>
              <th className='px-5 py-3 border-b-2 border-gray-200 bg-teal-600 text-center text-xs font-semibold text-white uppercase tracking-wider'>Token Id</th>
            </tr>
          </thead>
          <tbody>
            {TableRows()}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default NftTable;