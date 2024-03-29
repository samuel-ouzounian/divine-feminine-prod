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
import './DivineLink.css'
import { BrowserRouter } from "react-router-dom";
const axios = require('axios').default;







function DivineLink() {
    const { state } = React.useContext(Store);
    let address = state.wallet.address.substring(0, 6) + '...' + state.wallet.address.substring(state.wallet.address.length - 4)
    address = address.toUpperCase()
    let username = ''
    let guildName = ''
    let rsaToken = ''

    const [isTransacting, setIsTransacting] = useState(false);
    const [finished, setFinished] = useState(false);
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    function getDiscordID() {
        let path = []
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        rsaToken = urlParams.get('info')
        username = urlParams.get('username')
        guildName = urlParams.get('guildName')
        path.push(username)
        path.push(guildName)
        return path


    }
    getDiscordID()

    async function linkDiscord(e) {
        e.preventDefault()
        const wallet = state.wallet.browserWeb3Provider.getSigner();
        setIsTransacting(true)
        let signature = await wallet.signMessage(rsaToken);
        const data = JSON.stringify({
            sigHash: signature,
            token: rsaToken,
            walletID: state.wallet.address,
        });
        try {
            let response = await axios.post('https://divinelink.thedivinefemininenft.art', data)
            console.log(response.status)
            if (response.data == 'Success!') {
                setIsTransacting(false)
                setFinished(true)
                await sleep(3000)
                setFinished(false)
            } else {
                window.alert(response.data)
                setIsTransacting(false)
            }
        } catch (e) {
            window.alert('Internal Error')
            setIsTransacting(false)


        }



    }



    if (!state.wallet.connected) {
        return (

            <>
                <div style={{ minHeight: '90vH' }}>
                    <Content>
                        <Container
                            style={{
                                borderRadius: "20px",
                                marginTop: '100px',
                                width: 'auto',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Heading1 className="wow fadeInUp">{Uppercase("Connect Wallet to Access The Divine Link")}</Heading1>
                            <Container style={{ backgroundColor: '#0c0b0be0', textAlign: 'center', width: 'auto', marginTop: '50px' }}>
                                <TextWrapper>
                                    <BodyText>
                                        <h3 style={{ color: 'white' }}>How to Install Metamask:</h3>
                                        Download Metamask Wallet: <a href="https://metamask.io/download/" target='_blank' rel="noreferrer" style={{ color: 'white' }} >https://metamask.io/download/</a> <br />
                                        Video for installing Metamask on Chrome: <a href="https://www.youtube.com/watch?v=OJqaZRpRqXM" target='_blank' rel="noreferrer" style={{ color: 'white' }} >https://www.youtube.com/watch?v=OJqaZRpRqXM </a><br />
                                        Adding Polygon Mainnet to Metamask: <a href="https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/" target='_blank' rel="noreferrer" style={{ color: 'white' }} >https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/</a><br />
                                        Using Metamask to pay with Polygon/Matic: <a href="https://gravityfinance.medium.com/using-metamask-with-polygon-923f061054db" target='_blank' rel="noreferrer" style={{ color: 'white' }} >https://gravityfinance.medium.com/using-metamask-with-polygon-923f061054db</a>

                                    </BodyText>
                                </TextWrapper>
                            </Container>
                        </Container>

                    </Content>
                </div>
                <Footer />
            </>

        )
    }

    if (getDiscordID()[0] == 100) {
        return (

            <>
                <div style={{ minHeight: '90vH' }}>
                    <Content>
                        <Container
                            style={{
                                borderRadius: "20px",
                                margin: "20px",
                                width: 'auto',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Heading1 className="wow fadeInUp">{Uppercase("Divine Link")}</Heading1>
                            <Container style={{ backgroundColor: '#0c0b0be0', textAlign: 'center', width: 'auto', marginTop: '50px' }}>
                                <TextWrapper>
                                    <BodyText>
                                        <h3 style={{ color: 'white' }}>Get Started By Checking Out Our DOCS:</h3>
                                        <a href="https://app.gitbook.com/s/LPKOKan0qqcjWZwnujtL/divine-labs/divine-link" target='_blank' rel="noreferrer" style={{ color: 'white' }} >https://docs.thedivinefemininenft.art/divine-labs/divine-link</a> <br />
                                    </BodyText>
                                </TextWrapper>
                            </Container>
                        </Container>

                    </Content>
                </div>
                <Footer />
            </>

        )

    }

    if (state.wallet.connected) {



        return (

            <>
                <div className="container">
                    <h1 className="header">Divine Link</h1>
                    {isTransacting ? (<Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'black' }}
                        open={isTransacting}
                        onClick={!isTransacting}
                    >
                        <h1 style={{ fontSize: '40px', marginRight: '20px', fontFamily: 'Josefin Sans' }}>Linking...</h1><CircularProgress color="inherit" />
                    </Backdrop>) : <></>}
                    {finished ? (<Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'black' }}
                        open={finished}
                        onClick={!finished}
                    >
                        <h1 style={{ fontSize: '40px', textAlign: 'center', fontFamily: 'Josefin Sans' }}>Wallet Linked! <br /> <h3 style={{ fontSize: '25px', textAlign: 'center', fontFamily: 'Josefin Sans' }}>Your Role Will Be Assigned Shortly</h3></h1>
                    </Backdrop>) : <></>}
                    <div className="connect-wrapper">
                        <div className="info-column">
                            <div style={{ color: 'white', fontFamily: 'Josefin Sans', fontWeight: 'bold', fontSize: '20px' }}>Wallet Address:</div>
                            <div style={{ color: 'white', fontFamily: 'Josefin Sans', fontWeight: 'bold', fontSize: '20px' }}>{address}</div>
                        </div>
                        <div className="account-guild-wrapper">
                            <div className="info-column">
                                <div style={{ color: 'white', fontFamily: 'Josefin Sans', fontWeight: 'bold', fontSize: '20px' }}>Discord User:</div>
                                <div style={{ color: 'white', fontFamily: 'Josefin Sans', fontWeight: 'bold', fontSize: '20px' }}>{username}</div>
                            </div>
                            <div className="info-column">
                                <div style={{ color: 'white', fontFamily: 'Josefin Sans', fontWeight: 'bold', fontSize: '20px' }}>Server:</div>
                                <div style={{ color: 'white', fontFamily: 'Josefin Sans', fontWeight: 'bold', fontSize: '20px' }}>{guildName}</div>
                            </div>

                        </div>
                        <div className="warning-section">
                            <div className='warning-section-header'>By clicking LINK WALLET you are:</div>
                            <ul className="warning-section-list">
                                <li>Linking your wallet to: {username} & {guildName}</li>

                            </ul>
                        </div>
                        <div>
                            <form onSubmit={linkDiscord}>
                                <button type='submit' className="inputButton">LINK WALLET</button>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </>

        )
    }


    return (

        <>
            <div style={{ minHeight: '90vH' }}>
                <Content>
                    <Container
                        style={{
                            borderRadius: "20px",
                            margin: "20px",
                            width: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Heading1 className="wow fadeInUp">{Uppercase("Divine Link")}</Heading1>
                        <Container style={{ backgroundColor: '#0c0b0be0', textAlign: 'center', width: 'auto', marginTop: '50px' }}>
                            <TextWrapper>
                                <BodyText>
                                    <h3 style={{ color: 'white' }}>Get Started By Checking Out Our DOCS:</h3>
                                    <a href="https://docs.thedivinefemininenft.art/divine-labs/divine-link" target='_blank' rel="noreferrer" style={{ color: 'white' }} >https://docs.thedivinefemininenft.art/divine-labs/divine-link</a> <br />
                                </BodyText>
                            </TextWrapper>
                        </Container>
                    </Container>

                </Content>
            </div>
            <Footer />
        </>

    )

}

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BodyText = styled.p`
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  /* or 160% */

  /* Strong grey */

  color: #7e7f81;
`;

const TextWrapper = styled.div`
  @media screen and (max-width: 1220px) {
    order: 2;
  }
`;

export default DivineLink;