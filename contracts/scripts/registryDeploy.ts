import { ethers } from "hardhat";

async function main() {
 
const name = 'Manoah'
const age = 25

  const registry = await ethers.deployContract("SimpleRegistry", [name, age]);

  await registry.waitForDeployment();

  console.log(
    `Registry contract successfully deployed on ${registry.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
