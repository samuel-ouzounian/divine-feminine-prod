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
      address: "0x0e8f883124c1c234d64Ec566adC5966f1832d207", // on Cronos Testnet
      address_mainnet: "0x0e8f883124c1c234d64Ec566adC5966f1832d207", // on Cronos Mainnet
    },
  };
  