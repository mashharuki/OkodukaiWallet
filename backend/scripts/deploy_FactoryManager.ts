import { ethers } from "hardhat";

async function main() {
  
  const FactoryManager = await ethers.getContractFactory("FactoryManager");
  const factoryManager = await FactoryManager.deploy();

  await factoryManager.deployed();

  console.log(`=== factoryManager addr: ${factoryManager.address} ===`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
