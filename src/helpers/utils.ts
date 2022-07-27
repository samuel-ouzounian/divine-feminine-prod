// helper/utils.ts
import { ethers } from "ethers"; // npm install ethers

import * as config from "../config/config";
import * as discordJson from "../config/contracts/discordLink.json";
import * as wETH from '../config/contracts/wETH.json'
import * as preMintJson from '../config/contracts/preMint.json'
import * as discordLinkCommercialJSON from '../config/contracts/discordLinkCommercial.json'

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const hexToInt = (s: string) => {
  const bn = ethers.BigNumber.from(s);
  return parseInt(bn.toString());
};

export const reloadApp = () => {
  window.location.reload();
};

// Generate a ethers.Contract instance of the contract object
// together with a signer that will trigger a transaction
// approval in the wallet whenever it is called by the Dapp

export const preMint = async (
  browserWeb3Provider: any
): Promise<ethers.Contract> => {
  const ethersProvider = browserWeb3Provider;
  const contractAbi = preMintJson.abi;
  // Create ethers.Contract object using the smart contract's ABI
  const readContractInstance = new ethers.Contract(
    config.configVars.preMint.address,
    contractAbi,
    ethersProvider
  );
  // Add a signer to make the ethers.Contract object able
  // to craft transactions
  const fromSigner = ethersProvider.getSigner();
  return readContractInstance.connect(fromSigner);
};

export const wETHContract = async (
  browserWeb3Provider: any
): Promise<ethers.Contract> => {
  const ethersProvider = browserWeb3Provider;
  const contractAbi = wETH.abi;
  // Create ethers.Contract object using the smart contract's ABI
  const readContractInstance = new ethers.Contract(
    config.configVars.wETH.address,
    contractAbi,
    ethersProvider
  );
  // Add a signer to make the ethers.Contract object able
  // to craft transactions
  const fromSigner = ethersProvider.getSigner();
  return readContractInstance.connect(fromSigner);
};

export const Discord = async (
  browserWeb3Provider: any
): Promise<ethers.Contract> => {
  const ethersProvider = browserWeb3Provider;
  const contractAbi = discordJson.abi;
  // Create ethers.Contract object using the smart contract's ABI
  const readContractInstance = new ethers.Contract(
    config.configVars.discordLink.address,
    contractAbi,
    ethersProvider
  );
  // Add a signer to make the ethers.Contract object able
  // to craft transactions
  const fromSigner = ethersProvider.getSigner();
  return readContractInstance.connect(fromSigner);
};
