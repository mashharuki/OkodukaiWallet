import { ethers } from 'hardhat'
import { Create2Factory } from '../src/Create2Factory'

const main = async function () {
  const provider = ethers.provider
  const from = await provider.getSigner().getAddress()
  await new Create2Factory(ethers.provider).deployFactory()

  const EntryPoint = await ethers.getContractFactory("EntryPoint");

  const ret = await EntryPoint.deploy()
  console.log('==entrypoint addr=', ret.address)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});