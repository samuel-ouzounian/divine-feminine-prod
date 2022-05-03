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
      address: "0x1eC8FB8d6085c44393626DFa72f6a63461B590b9", // on Cronos Testnet
      address_mainnet: "0x1eC8FB8d6085c44393626DFa72f6a63461B590b9", // on Cronos Mainnet
    },
  };
  