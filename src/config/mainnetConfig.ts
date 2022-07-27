// config/config.ts
declare global {
  interface Window {
    ethereum: any;
  }
}
export const configVars = {
  mode: "regular",
  rpcNetwork: {
    rpcUrl: "https://rpc-mainnet.matic.network/",
    chainId: 137,
    chainIdHex: "0x89",
    chainName: "Polygon Mainnet",
    chainType: "mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    blockExplorerUrl: "https://polygonscan.com/",
  },
  rpcNetworkCronos: {
    rpcUrl: "https://evm-t3.cronos.org/",
    chainId: 25,
    chainIdHex: "0x19",
    chainName: "Cronos Mainnet",
    chainType: "mainnet",
    nativeCurrency: {
      name: "CRO",
      symbol: "CRO",
      decimals: 18,
    },
    blockExplorerUrl: "https://cronoscan.com/",
  },
  preMint: {
    address: "0x0CA0b3f8B2Fe3dC6B8BA77955793C0aB7e9BDD89", 
    address_mainnet: "0x0CA0b3f8B2Fe3dC6B8BA77955793C0aB7e9BDD89", 
  },
  discordLink: {
    address: "0xeE06902Ad0a6f961ea12F97Be8bDB67836620243", 
    address_mainnet: "0xeE06902Ad0a6f961ea12F97Be8bDB67836620243", 
  },
  wETH: {
    address: "0x757c86b41E5048B99311Ea55f37A5f116b3D42eA", 
    address_mainnet: "0x757c86b41E5048B99311Ea55f37A5f116b3D42eA", 
  },
};

