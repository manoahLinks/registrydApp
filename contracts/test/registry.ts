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
        it('should confirm constructor args are equal to number passed', async () => {
            const {registry, name, age} = await loadFixture(deployRegistryContract);
            expect((await registry.getEntityDetails()).length).to.equal([name, BigInt(age)].length)
        })

        it('should confirm constructor name are same as deployed', async () => {
            const {registry, name} = await loadFixture(deployRegistryContract);
            expect((await registry.getEntityDetails())[0]).to.equal(name);
        })

        it('should confirm constructor Age are same as deployed', async () => {
            const {registry, age} = await loadFixture(deployRegistryContract);
            expect((await registry.getEntityDetails())[1]).to.equal(age);
        })
    })

    describe('update name', () => {
        it('should confirm if new name has been updated', async () => {
            const {registry} = await loadFixture(deployRegistryContract);
            await registry.updateName('Jonzing man')
            expect((await registry.getEntityDetails())[0]).to.equal('Jonzing man');
        })

        it('should confirm if new deployed age has been updated after func call', async () => {
            const {registry, name} = await loadFixture(deployRegistryContract);
            await registry.updateName('Jonzing man')
            expect((await registry.getEntityDetails())[0]).to.not.equal(name);
        })
    })

    describe('update Age', () => {
        it('should confirm if new Age has been updated', async () => {
            const {registry} = await loadFixture(deployRegistryContract);
            await registry.updateAge(40)
            expect((await registry.getEntityDetails())[1]).to.equal(40);
        })

        it('should confirm if new deployed age has been updated after func call', async () => {
            const {registry, age} = await loadFixture(deployRegistryContract);
            await registry.updateAge(40)
            expect((await registry.getEntityDetails())[1]).to.not.equal(age);
        })
    })
  })