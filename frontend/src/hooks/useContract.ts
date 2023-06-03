import { ethers } from "ethers";
import FactoryManagerJson from "../contract/artifacts/contracts/samples/FactoryManager.sol/FactoryManager.json";
import { getEthereum } from "../utils/ethereum";
import { FACTORY_MANAGER_ADDRESS } from './../utils/Contents';

type ReturnUseContract = {
  createNewFactory: (currentAccount: string) => void;
};

/**
 * useContract hook
 * @returns 
 */
export const useContract = (): ReturnUseContract => {
  // getEthereum
  const ethereum = getEthereum();

  /**
   * create Contract Object
   */
  const createContract = (
    currentAccount: string,
    contractAddress: string,
    abi: any,
  ) => {
    if (!ethereum) {
      console.log("Ethereum object doesn't exist!");
      return;
    }
    if (!currentAccount) {
        console.log("currentAccount doesn't exist!");
        return;
    }
    try {
        // @ts-ignore: ethereum as ethers.providers.ExternalProvider
        const provider = new ethers.providers.Web3Provider(ethereum);
        // get signer
        const signer = provider.getSigner(); 
        const contract = new ethers.Contract(contractAddress, abi, signer);
        return contract;
    } catch (error) {
        console.log(error);
        return null;
    }
  };

  /**
   * create new account Factory Contract method
   */
  const createNewFactory = async(currentAccount: string) => {
    // create contract
    const factory = createContract(currentAccount, FACTORY_MANAGER_ADDRESS, FactoryManagerJson.abi);
    // create new factory
    const txn = await factory?.createFactory();
    console.log("txn:", txn);
    await txn.wait();
  };

  /**
   * add Stake method
   */
  const createAddStake = async() => {

  };

  return {
    createNewFactory
  };
};

