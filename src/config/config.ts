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
  preMint: {
    address: "0x0CA0b3f8B2Fe3dC6B8BA77955793C0aB7e9BDD89", 
    address_mainnet: "0x0CA0b3f8B2Fe3dC6B8BA77955793C0aB7e9BDD89", 
  },
  discordLink: {
    address: "0x8F14cFecc6B51100F1D482FADE23442DEc414Dec", 
    address_mainnet: "0x8F14cFecc6B51100F1D482FADE23442DEc414Dec", 
  },
  wETH: {
    address: "0x757c86b41E5048B99311Ea55f37A5f116b3D42eA", 
    address_mainnet: "0x757c86b41E5048B99311Ea55f37A5f116b3D42eA", 
  },
};

