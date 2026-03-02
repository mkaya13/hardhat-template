import hre from "hardhat";

async function main() {

  // Hardhat 3: ethers comes from the network connection
  const { ethers } = await hre.network.connect();
  // const address = "0x776757593eDCdeBfBb724E88a3da634e34962faF" // ETH Sepolia Address
  const address = "0x4f0caa47f699392b75F9E0E0f3cEA93D248F0B87" // Miracle Testnet Address

  const counterContract = await ethers.getContractAt("Counter", address);
  const incrementX = await counterContract.incBy(12);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
