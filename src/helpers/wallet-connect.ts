// wallet-connect.ts
import { ethers } from "ethers"; // npm install ethers

// This is the SDK provided by Wallet Connect
import WalletConnectProvider from "@walletconnect/web3-provider";

import * as config from "../config/config";
import * as utils from "./utils";
import { IWallet, defaultWallet } from "../store/interfaces";
import {
  updateWalletAction
} from "../store/actions";
import WCQrMordal from "@walletconnect/qrcode-modal";
import WalletConnect from "@walletconnect/client";

const connector = new WalletConnect({
  bridge: "https://bridge.walletconnect.org", // Required
  qrcodeModal: WCQrMordal,
});

export const connect = async (): Promise<IWallet> => {
  try {
    const provider = new WalletConnectProvider({
      rpc: {
        [config.configVars.rpcNetwork.chainId]:
          config.configVars.rpcNetwork.rpcUrl,
      },
      chainId: config.configVars.rpcNetwork.chainId,
      bridge: "https://bridge.walletconnect.org",
    });
    await provider.enable();
    console.log(provider);
    const ethersProvider = new ethers.providers.Web3Provider(provider);
    if (!(provider.chainId === config.configVars.rpcNetwork.chainId) && !(provider.chainId === config.configVars.rpcNetworkCronos.chainId)) {
      window.alert(
        "Switch your Wallet to blockchain network " +
          config.configVars.rpcNetwork.chainName + ' or ' + config.configVars.rpcNetworkCronos.chainName
      );
      //throw new Error('Wrong Chain')
    }
    // Subscribe to events that reload the app
    provider.on("accountsChanged", utils.reloadApp);
    provider.on("chainChanged", utils.reloadApp);
    provider.on("disconnect", utils.reloadApp);
    provider.on("connect", (error: any, payload: any) => {
      if (error) {
          console.log("connect error", error);
          throw error;
      }
      //walletConnect.connect(connector);

      // Get provided accounts and chainId
  });

    return {
      ...defaultWallet,
      walletProviderName: "walletconnect",
      address: (await ethersProvider.listAccounts())[0],
      browserWeb3Provider: ethersProvider,
      serverWeb3Provider: new ethers.providers.JsonRpcProvider(
        config.configVars.rpcNetwork.rpcUrl
      ),
      wcProvider: provider,
      connected: true,
      chainId: provider.chainId,
    };
  } catch (e) {
    console.log(e);
    return defaultWallet;
  }
};
