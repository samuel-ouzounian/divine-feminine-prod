import styled from "styled-components";
import React from "react";
import Footer from "../footer";
import { NftImage } from "../../constants/image-constant";
import { Container } from "../container";
import { Heading1, Row } from "../layout";
import { Uppercase } from "../../utillities/uppercase";
import "./Home.css";
import { useState, useEffect } from 'react'
import Progressbar from '../Progress_bar';
import './PreMint.css'
import Web3 from 'web3';
import { Store } from '../../store/store-reducer';
import * as utils from "../../helpers/utils";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import * as config from "../../config/config";



function PreMint() {
    const { state } = React.useContext(Store);
    const {
        bronzeCelestial2,
        goldCelestial2,
        platinumCelestial2,
        Celestial6
    } = NftImage;
    const [mintAmount, setMintAmount] = useState(1);
    const [total, setTotal] = useState(0);
    const [walletBallance, setWalletBalance] = useState(0);
    const [walletTier, setWalletTier] = useState('');
    const [tierLengths, setTierLengths] = useState([]);
    const [cost, setCost] = useState(0);
    const [priceStatic, setPriceStatic] = useState([]);
    const [isTransacting, setIsTransacting] = useState(false);

    async function reserve(quantity) {
        let _cost = cost.toString();
        const goddessReserveInstance = await utils.goddessMint(
            state.wallet.browserWeb3Provider
        );
        try {
            const tx = await goddessReserveInstance["preMint"](quantity.toString(), { 'value': Web3.utils.toWei(_cost) });
            setIsTransacting(true);
            await tx.wait();
            setIsTransacting(false);
            window.location.reload();

        } catch (e) {
            setIsTransacting(false);
            window.alert(e.data.message)
        }
    }

    async function getInfo() {
        let lengths = []
        let price = []
        if (state.wallet.connected) {
            const goddessReserveInstance = await utils.goddessMint(
                state.wallet.browserWeb3Provider
            );
            try {
                let total = await goddessReserveInstance["totalPreList"]();
                total = total.toString()
                setTotal(total);
                let balance = await goddessReserveInstance["addressPreMintedBalance"](state.wallet.address)
                balance = balance.toString()
                setWalletBalance(balance)
                let tier = await goddessReserveInstance["addressTier"](state.wallet.address);
                tier = tier.toString()
                console.log(tier)
                if (tier === '0') {
                    setWalletTier('None')
                }
                if (tier === '1') {
                    setWalletTier('None')
                }
                if (tier === '2') {
                    setWalletTier('Bronze')
                }
                if (tier === '3') {
                    setWalletTier('Gold')
                }
                if (tier === '4') {
                    setWalletTier('Platinum')
                }
                let length = await goddessReserveInstance["whiteListLength"]()
                length = length.toString()
                lengths.push(length)
                length = await goddessReserveInstance["bronzeListLength"]()
                length = length.toString()
                lengths.push(length)
                length = await goddessReserveInstance["goldListLength"]()
                length = length.toString()
                lengths.push(length)
                length = await goddessReserveInstance["platinumListLength"]()
                length = length.toString()
                lengths.push(length)
                let amount = await goddessReserveInstance["whiteCost"]()
                amount = amount.toString();
                amount = amount / 10 ** 18;
                price.push(amount);
                amount = await goddessReserveInstance["bronzeCost"]()
                amount = amount.toString();
                amount = amount / 10 ** 18;
                price.push(amount);
                amount = await goddessReserveInstance["goldCost"]()
                amount = amount.toString();
                amount = amount / 10 ** 18;
                price.push(amount);
                amount = await goddessReserveInstance["platinumCost"]()
                amount = amount.toString();
                amount = amount / 10 ** 18;
                price.push(amount);
                setPriceStatic(price)
                setTierLengths(lengths);

            } catch (e) {
                console.log(e)

            }
        }
    }

    function changeMintAmount(operator) {
        if (operator === '-') {
            if (mintAmount - 1 >= 1) {
                getCost(mintAmount - 1);
                setMintAmount(mintAmount - 1)
                getCost();
            }
        }
        if (operator === '+') {
            if (mintAmount + 1 <= 5) {
                getCost(mintAmount + 1);
                setMintAmount(mintAmount + 1)
            }
        }
    }

    async function getCost(value) {
        const goddessReserveInstance = await utils.goddessMint(
            state.wallet.browserWeb3Provider
        );
        try {
            let amount = await goddessReserveInstance["calculateCost"](value.toString());
            amount = amount.toString();
            setCost(amount / 10 ** 18);
        } catch (e) {
            if (state.wallet.walletProviderName === 'defiwallet') {
                console.log(e)
            }
            if (state.wallet.walletProviderName === 'metamask') {
                console.log(e)
            }
        }
    }
    useEffect(() => {
        if (state.wallet.connected) {
            getInfo();
            getCost(mintAmount);

        }
    }, [state.wallet.connected])





    if (state.wallet.connected) {
        return (
            <>
                <Content style={{ marginBottom: '50px' }}>
                    <Container
                        style={{
                            borderRadius: "20px",
                            marginTop: "10px",
                            marginBottom: '40px',
                            height: '20px'

                        }}
                    >
                        <Heading1 className="wow fadeInUp">
                            {Uppercase("Pre-Mint Reserve")}
                            {isTransacting ? (<Backdrop
                                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                open={isTransacting}
                                onClick={!isTransacting}
                            >
                                <h1 style={{ fontSize: '40px', marginRight: '20px' }}>Reserving...</h1><CircularProgress color="inherit" />
                            </Backdrop>) : <></>}
                        </Heading1>

                    </Container>
                    <Container
                        style={{
                            backgroundColor: "rgba(0,0,0,.15)",
                            borderRadius: "20px",
                            marginTop: "60px",
                        }}
                    >
                        <PreMintHeader2 className="wow fadeInUp">
                            <div><h1 style={{ fontSize: '30px', color: 'white', fontFamily: 'Cinzel' }}>White List</h1><br /><h1 style={{ textAlign: 'center', color: 'white', fontFamily: "Josefin Sans", fontSize: '28px' }}>{tierLengths[0]} / 350</h1><br /><h1 style={{ textAlign: 'center', color: 'white', fontFamily: "Josefin Sans", fontSize: '24px' }}>{priceStatic[0]} {config.configVars.rpcNetwork.nativeCurrency.name}</h1></div>
                            <div><h1 style={{ fontSize: '30px', color: 'white', fontFamily: 'Cinzel' }}>Bronze Tier</h1><br /><h1 style={{ textAlign: 'center', color: 'white', fontFamily: "Josefin Sans", fontSize: '28px' }}>{tierLengths[1]} / 240</h1><br /><h1 style={{ textAlign: 'center', color: 'white', fontFamily: "Josefin Sans", fontSize: '24px' }}>{priceStatic[1]} {config.configVars.rpcNetwork.nativeCurrency.name}</h1></div>
                            <div><h1 style={{ fontSize: '30px', color: 'white', fontFamily: 'Cinzel' }}>Gold Tier</h1><br /><h1 style={{ textAlign: 'center', color: 'white', fontFamily: "Josefin Sans", fontSize: '28px' }}>{tierLengths[2]} / 80</h1><br /><h1 style={{ textAlign: 'center', color: 'white', fontFamily: "Josefin Sans", fontSize: '24px' }}>{priceStatic[2]} {config.configVars.rpcNetwork.nativeCurrency.name}</h1></div>
                            <div><h1 style={{ fontSize: '30px', color: 'white', fontFamily: 'Cinzel' }}>Platinum Tier</h1><br /><h1 style={{ textAlign: 'center', color: 'white', fontFamily: "Josefin Sans", fontSize: '28px' }}>{tierLengths[3]} / 40</h1><br /><h1 style={{ textAlign: 'center', color: 'white', fontFamily: "Josefin Sans", fontSize: '24px' }}>{priceStatic[3]} {config.configVars.rpcNetwork.nativeCurrency.name}</h1></div>
                        </PreMintHeader2>
                    </Container>
                    <Container
                        style={{
                            borderRadius: "20px"
                        }}
                    >
                        <Row>
                            <TextWrapper style={{ backgroundColor: "rgba(0,0,0,.15)" }}>
                                <PreMintHeader className="wow fadeInUp" style={{ marginTop: '25px' }}>
                                    <div><h1 style={{ fontSize: '28px', color: 'white', fontFamily: 'Cinzel' }}>Current Tier:</h1><br /><h1 style={{ textAlign: 'center', color: 'white', fontFamily: "Josefin Sans", fontSize: '28px' }}>{walletTier}</h1></div>
                                    <div><h1 style={{ fontSize: '28px', color: 'white', fontFamily: 'Cinzel' }}>Total Reserved:</h1><br /><h1 style={{ textAlign: 'center', color: 'white', fontFamily: "Josefin Sans", fontSize: '28px' }}>{walletBallance}</h1></div>
                                </PreMintHeader>

                                <div className="mint-container">
                                    <div className="wow fadeInUp">
                                        <h2 className='mint-number'>{total}/7800</h2>
                                    </div>
                                    <div className="wow fadeInUp">
                                        <Progressbar bgcolor="#450000" progress={Math.ceil((total / 7800) * 100)} height={90} />
                                    </div>
                                    <h1 className='mint-spacer'></h1>
                                    <div className="wow fadeInUp">
                                        <div className='button-container'>
                                            <button className='button-left' onClick={() => changeMintAmount('-')}>-</button>
                                            <h1 className='mint-amount'>{mintAmount}</h1>
                                            <button className='button-right' onClick={() => changeMintAmount('+')}>+</button>

                                        </div>
                                    </div>
                                    <h2 style={{ color: 'white', fontFamily: 'Cinzel', textAlign: 'center' }}>Total Cost: {cost} {config.configVars.rpcNetwork.nativeCurrency.name}</h2>
                                    <div className="wow fadeInUp" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        <button className='mint-btn' onClick={(e) => reserve(mintAmount)}>RESERVE</button>
                                    </div>
                                </div>
                            </TextWrapper>
                            <Between></Between>
                            <ImageWrapper
                                className="wow fadeInUp"
                                style={{ marginTop: "auto", marginBottom: "auto" }}
                            >
                                {
                                    walletTier === 'Bronze' ? (
                                        <img
                                            src={bronzeCelestial2}
                                            alt="cronos-nft"
                                            className="pre-mint-logo"
                                        />
                                    ) : walletTier === 'Gold' ? (
                                        <img
                                            src={goldCelestial2}
                                            alt="cronos-nft"
                                            className="pre-mint-logo"
                                        />
                                    ) : walletTier === 'Platinum' ? (
                                        <img
                                            src={platinumCelestial2}
                                            alt="cronos-nft"
                                            className="pre-mint-logo"
                                        />
                                    )
                                        : (
                                            <img
                                                src={Celestial6}
                                                alt="cronos-nft"
                                                className="pre-mint-logo"
                                            />
                                        )
                                }

                            </ImageWrapper>
                        </Row>
                    </Container>
                </Content>
                <Footer />

            </>
        )
    }
    return (
        <>
            <Content style={{ display: 'flex', flexDirection: 'column' }}>
                <h1 style={{ fontSize: '50px', color: 'white', fontFamily: 'Cinzel', textAlign: 'center' }}>Connect Wallet To Access Pre-Mint Reserve</h1>
                <img
                    src={Celestial6}
                    alt="cronos-nft"
                    style={{ borderRadius: "15px", width: "350px", height: "auto", marginBottom: '50px' }}
                />
            </Content>
            <Footer />
        </>
    );

}
export default PreMint;

const Between = styled.div`
  flex: 0;
  margin-left:200px;
  @media screen and (max-width: 1320px) {
    margin-left:100px;
  }
  @media screen and (max-width: 1220px) {
    order: 1;
  }

`;

const Content = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  #about-cronos {
    padding-top: 180px;
    padding-bottom: 180px;
  }
  #roadmap-cronos {
    padding-top: 180px;
    padding-bottom: 180px;
  }

  #utility-cronos {
    margin-top: 180px;
  }

  #teams-cronos {
    padding-bottom: 60px;
    padding-top: 50px;
    z-index: 10;
    background-color: #131313;
  }
  #teams-wrapper {
    margin-top: 50px;
    gap: 30px;
  }
`;

const ImageWrapper = styled.div`
  max-width: 100%;
  height: auto;
  text-align: center;
  @media screen and (max-width: 1220px) {
    order: 1;
  }
`;

const TextWrapper = styled.div`
border-radius:10px;
  width: 620px;
  @media screen and (max-width: 1220px) {
    margin-top:20px;
    height:auto;
    order: 2;
  }
  @media screen and (max-width: 850px) {
    width: calc(100% - 10px);
    order: 2;
  }
`;

const PreMintHeader = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-evenly;
  flex-wrap:wrap;
  line-height:5px;
  @media screen and (max-width: 500px) {
    flex-direction:column;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
  }

`;

const PreMintHeader2 = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-evenly;
  flex-wrap:wrap;
  line-height:5px;
  @media screen and (max-width: 850px) {
    height:400px;
    flex-direction:column;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
  }
  @media screen and (max-width: 500px) {
    height:800px;
  }

`;
