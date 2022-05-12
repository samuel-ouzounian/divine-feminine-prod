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
    const [discordID, setDiscordID] = useState('');

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

    if (state.wallet.connected) {

        return (
            <>
                <div style={{ minHeight: '87vH' }}>
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
                                <h1 style={{ fontSize: '40px', marginRight: '20px' }}>Processing...</h1><CircularProgress color="inherit" />
                            </Backdrop>) : <></>}
                        </Container>
                        <Container
                            style={{
                                backgroundColor: "rgba(0,0,0,.15)",
                                borderRadius: "20px",
                                width: 'auto',
                            }}
                        >
                            <Row>
                                <TextWrapper>
                                    <BodyText className="wow fadeInUp">
                                        Enter your 18 digit Discord ID (Ex: 029381527365287364) below to connect your Discord to the Divine Feminine Web3 Ecosystem
                                    </BodyText>
                                </TextWrapper>
                            </Row>
                        </Container>
                        <div className='submitDiv'>
                            <form className="submitForm" onSubmit={linkDiscord}>

                                <input className="inputBox" type='text' onChange={(e) => setDiscordID(e.target.value)}></input>
                                <button type='submit' className="inputButton" style={{ color: 'white', backgroundColor: '#450000', border: '#450000', padding: '10px 40px 10px 40px', borderRadius: '10px', cursor: 'pointer' }}><h2 style={{ fontFamily: 'Cinzel' }}>CONNECT</h2></button>
                            </form>
                        </div>
                    </Content>
                </div>
                <Footer />
            </>
        );
    }
    return (

        <>
        <div style={{ minHeight: '87vH' }}>
            <Content>
                <Container
                    style={{
                        borderRadius: "20px",
                        margin: "20px",
                        width: 'auto',
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                >
                    <Heading1 className="wow fadeInUp">{Uppercase("Connect Wallet to Access The Divine DAO")}</Heading1>
                    <img
                    src={Celestial5}
                    alt=""
                    style={{ borderRadius: "15px", width: "350px", height: "auto", marginTop: '50px' }}
                />
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
