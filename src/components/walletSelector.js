import React from 'react';
import { Dropdown } from 'react-dropdown-now';
import { Store } from "../store/store-reducer";
import './walletSelector.css'
import * as walletMetamask from "../helpers/wallet-metamask";
import * as walletDefiwallet from "../helpers/wallet-defiwallet";
import * as walletConnect from '../helpers/wallet-connect';
import { useEffect } from 'react';
import { defaultWallet } from "../store/interfaces";
import {
    updateWalletAction
} from "../store/actions";


function WalletSelector() {
    const { state, dispatch } = React.useContext(Store);

    function connected() {
        if (window.localStorage) {
            if (!localStorage.getItem('firstLoad')) {
                localStorage['firstLoad'] = true;
                window.location.reload();
            }
            else
                localStorage.removeItem('firstLoad');
        }
    }

    async function ConnectWallet (option) {

        if (option.value === 'Metamask') {
            option = 'metamask-injected'
        }
        if (option.value === 'Crypto.com DeFi Wallet') {
            option = 'defiwallet'
        }
        if (option.value === 'Metamask') {
            option = 'metamask-injected'
        }
        let newWallet = '';
        switch (option) {
            // Wallet injected within browser (MetaMask)
            case "metamask-injected":
                newWallet = await walletMetamask.connect();
                break;
            // Crypto.com DeFi Wallet Extension (browser)
            case "defiwallet":
                newWallet = await walletDefiwallet.connect();
                break;
            // Crypto.com DeFi Wallet mobile app (via Wallet Connect)
            case "wallet-connect":
                newWallet = await walletConnect.connect();
                break;
            default:
                newWallet = await walletMetamask.connect();
        }
        if (newWallet.connected) {
            localStorage.setItem('connected', true)
            localStorage.setItem('provider', option)
            updateWalletAction(dispatch, newWallet);
            console.log(state.wallet.address)
            connected()
        }


    }

    const disconnectWallet = async () => {
        switch (state.wallet.walletProviderName) {
            case "defiwallet":
                await state.wallet.wcConnector.deactivate();
                break;
            default:
        }
        localStorage.clear();
        updateWalletAction(dispatch, { ...defaultWallet });
        window.location.reload();
    }

    useEffect(() => {
        const connectWalletOnPageLoad = async () => {
            if (localStorage?.getItem('connected') === 'true') {
                try {
                    await ConnectWallet(localStorage.getItem('provider'))
                } catch (ex) {
                    console.log(ex)
                }
            }
        }

        connectWalletOnPageLoad()
    }, [])

    if (state.wallet.connected) {
        var address = state.wallet.address.substring(0, 6) + '...' + state.wallet.address.substring(state.wallet.address.length - 4)
        address = address.toUpperCase()
        return (
            <div className='connect-wallet-container'>
                <Dropdown
                    placeholder={address}
                    className="my-className"
                    options={['DISCONNECT']}
                    value="Select"
                    onChange={(value) => disconnectWallet(value)}
                />
            </div>
        );

    }



    return (
        <div className='connect-wallet-container'>
            <Dropdown
                placeholder="CONNECT WALLET"
                className="my-className"
                options={['Metamask', 'Crypto.com DeFi Wallet']}
                value="Select"
                onChange={(value) => ConnectWallet(value)}
                //onSelect={(value) => ConnectWallet(value)} // always fires once a selection happens even if there is no change
            />
        </div>
    );


}
export default WalletSelector;