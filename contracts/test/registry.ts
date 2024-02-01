import {
    time,
    loadFixture,
  } from "@nomicfoundation/hardhat-toolbox/network-helpers";
  import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
  import { expect } from "chai";
  import { ethers } from "hardhat";

  describe('Registry', () => {
    const deployRegistryContract = async () => {

        const name = 'Manoah'
        const age = 25

        const Registry = await ethers.getContractFactory('SimpleRegistry');
        const registry = await Registry.deploy(name, age);

        return {registry, name, age}
    }

    describe('deployment', () => {
        it('should confirm constructor variables on deployment', async () => {
            const {registry} = await loadFixture(deployRegistryContract);
            
        })
    })
  })