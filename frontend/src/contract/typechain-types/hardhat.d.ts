/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IERC1822Proxiable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1822Proxiable__factory>;
    getContractFactory(
      name: "IERC1967",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1967__factory>;
    getContractFactory(
      name: "IBeacon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBeacon__factory>;
    getContractFactory(
      name: "ERC1967Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967Proxy__factory>;
    getContractFactory(
      name: "ERC1967Upgrade",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967Upgrade__factory>;
    getContractFactory(
      name: "Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Proxy__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "UUPSUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UUPSUpgradeable__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "IERC777Recipient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC777Recipient__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "BaseAccount",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseAccount__factory>;
    getContractFactory(
      name: "BasePaymaster",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BasePaymaster__factory>;
    getContractFactory(
      name: "EntryPoint",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EntryPoint__factory>;
    getContractFactory(
      name: "NonceManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NonceManager__factory>;
    getContractFactory(
      name: "SenderCreator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SenderCreator__factory>;
    getContractFactory(
      name: "StakeManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StakeManager__factory>;
    getContractFactory(
      name: "IAccount",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccount__factory>;
    getContractFactory(
      name: "IAggregator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAggregator__factory>;
    getContractFactory(
      name: "IEntryPoint",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IEntryPoint__factory>;
    getContractFactory(
      name: "INonceManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INonceManager__factory>;
    getContractFactory(
      name: "IOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOracle__factory>;
    getContractFactory(
      name: "IPaymaster",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPaymaster__factory>;
    getContractFactory(
      name: "IStakeManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStakeManager__factory>;
    getContractFactory(
      name: "Lock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Lock__factory>;
    getContractFactory(
      name: "TokenCallbackHandler",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenCallbackHandler__factory>;
    getContractFactory(
      name: "DepositPaymaster",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DepositPaymaster__factory>;
    getContractFactory(
      name: "FactoryManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FactoryManager__factory>;
    getContractFactory(
      name: "SimpleAccount",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SimpleAccount__factory>;
    getContractFactory(
      name: "SimpleAccountFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SimpleAccountFactory__factory>;
    getContractFactory(
      name: "SimpleAccountFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SimpleAccountFactory__factory>;
    getContractFactory(
      name: "VerifyingPaymaster",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VerifyingPaymaster__factory>;
    getContractFactory(
      name: "MaliciousAccount",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MaliciousAccount__factory>;
    getContractFactory(
      name: "TestAggregatedAccount",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestAggregatedAccount__factory>;
    getContractFactory(
      name: "TestAggregatedAccountFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestAggregatedAccountFactory__factory>;
    getContractFactory(
      name: "TestCounter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestCounter__factory>;
    getContractFactory(
      name: "TestExpirePaymaster",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestExpirePaymaster__factory>;
    getContractFactory(
      name: "TestExpiryAccount",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestExpiryAccount__factory>;
    getContractFactory(
      name: "TestOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestOracle__factory>;
    getContractFactory(
      name: "TestPaymasterAcceptAll",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestPaymasterAcceptAll__factory>;
    getContractFactory(
      name: "TestRevertAccount",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestRevertAccount__factory>;
    getContractFactory(
      name: "TestSignatureAggregator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestSignatureAggregator__factory>;
    getContractFactory(
      name: "TestToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestToken__factory>;
    getContractFactory(
      name: "TestUtil",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestUtil__factory>;
    getContractFactory(
      name: "TestWarmColdAccount",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestWarmColdAccount__factory>;
    getContractFactory(
      name: "TokenPaymaster",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenPaymaster__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IERC1822Proxiable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1822Proxiable>;
    getContractAt(
      name: "IERC1967",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1967>;
    getContractAt(
      name: "IBeacon",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBeacon>;
    getContractAt(
      name: "ERC1967Proxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967Proxy>;
    getContractAt(
      name: "ERC1967Upgrade",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967Upgrade>;
    getContractAt(
      name: "Proxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Proxy>;
    getContractAt(
      name: "Initializable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializable>;
    getContractAt(
      name: "UUPSUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UUPSUpgradeable>;
    getContractAt(
      name: "IERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Receiver>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "IERC777Recipient",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC777Recipient>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "BaseAccount",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseAccount>;
    getContractAt(
      name: "BasePaymaster",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BasePaymaster>;
    getContractAt(
      name: "EntryPoint",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EntryPoint>;
    getContractAt(
      name: "NonceManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NonceManager>;
    getContractAt(
      name: "SenderCreator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SenderCreator>;
    getContractAt(
      name: "StakeManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StakeManager>;
    getContractAt(
      name: "IAccount",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccount>;
    getContractAt(
      name: "IAggregator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAggregator>;
    getContractAt(
      name: "IEntryPoint",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IEntryPoint>;
    getContractAt(
      name: "INonceManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INonceManager>;
    getContractAt(
      name: "IOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOracle>;
    getContractAt(
      name: "IPaymaster",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPaymaster>;
    getContractAt(
      name: "IStakeManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStakeManager>;
    getContractAt(
      name: "Lock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Lock>;
    getContractAt(
      name: "TokenCallbackHandler",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenCallbackHandler>;
    getContractAt(
      name: "DepositPaymaster",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DepositPaymaster>;
    getContractAt(
      name: "FactoryManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FactoryManager>;
    getContractAt(
      name: "SimpleAccount",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SimpleAccount>;
    getContractAt(
      name: "SimpleAccountFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SimpleAccountFactory>;
    getContractAt(
      name: "SimpleAccountFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SimpleAccountFactory>;
    getContractAt(
      name: "VerifyingPaymaster",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VerifyingPaymaster>;
    getContractAt(
      name: "MaliciousAccount",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MaliciousAccount>;
    getContractAt(
      name: "TestAggregatedAccount",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestAggregatedAccount>;
    getContractAt(
      name: "TestAggregatedAccountFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestAggregatedAccountFactory>;
    getContractAt(
      name: "TestCounter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestCounter>;
    getContractAt(
      name: "TestExpirePaymaster",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestExpirePaymaster>;
    getContractAt(
      name: "TestExpiryAccount",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestExpiryAccount>;
    getContractAt(
      name: "TestOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestOracle>;
    getContractAt(
      name: "TestPaymasterAcceptAll",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestPaymasterAcceptAll>;
    getContractAt(
      name: "TestRevertAccount",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestRevertAccount>;
    getContractAt(
      name: "TestSignatureAggregator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestSignatureAggregator>;
    getContractAt(
      name: "TestToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestToken>;
    getContractAt(
      name: "TestUtil",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestUtil>;
    getContractAt(
      name: "TestWarmColdAccount",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestWarmColdAccount>;
    getContractAt(
      name: "TokenPaymaster",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenPaymaster>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}