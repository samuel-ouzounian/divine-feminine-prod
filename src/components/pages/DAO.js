import React from "react";
import styled from "styled-components";
import Footer from "../footer";
import { Container } from "../container";
import { BodyText, Heading1, Row } from "../layout";
import { Uppercase } from "../../utillities/uppercase";
import "./Home.css";
import Web3 from 'web3';
import { Store } from '../../store/store-reducer';
import * as utils from "../../helpers/utils";
import { useState, useEffect } from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import * as config from "../../config/config";

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
            console.log('test')
            const tx = await discordLinkInstance.linkDiscord(discordID);
            setIsTransacting(true);
            await tx.wait();
            setIsTransacting(false);

        } catch (e) {
            setIsTransacting(false);
            window.alert(e.data.message)
        }
    }

    return (
        <>
            <div style={{ position: 'relative', minHeight: '87vH' }}>
                <Content>
                    <Container
                        style={{
                            borderRadius: "20px",
                            margin: "20px"
                        }}
                    >
                        <Heading1 className="wow fadeInUp">{Uppercase("Divine Dao")}</Heading1>
                    </Container>
                    <Container
                        style={{
                            backgroundColor: "rgba(0,0,0,.15)",
                            borderRadius: "20px",
                            width: 'auto',
                        }}
                    >
                        <Row>
                            <TextWrapper style={{ marginRight: 'auto', marginLeft: 'auto' }}>
                                <BodyText className="wow fadeInUp">
                                    Enter your 18 digit Discord ID (Ex: 029381527365287364) below to connect your Discord to the Divine Feminine Web3 Ecosystem
                                </BodyText>
                            </TextWrapper>
                        </Row>
                    </Container>
                    <Container
                        style={{
                            marginTop: '50px',
                            borderRadius: "20px",
                        }}
                    >
                        <Row>
                            <TextWrapper style={{ marginRight: 'auto', marginLeft: 'auto', padding: '10px 30px 10px 30px', borderRadius: '10px', backgroundColor: 'white' }}>
                                <BodyText style={{ lineHeight: '0px' }}>
                                    <form onSubmit={linkDiscord}>

                                        <input type='text' style={{ width: '300px', marginRight: '30px', height: '75px', borderRadius: '10px', borderColor: 'black', fontSize: '25px', textAlign: 'center', color: 'black' }} onChange={(e) => setDiscordID(e.target.value)}></input>
                                        <button type='submit' className="wow fadeInUp" style={{ color: 'white', backgroundColor: '#450000', border: '#450000', padding: '10px 40px 10px 40px', borderRadius: '10px' }}><h2 style={{ fontFamily: 'Cinzel' }}>CONNECT</h2></button>
                                    </form>
                                </BodyText>
                            </TextWrapper>
                        </Row>
                    </Container>
                </Content>
            </div>
            <Footer />
        </>
    );
}

const Content = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;



const TextWrapper = styled.div`
  @media screen and (max-width: 1220px) {
    order: 2;
  }
`;

export default DAO;
