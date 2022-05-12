import styled from 'styled-components';
import { SharedImage } from '../constants/image-constant';
import { MenuWrapper } from './menu';
import { Container } from './container';
import { Between, Row } from './layout';
import { LogoWrapper } from './Logo';

const { DiscordIco, TwitterIco, InstagramIco, Logo } = SharedImage;

export default function Footer() {
    return (
        <FooterWrapper>
            <Container>
                <Row style={{ alignItems: "center" }}>
                    <LogoWrapper src={Logo} alt="" />
                    <Between />
                    <MenuWrapper id="social-menu" style={{marginTop:'20px'}}>
                        <a href='https://discord.gg/QY9k3mEt' target='_blank' rel="noreferrer">
                            <img src={DiscordIco} alt="celestial-social" />
                        </a>
                        <a href='https://twitter.com/NFT_DivineFemme' target='_blank' rel="noreferrer">
                            <img src={TwitterIco} alt="celestial-social" />

                        </a>
                        <a href='' target='_blank' rel="noreferrer">
                            <img src={InstagramIco} alt="celestial-social" />

                        </a>
                    </MenuWrapper>
                    <Between />
                    <MenuWrapper id="social-menu">
                        <a href='https://gateway.pinata.cloud/ipfs/QmeDUSoD2sX4SkpmGYUtR63ve21f9VA5TP8REdodtVU273' target='_blank' rel="noreferrer" style={{color:'white'}}>
                            Digital Ownership Agreement
                        </a>
                    </MenuWrapper>
                </Row>
            </Container>
        </FooterWrapper>
    )
}


const FooterWrapper = styled.footer`
width:100%;
    color:white;
    background-color:rgba(0,0,0,.15);
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
`