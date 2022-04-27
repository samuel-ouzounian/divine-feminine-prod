import styled from 'styled-components';
import { SharedImage } from '../constants/image-constant';
import { HeaderMenuWrapper, HeaderMenuWrapper2 } from './menu';
import { Container } from './container';
import { Between, Row } from './layout';
import { LogoWrapperHeader } from './Logo';
import './header.css'
import ConnectWallet from './connectWallet';
const { DiscordIco, TwitterIco, InstagramIco, Logo } = SharedImage;


export default function Header() {

    return (
        <HeaderWrapper>
            <Container>
                <Row style={{ justifyContent:'center', alignItems: "center"}}>
                    <div className='logo-container'>
                    <LogoWrapperHeader src={Logo} alt="cronos-fighter" />
                    </div>
                    <HeaderMenuWrapper2 style={{marginLeft: '20px'}} id="social-menu">
                        <a href='https://discord.gg/QY9k3mEt' target='_blank' rel="noreferrer">
                            <img src={DiscordIco} alt="cronos-social" />
                        </a>
                        <a href='https://twitter.com/NFT_DivineFemme' target='_blank' rel="noreferrer">
                            <img src={TwitterIco} alt="cronos-social" />

                        </a>
                        <a href='' target='_blank' rel="noreferrer">
                            <img src={InstagramIco} alt="cronos-social" />

                        </a>
                    </HeaderMenuWrapper2>
                    <Between />
                    <HeaderMenuWrapper>
                        <a className='header-links' href='/'>
                            Home
                        </a>
                        <a className='header-links' href='/'>
                            My Celestials
                        </a>
                        <a className='header-links' href='/'>
                            Leaderboard
                        </a>
                        <a className='header-links' href='/'>
                            Marketplace
                        </a>
                        <a className='header-links' href='/'>
                            DAO
                        </a>
                        <a className='header-links' href='/'>
                            Whitepaper
                        </a>
                    </HeaderMenuWrapper>
                    <div className='wallet-selector-container'>
                        <ConnectWallet />
                        </div>
                </Row>
            </Container>
        </HeaderWrapper>
    )

}

const HeaderWrapper = styled.header`
    color:white;
    background-color:rgba(0,0,0,.15);
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
`
