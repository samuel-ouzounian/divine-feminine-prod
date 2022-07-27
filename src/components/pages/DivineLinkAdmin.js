import React from "react";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Footer from "../footer";
import styled from "styled-components";
import { Container } from "../container";
import { Heading1, Row } from "../layout";
import { Uppercase } from "../../utillities/uppercase";
import { useState, useEffect } from 'react'
import { Store } from '../../store/store-reducer';
import * as utils from "../../helpers/utils";
import * as config from "../../config/config";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './DivineLinkAdmin.css'
import { SharedImage } from "../../constants/image-constant";
const axios = require('axios').default;
const {
    discordBig
} = SharedImage;
const Web3 = require('web3');



function DivineLinkAdmin() {
    const options = [
        'one', 'two', discordBig
    ];
    const { state } = React.useContext(Store);
    const defaultOption = options[0];
    const [server, setServer] = useState(null);
    const [role, setRole] = useState(null);
    const [tokenType, setTokenType] = useState(null);
    const [contractAddress, setContractAddress] = useState(null);
    const [minTokens, setMintTokens] = useState(null);
    const [guildList, setGuildList] = useState([])
    const [guildNames, setGuildNames] = useState([])
    const [roleList, setRoleList] = useState([])
    const [roleNames, setRoleNames] = useState([])
    async function test() {
        const signer = await Web3.eth.personal.ecRecover(12345, '0x6fd103ef9af83c80154fc1a2b812e9aa2df9c59f1d171501f2933e3ab992a8bf78e175e3d1f8d9484f15c5513cd9608d68477034fdfee3e1bbd3ae4a42874af81b');
        console.log(signer)
    }
    test();

    const oauthURL = 'https://discord.com/api/oauth2/authorize?response_type=token&client_id=978744825388089394&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2FDivineLabs%2FDivineLinkAdmin&&scope=identify%20guilds'

    async function validateDiscord() {
        let access_token = new URLSearchParams(window.location.hash).get('access_token');
        try {
            let response = await axios.get('https://discordapp.com/api/users/@me', {
                headers: {
                    Authorization: 'Bearer ' + access_token //the token is a variable which holds the token
                }
            })
            if (response.status == 200) {
                sessionStorage.setItem('access_token', access_token);
                window.location.reload()
            } else {
                sessionStorage.clear();
            }
        } catch {
            sessionStorage.clear();
        }
    }

    async function getGuilds() {
        try {
            let guilds = []
            let guildNamesTemp = []
            let access_token = sessionStorage.getItem('access_token')
            let response = await axios.get('https://discordapp.com/api/users/@me/guilds', {
                headers: {
                    Authorization: 'Bearer ' + access_token //the token is a variable which holds the token
                }
            })
            for (let x of response.data) {
                if (x.permissions == 2147483647) {
                    guilds.push(x)
                    guildNamesTemp.push(x.name)
                }
            }
            setGuildNames(guildNamesTemp)
            setGuildList(guilds)
        } catch (e) {
            sessionStorage.clear();
        }

    }

    async function getRoles() {
        let roles = []
        let roleNamesTemp = []
        let access_token = sessionStorage.getItem('access_token')
        let response = await axios.get('https://discordapp.com/api/guilds/', {
            headers: {
                Authorization: 'Bearer ' + access_token //the token is a variable which holds the token
            }
        })

    }

    async function test(e) {
        e.preventDefault();
    }

    function updateContractAddress(event) {
        setContractAddress(event.target.value)
    }
    function updateMinTokens(event) {
        setMintTokens(event.target.value)
    }

    if (server != null) {
        //let obj = .find(o => o.name === 'string 1');
        console.log(server)
    }

    useEffect(() => {
        if (sessionStorage.getItem('access_token') == null) {
            validateDiscord();
        }
        if (sessionStorage.getItem('access_token') != null) {
            getGuilds();
        }

    }, [])

    if (sessionStorage.getItem('access_token') == null) {
        return (
            <></>
        )
    }

    return (
        <>
            <Content>
                <Card>
                    <h1 className="link-server-header">Link Server</h1>
                    <form className="server-link-options" onSubmit={test}>
                        <Dropdown options={guildNames} onChange={setServer} value={server} placeholder="Discord Server" />;
                        <Dropdown options={options} onChange={setRole} value={role} placeholder="Role" />;
                        <input type="text" onChange={updateContractAddress} placeholder='Smart Contract Address' />
                        <Dropdown options={options} onChange={setTokenType} value={tokenType} placeholder="Token Type" />;
                        <input type="text" onChange={updateMinTokens} placeholder='Min Tokens' />
                        <input type="submit" value="Submit" />
                    </form>

                </Card>
            </Content>
            <Footer></Footer>
        </>

    )



}

const Content = styled.section`
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    min-height:90vH;
                    `;

const Card = styled.div`
                    display:'flex';
                    flex-direction:'column';
                    justify-content:'center';
                    align-items:'center';
                    overflow-wrap: normal;
                    background-color: #0c0b0be0;
                    max-width: 660px;
                    padding: 20px;
                    border-radius: 10px;
                    @media screen and (max-width: 1220px) {
                        height: auto;
  }
                    `;

export default DivineLinkAdmin;