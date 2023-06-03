import TableRow from "./TableRow";

interface Props {
  tokens: any[];
}

/**
 * ERC20Table Component
 */
const ERC20Table = ( props:Props) => { 

  const { tokens } = props;

  /**
   * tableRows
   */
  const TableRows = () => {
    return (tokens.map((token: any) => (
      <TableRow token={token} />
    )))
  }

  return (
    <>
      <div className="mb-4">
        ERC20 Token Balance
      </div>
      <div className="flex justify-center">
        <table>
          <thead>
            <tr >
              <th className='px-5 py-3 border-b-2 border-gray-200 bg-teal-600 text-center text-xs font-semibold text-white uppercase tracking-wider'>Address</th>
              <th className='px-5 py-3 border-b-2 border-gray-200 bg-teal-600 text-center text-xs font-semibold text-white uppercase tracking-wider'>Name</th>
              <th className='px-5 py-3 border-b-2 border-gray-200 bg-teal-600 text-center text-xs font-semibold text-white uppercase tracking-wider'>Balance</th>
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

export default ERC20Table;