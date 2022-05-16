import styled from 'styled-components';
import { SharedImage } from '../constants/image-constant';
import { MenuWrapper } from './menu';
import { Container } from './container';
import { Between, Row } from './layout';
import { LogoWrapper } from './Logo';
import './footer.css'

const { DiscordIco, TwitterIco, InstagramIco, Logo } = SharedImage;

export default function Footer() {
    return (
        <FooterWrapper>
            <Container>
                <Row style={{ alignItems: "center" }}>
                    <LogoWrapper src={Logo} alt="" />
                    <Between />
                    <MenuWrapper id="social-menu" className='social-icons'>
                        <a href='https://discord.com/channels/946228581867073556/946228581867073559' target='_blank' rel="noreferrer">
                            <i class="fab fa-discord" style={{ fontSize: '30px', color: 'white' }}></i>
                        </a>
                        <a href='https://twitter.com/NFT_DivineFemme' target='_blank' rel="noreferrer">
                            <i class="fab fa-twitter" style={{ fontSize: '30px', color: 'white' }}></i>

                        </a>
                        <a href='' target='_blank' rel="noreferrer">
                            <i class="fas fa-scroll" style={{ fontSize: '28px', color: 'white' }} alt='celestial-social'></i>
                        </a>
                    </MenuWrapper>
                    <Between />
                    <MenuWrapper id="social-menu">
                        <a href='https://gateway.pinata.cloud/ipfs/QmeDUSoD2sX4SkpmGYUtR63ve21f9VA5TP8REdodtVU273' target='_blank' rel="noreferrer" style={{ color: 'white' }}>
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