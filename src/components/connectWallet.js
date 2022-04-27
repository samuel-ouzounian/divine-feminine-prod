import React from 'react';
import { Dropdown } from 'react-dropdown-now';
import { Store } from "../store/store-reducer";
import * as walletMetamask from "../helpers/wallet-metamask";
import * as walletConnect from '../helpers/wallet-connect';
import { useEffect, useState } from 'react';
import { defaultWallet } from "../store/interfaces";
import * as config from "../config/config";
import WalletConnectProvider from "@walletconnect/web3-provider";
import {
    updateWalletAction
} from "../store/actions";
import './connectWallet.css'
import Popup from "reactjs-popup";
import { SharedImage, NftImage } from "../constants/image-constant";
const {
    metamask,
    WalletConnect
} = NftImage;



function ConnectWallet() {
    const { state, dispatch } = React.useContext(Store);

    const contentStyle = {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: "500px",
        width: "100%"
    };

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    async function checkIfWalletIsConnected() {
        
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });

            if (accounts.length > 0) {
                ConnectWallet('Metamask')
            }
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
                localStorage.setItem('walletConnect', 'True')
                break;
            default:
                newWallet = await walletMetamask.connect();
        }
        if (newWallet.connected) {
            updateWalletAction(dispatch, newWallet);
        }


    }

    const disconnectWallet = async () => {
        switch (state.wallet.walletProviderName) {
            default:
        }
        updateWalletAction(dispatch, { ...defaultWallet });
    }


    if (state.wallet.connected) {
        var address = state.wallet.address.substring(0, 6) + '...' + state.wallet.address.substring(state.wallet.address.length - 4)
        address = address.toUpperCase()
        return (
            <button className='connect-wallet-button' onClick={(option) => disconnectWallet()}>{address}</button>
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
                                <img style={{ borderRadius: "10px", width: "75px", height: "auto" }} src={WalletConnect}></img>
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