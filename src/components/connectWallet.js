import React from 'react';
import { Store } from "../store/store-reducer";
import * as walletMetamask from "../helpers/wallet-metamask";
import * as walletConnect from '../helpers/wallet-connect';
import * as walletDefiwallet from "../helpers/wallet-defiwallet";
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
    walletConnectImage,
    crypto,
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
                setConnected(true)
                return
            }

        }
        if (sessionStorage.getItem("defiwallet") === 'test') {
            newWallet = await walletDefiwallet.connect();
            if (newWallet.connected) {
                updateWalletAction(dispatch, newWallet);
                setConnected(true)
                return
            }
        }
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });

            if (accounts.length > 0) {
                ConnectWallet('metamask-injected')
            }
            setConnected(true)
        }


    }

    async function ConnectWallet(option) {
        let newWallet = '';
        switch (option) {
            case "defiwallet":
                newWallet = await walletDefiwallet.connect();
                break;
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
            if (option === 'defiwallet') {
                sessionStorage.setItem("defiwallet", 'test')
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
        sessionStorage.clear();
    }

    const disconnectDefi = async () => {
        await state.wallet.wcConnector.deactivate();
        sessionStorage.clear();
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

    if (state.wallet.connected && state.wallet.walletProviderName === 'defiwallet') {

        var address = state.wallet.address.substring(0, 6) + '...' + state.wallet.address.substring(state.wallet.address.length - 4)
        address = address.toUpperCase()
        return (
            <button className='connect-wallet-button' onClick={(options) => disconnectDefi()}>{address}</button>
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
                                <h1 style={{ fontFamily: 'Josefin Sans', marginTop:'30px' }}>Metamask</h1>
                            </div>
                            <div className='card' onClick={(option) => ConnectWallet('wallet-connect')}>
                                <img style={{ borderRadius: "10px", width: "75px", height: "auto" }} src={walletConnectImage}></img>
                                <h1 style={{ fontFamily: 'Josefin Sans', marginTop: '30px' }}>Wallet Connect</h1>
                            </div>
                            <div className='card' onClick={(option) => ConnectWallet('defiwallet')}>
                                <img style={{ borderRadius: "10px", width: "75px", height: "auto", marginBottom:'10px' }} src={crypto}></img>
                                <h1 style={{ fontFamily: 'Josefin Sans', marginTop: '30px' }}>DeFi Wallet</h1>
                            </div>
                        </div>
                    </div>
                )}
            </Popup>
        </>

    )
}

export default ConnectWallet;