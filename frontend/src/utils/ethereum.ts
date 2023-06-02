import { MetaMaskInpageProvider } from "@metamask/providers";
import { ethers } from "ethers";

const {
  REACT_APP_CONNECT_ADDRESS_PRIVATE_KEY,
  REACT_APP_SIGNING_KEY
} = process.env;

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
 * get shortAddress
 * @param address wallet address
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

/**
 * getSinger Object
 */
export const getSigner = ():any => {
  const signer = new ethers.Wallet(REACT_APP_CONNECT_ADDRESS_PRIVATE_KEY!);
  return signer;
};