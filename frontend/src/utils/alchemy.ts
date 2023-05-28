import { Alchemy, Network } from "alchemy-sdk";

/**
 * Alchemy用のインスタンスを作成するメソッド
 */
export const createAlchemy = ():any => {
  const {
    REACT_APP_ALCHEMY_API_KEY
  } = process.env;
  
  const settings = {
    apiKey: REACT_APP_ALCHEMY_API_KEY,
    network: Network.MATIC_MUMBAI,
  };
  
  const alchemy = new Alchemy(settings);

  return alchemy;
}