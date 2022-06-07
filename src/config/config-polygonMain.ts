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
    address: "0x5C8d4026944a9bF8753C4c774a46F591fA8E8821",
    address_mainnet: "0x5C8d4026944a9bF8753C4c774a46F591fA8E8821",
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
    address: "0x94a48DA3690ce93FbdECED82B0A59A27E947c7cD",
    address_mainnet: "0x94a48DA3690ce93FbdECED82B0A59A27E947c7cD",
  },
};
