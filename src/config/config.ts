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
    address: "0xbCF11c601cCa2e97D26C4277A4b0d250492faAaa",
    address_mainnet: "0xbCF11c601cCa2e97D26C4277A4b0d250492faAaa",
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
    address: "0xC9edBe15415F0b5AE576e69C102B796E6FCcB4B2",
    address_mainnet: "0xC9edBe15415F0b5AE576e69C102B796E6FCcB4B2",
  },
};
