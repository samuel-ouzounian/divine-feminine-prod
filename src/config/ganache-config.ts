// config/config.ts
declare global {
  interface Window {
    ethereum: any;
  }
}
export const configVars = {
  mode: "regular",
  rpcNetwork: {
    rpcUrl: "http://127.0.0.1:7545/",
    chainId: 1337,
    chainIdHex: "0x539",
    chainName: "Ganache",
    chainType: "mainnet",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    blockExplorerUrl: "https://cronoscan.com/",
  },
  goddess: {
    address: "0x259461f669dddb42e681e20579933900Cb9C5854", // on Cronos Testnet
    address_mainnet: "0x259461f669dddb42e681e20579933900Cb9C5854", // on Cronos Mainnet
  },
};
