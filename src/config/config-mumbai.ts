// config/config.ts
declare global {
  interface Window {
    ethereum: any;
  }
}
export const configVars = {
  mode: "regular",
  rpcNetwork: {
    rpcUrl: "https://rpc-mumbai.maticvigil.com",
    chainId: 80001,
    chainIdHex: "0x13881",
    chainName: "Mumbai Testnet",
    chainType: "testnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    blockExplorerUrl: "https://polygonscan.com/",
  },
  goddess: {
    address: "0xa15B594177Dd5C957e9FBd35a1e15b2039B8C187", // on Cronos Testnet
    address_mainnet: "0xa15B594177Dd5C957e9FBd35a1e15b2039B8C187", // on Cronos Mainnet
  },
  discordLink: {
    address: "0x51e600fD56F42b32b2F38902C0bab7B59A286931", // on Cronos Testnet
    address_mainnet: "0x51e600fD56F42b32b2F38902C0bab7B59A286931", // on Cronos Mainnet
  },
};

