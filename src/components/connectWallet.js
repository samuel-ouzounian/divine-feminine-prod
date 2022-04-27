import React from 'react';
import { Store } from "../store/store-reducer";
import * as walletMetamask from "../helpers/wallet-metamask";
import * as walletConnect from '../helpers/wallet-connect';
import { useEffect, useState } from 'react';
import { defaultWallet } from "../store/interfaces";
import * as config from "../config/config";
import {
    updateWalletAction
} from "../store/actions";
import './connectWallet.css'
import Popup from "reactjs-popup";
import { NftImage } from "../constants/image-constant";
import WCQrMordal from "@walletconnect/qrcode-modal";
import WalletConnect from "@walletconnect/client";

const connector = new WalletConnect({
    bridge: "https://bridge.walletconnect.org", // Required
    qrcodeModal: WCQrMordal,
});
const {
    metamask,
    walletconnect
} = NftImage;





function ConnectWallet() {
    const { state, dispatch } = React.useContext(Store);
    const [connected, setConnected] = useState(false);


    const contentStyle = {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: "500px",
        width: "100%"
    };

    useEffect(() => {
        if (!connected) {
            checkIfWalletIsConnected();
        }
    }, []);



    async function checkIfWalletIsConnected() {
        let newWallet = '';
        console.log(sessionStorage.getItem("walletConnect"))
        if (sessionStorage.getItem("walletConnect") === 'test') {
            newWallet = await walletConnect.connect();
            if (newWallet.connected) {
                updateWalletAction(dispatch, newWallet);
                localStorage.setItem("walletConnect", true)
                setConnected(true)
                return
            }

        }
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });

            if (accounts.length > 0) {
                ConnectWallet('Metamask')
            }
            setConnected(true)
        }


    }

    async function ConnectWallet(option) {
        let newWallet = '';
        switch (option) {
            // Wallet injected within browser (MetaMask)
            case "metamask-injected":
                newWallet = await walletMetamask.connect();
                break;
            // Crypto.com DeFi Wallet mobile app (via Wallet Connect)
            case "wallet-connect":
                newWallet = await walletConnect.connect();
                break;
            default:
                newWallet = await walletMetamask.connect();
        }
        if (newWallet.connected) {
            updateWalletAction(dispatch, newWallet);
            if (option === 'wallet-connect') {
                sessionStorage.setItem("walletConnect", 'test')
            }
        }


    }

    const handleClickDisconnect = () => {
        connector.killSession();
        sessionStorage.clear();
    };

    const disconnectMetamask = async () => {
        switch (state.wallet.walletProviderName) {
            default:
        }
        updateWalletAction(dispatch, { ...defaultWallet });
    }
    const disconnectWalletConnect = async () => {
        switch (state.wallet.walletProviderName) {
            default:
        }
        handleClickDisconnect();
        updateWalletAction(dispatch, { ...defaultWallet });
    }


    if (state.wallet.connected && state.wallet.walletProviderName === 'metamask') {

        var address = state.wallet.address.substring(0, 6) + '...' + state.wallet.address.substring(state.wallet.address.length - 4)
        address = address.toUpperCase()
        return (
            <button className='connect-wallet-button' onClick={(options) => disconnectMetamask()}>{address}</button>
        );

    }
    if (state.wallet.connected && state.wallet.walletProviderName === 'walletconnect') {

        var address = state.wallet.address.substring(0, 6) + '...' + state.wallet.address.substring(state.wallet.address.length - 4)
        address = address.toUpperCase()
        return (
            <button className='connect-wallet-button' onClick={(options) => disconnectWalletConnect()}>{address}</button>
        );

    }


    return (
        <>
            <Popup
                trigger={<button className="connect-wallet-button">CONNECT WALLET</button>}
                modal
                contentStyle={contentStyle}
            >
                {close => (
                    <div className="modal">
                        <div className="content">
                            <div className='card' onClick={(option) => ConnectWallet('metamask-injected')}>
                                <img style={{ borderRadius: "10px", width: "75px", height: "auto" }} src={metamask}></img>
                                <h1 style={{ fontFamily: 'Cinzel' }}>Metamask</h1>
                                <h3 style={{ fontFamily: "Josefin Sans" }}>Connect With Metamask In Your Browser</h3>
                            </div>
                            <div className='card' onClick={(option) => ConnectWallet('wallet-connect')}>
                                <img style={{ borderRadius: "10px", width: "75px", height: "auto" }} src={walletconnect}></img>
                                <h1 style={{ fontFamily: 'Cinzel', marginTop: '30px' }}>Wallet Connect</h1>
                                <h3 style={{ fontFamily: "Josefin Sans" }}>Scan With Wallet Connect</h3>
                            </div>
                        </div>
                    </div>
                )}
            </Popup>
        </>

    )
}

export default ConnectWallet;