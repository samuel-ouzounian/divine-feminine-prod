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
    preMint: {
      address: "0x0e8f883124c1c234d64Ec566adC5966f1832d207", 
      address_mainnet: "0x0e8f883124c1c234d64Ec566adC5966f1832d207", 
    },
    discordLink: {
      address: "0x15Cb66345a03B5b2Fa1ACA478cDA78BbBFbFc89E", 
      address_mainnet: "0x15Cb66345a03B5b2Fa1ACA478cDA78BbBFbFc89E", 
    },
    wETH: {
      address: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619", 
      address_mainnet: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619", 
    },
  };
  
  