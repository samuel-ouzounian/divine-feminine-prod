// config/config.ts
declare global {
  interface Window {
    ethereum: any;
  }
}
export const configVars = {
  mode: "regular",
  rpcNetwork: {
    rpcUrl: "https://cronos-testnet-3.crypto.org:8545/",
    chainId: 338,
    chainIdHex: "0x14A",
    chainName: "Cronos Testnet",
    chainType: "testnet",
    nativeCurrency: {
      name: "TCRO",
      symbol: "TCRO",
      decimals: 18,
    },
    blockExplorerUrl: "https://cronoscan.com/",
  },
  goddess: {
    address: "0x1C7433C232E27b07595b8a5114fB572d6230ac23", // on Cronos Testnet
    address_mainnet: "0x1C7433C232E27b07595b8a5114fB572d6230ac23", // on Cronos Mainnet
  },
};
