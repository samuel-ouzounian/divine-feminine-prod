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
    address: "0xb49032cAe3379acCa86Eda9E09148301Df1Bf2de", 
    address_mainnet: "0xb49032cAe3379acCa86Eda9E09148301Df1Bf2de", 
  },
  discordLink: {
    address: "0x8F14cFecc6B51100F1D482FADE23442DEc414Dec", 
    address_mainnet: "0x8F14cFecc6B51100F1D482FADE23442DEc414Dec", 
  },
  wETH: {
    address: "0x44C3e835611202974e4c0da886F024C747817864", 
    address_mainnet: "0x44C3e835611202974e4c0da886F024C747817864", 
  },
};

