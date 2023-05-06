import { MetaMaskInpageProvider } from "@metamask/providers";
import { JsonRpcConnection } from "@metamask/providers/dist/StreamProvider";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

/**
 * getEthereum function
 * @returns 
 */
export const getEthereum = (): MetaMaskInpageProvider | null => {
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    const { ethereum } = window;
    return ethereum;
  }
  return null;
};

/**
     * コントラクトアドレスを短くするためのメソッド
     * @param address 接続したウォレットのアドレス
     */
export const shortAddress = (address:any) => {
  if (address.length <= 8) {
      return address;
  } else {
      const firstThree = address.substring(0, 4);
      const lastThree = address.substring(address.length - 4);
      return `${firstThree}...${lastThree}`;
  }
};