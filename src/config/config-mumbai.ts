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
    address: "0xCDaebee46c93AE0f91a57444eA48C1022d59E188", 
    address_mainnet: "0xCDaebee46c93AE0f91a57444eA48C1022d59E188", 
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

