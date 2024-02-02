Regitry dApp

## Overview
Registry dApp is a simple decentralized application that keep tracks of user information, it has 2 state variables namely; entityName and entityage. This dApp provides functions that aid us get entity details and also state changing functions to make changes to the state variables listed above.


## contract functions

updateName: This function accepts one argument which is of type string, its updates the entityName state variable to the value passed in the function.

updateAge: This function accepts one argument which is of type uint, it updates the entityAge state variable to the value passed in the function.

getEntityDetails: This is function is a view function, it returns the state variables namely; entityName and entityAge as tuple.

## Tools
node.js version 18
hardhat

## set up

git clone ``````

## frontend setup

cd frontend
npm install
npm run dev

# contract

cd contracts
npm install

compile: npx hardhat compile
test: npx hardhat test test/registry.ts  


## contract
solidity

## frontend
react with vite
tailwindcss
ethers.js

## test
chai

network : sepolia
contract Address : 0xF248e7686A629ce7cC5515e28d8b4E31bed40B93
