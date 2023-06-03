import { useEffect, useState } from "react";
import { POLYGONSCAN_URL } from "../../../utils/Contents";
import { createAlchemy } from "../../../utils/alchemy";

interface Props {
  token: any;
}

type TokenInfo = {
  decimals: string | undefined;
  logo: string | undefined;
  name: string | undefined;
  symbol: string | undefined;
}

/**
 * tableRows
 */
const TableRow = (props: Props) => {
  const [tokenMetadata, setTokenMetadata] = useState<TokenInfo>();

  const token = props.token;
  const alchemy = createAlchemy();

  useEffect(() => {
    /**
     * init method
     */
    const init = async() => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const response: TokenInfo = await alchemy.core.getTokenMetadata(token.contractAddress);
      console.log("tokenMetadata:", response);
      setTokenMetadata(response);
    };
    init();
  }, []);

  return(
    <tr className="border-b border-slate-300">
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <a href={POLYGONSCAN_URL + token.contractAddress}>
          {token.contractAddress}
        </a>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm underline underline-offset-4'>
        { tokenMetadata !== undefined && tokenMetadata.name }
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {(parseInt(token.tokenBalance) / 10 ** 18).toFixed(2)}
      </td>
    </tr>
  );
};

export default TableRow;