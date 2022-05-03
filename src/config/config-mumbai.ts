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
      address: "0x3c24541c233C248379c61ce0Da8582b1230B6147", // on Cronos Testnet
      address_mainnet: "0x3c24541c233C248379c61ce0Da8582b1230B6147", // on Cronos Mainnet
    },
  };
  