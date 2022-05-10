// config/config.ts
declare global {
  interface Window {
    ethereum: any;
  }
}
export const configVars = {
  mode: "regular",
  rpcNetwork: {
    rpcUrl: "https://matic-mumbai.chainstacklabs.com/",
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
    address: "0xb49032cAe3379acCa86Eda9E09148301Df1Bf2de", // on Cronos Testnet
    address_mainnet: "0xb49032cAe3379acCa86Eda9E09148301Df1Bf2de", // on Cronos Mainnet
  },
  discordLink: {
    address: "0x8F14cFecc6B51100F1D482FADE23442DEc414Dec", // on Cronos Testnet
    address_mainnet: "0x8F14cFecc6B51100F1D482FADE23442DEc414Dec", // on Cronos Mainnet
  },
};

