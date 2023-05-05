import { ethers } from 'hardhat';

const main = async function () {
  const provider = ethers.provider
  const from = await provider.getSigner().getAddress()

  // デプロイ EntryPoint 
  const EntryPoint = await ethers.getContractFactory("EntryPoint");
  const entryPoint = await EntryPoint.deploy();
  await entryPoint.deployed();

  const simpleAccountFactory = await ethers.getContractFactory("SimpleAccountFactory2");
  // 自分でEntry Pointコントラクトをデプロして指定する場合はこっち
  // const ret = await simpleAccountFactory.deploy(entryPoint.address);
  // StackUpのBundlerを使用する時はStackUpが用意してくれているEntryPoint Contractを指定した方が安定する。
  const ret = await simpleAccountFactory.deploy("0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789");

  console.log('==SimpleAccountFactory addr=', ret.address)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});