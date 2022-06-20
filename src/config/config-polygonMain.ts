// config/config.ts
declare global {
  interface Window {
    ethereum: any;
  }
}
export const configVars = {
  mode: "regular",
  rpcNetwork: {
    rpcUrl: "https://rpc-mainnet.matic.network",
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
    address: "0xa15B594177Dd5C957e9FBd35a1e15b2039B8C187",
    address_mainnet: "0xa15B594177Dd5C957e9FBd35a1e15b2039B8C187",
  },
  discordLink: {
    address: "0x15Cb66345a03B5b2Fa1ACA478cDA78BbBFbFc89E",
    address_mainnet: "0x15Cb66345a03B5b2Fa1ACA478cDA78BbBFbFc89E",
  },
  wETH: {
    address: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
    address_mainnet: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
  },
  discordLinkCommercial: {
    address: "0xC7F774EC63DCc4b1C59607D4090224fe841FF567",
    address_mainnet: "0xC7F774EC63DCc4b1C59607D4090224fe841FF567",
  },
};
