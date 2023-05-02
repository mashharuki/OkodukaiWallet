import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import * as dotenv from 'dotenv';
import { HardhatUserConfig } from "hardhat/config";
import 'solidity-coverage';

dotenv.config()

const { 
  PRIVATE_KEY, 
  POLYGONSCAN_API_KEY,
  MUMBAI_API_URL
} = process.env;

// コンパイル最適化
const optimizedComilerSettings = {
  version: '0.8.18',
  settings: {
    optimizer: { enabled: true, runs: 1000000 },
    viaIR: true
  }
}

const config: HardhatUserConfig = {
  etherscan: {
    apiKey:{
      polygonMumbai: `${POLYGONSCAN_API_KEY}`
    }
  },
  solidity: {
    compilers: [{
      version: '0.8.18',
      settings: {
        optimizer: { enabled: true, runs: 1000000 }
      }
    }],
    overrides: {
      'contracts/core/EntryPoint.sol': optimizedComilerSettings,
      'contracts/samples/SimpleAccount.sol': optimizedComilerSettings
    }
  },
  networks: {
    mumbai: {
      url: MUMBAI_API_URL,
      accounts: [`${PRIVATE_KEY}`],
    },
  }
};

export default config;