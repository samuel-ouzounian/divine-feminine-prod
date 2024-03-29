import React from "react";
import styled from "styled-components";
import Footer from "../footer";
import { Container } from "../container";
import { Heading1, Row } from "../layout";
import { Uppercase } from "../../utillities/uppercase";
import "./DAO.css";
import { Store } from '../../store/store-reducer';
import * as utils from "../../helpers/utils";
import { useState, useEffect } from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { NftImage } from "../../constants/image-constant";
const {
    bronzeCelestial,
    goldCelestial,
    platinumCelestial,
    Celestial5
} = NftImage;

function DAO() {
    const { state } = React.useContext(Store);
    const [isTransacting, setIsTransacting] = useState(false);
    const [discordID, setDiscordID] = useState(null)
    let id = ''


    function getDiscordID() {
        let id = ''
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        id = urlParams.get('id')
        setDiscordID(id)
        console.log(discordID)
    }

    async function linkDiscord(e) {
        e.preventDefault();
        const discordLinkInstance = await utils.Discord(
            state.wallet.browserWeb3Provider
        );
        try {
            const tx = await discordLinkInstance.linkDiscord(discordID);
            setIsTransacting(true);
            await tx.wait();
            setIsTransacting(false);

        } catch (e) {
            setIsTransacting(false);
            window.alert(e.data.message)
        }
    }

    useEffect(() => {
        getDiscordID()

    }, [])


    if(discordID == null){
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
                            <Container style={{ backgroundColor: '#0c0b0be0', textAlign: 'center', width: 'auto', marginTop: '50px', borderRadius:'10px' }}>
                                <TextWrapper>
                                    <BodyText>
                                        <h3 style={{ color: 'white' }}>Get started by visiting the Verify Celestial channel in our <a href="https://discord.gg/3eRZjpdSMm" target='_blank' rel="noreferrer" style={{ color: 'white' }} >Discord</a></h3>
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


    if (state.wallet.connected && discordID != null) {

        return (
            <>
                <div style={{ minHeight: '90vH' }}>
                    <Content>
                        <Container
                            style={{
                                borderRadius: "20px",
                                margin: "20px",
                                width: 'auto'
                            }}
                        >
                            <Heading1 className="wow fadeInUp">{Uppercase("Divine Dao")}</Heading1>
                            {isTransacting ? (<Backdrop
                                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                open={isTransacting}
                                onClick={!isTransacting}
                            >
                                <h1 style={{ fontSize: '40px', marginRight: '20px', fontFamily: 'Josefin Sans' }}>Processing...</h1><CircularProgress color="inherit" />
                            </Backdrop>) : <></>}
                        </Container>
                        <Container
                            style={{
                                backgroundColor: "#0c0b0be0",
                                borderRadius: "20px",
                                width: 'auto',
                            }}
                        >
                            <Row>
                                <TextWrapper>
                                    <BodyText className="wow fadeInUp">
                                        Click LINK WALLET below to connect your Discord to the Divine Feminine Web3 Ecosystem
                                    </BodyText>
                                </TextWrapper>
                            </Row>
                        </Container>
                        <div style={{ marginTop: '50px' }}>
                            <div>
                                <form onSubmit={linkDiscord}>
                                    <button type='submit' className="inputButtonDAO">LINK WALLET</button>
                                </form>
                            </div>
                        </div>
                    </Content>
                </div>
                <Footer />
            </>
        );
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
                        <Heading1 className="wow fadeInUp">{Uppercase("Connect Wallet to Access The Divine DAO")}</Heading1>
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



export default DAO;
