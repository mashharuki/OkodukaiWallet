import { ethers } from 'hardhat';

const main = async function () {
  const provider = ethers.provider
  const from = await provider.getSigner().getAddress()

  const paymaster = await ethers.getContractFactory("DepositPaymaster");
  // 自分でEntry Pointコントラクトをデプロして指定する場合はこっち
  // const ret = await simpleAccountFactory.deploy(entryPoint.address);
  // StackUpのBundlerを使用する時はStackUpが用意してくれているEntryPoint Contractを指定した方が安定する。
  const ret = await paymaster.deploy("0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789");

  console.log('==paymaster addr=', ret.address)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});