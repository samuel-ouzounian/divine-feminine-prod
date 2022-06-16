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
                        <a href='https://discord.gg/3eRZjpdSMm' target='_blank' rel="noreferrer">
                            <i class="fab fa-discord" style={{ fontSize: 'calc(1.8vw + 10px)', color: 'white' }}></i>
                        </a>
                        <a href='https://twitter.com/NFT_DivineFemme' target='_blank' rel="noreferrer">
                            <i class="fab fa-twitter" style={{ fontSize: 'calc(1.8vw + 10px)', color: 'white' }}></i>

                        </a>
                        <a href='https://medium.com/@thedivinefemininenft/what-is-the-divine-feminine-a-white-paper-d849a2163e78' target='_blank' rel="noreferrer">
                            <i class="fas fa-scroll" style={{ fontSize: 'calc(1.8vw + 10px)', color: 'white' }} alt='celestial-social'></i>
                        </a>
                    </MenuWrapper>
                    <Between />
                    <div className='legalSection' id="social-menu">
                        <a href='https://gateway.pinata.cloud/ipfs/QmQWPPhGJZZ7souKGiEXyGkwZ51RZLHg7wUohU9soxhsh1/Internal_%20Legal%20Digital%20Ownership%20Agreement%20May%202022%20v2.pdf' target='_blank' rel="noreferrer" style={{ color: 'white' }}>
                            Digital Owernship Agreement
                        </a>
                        <a href='https://gateway.pinata.cloud/ipfs/Qmc99JojFeLECRoNHS9oCTmQfXqq5JgWFEjjApUAknem3e?filename=Internal_%2520Legal%2520Digital%2520Service%2520Agreement.pdf' target='_blank' rel="noreferrer" style={{ color: 'white' }}>
                            Digital Service Agreement
                        </a>
                        <a href='https://gateway.pinata.cloud/ipfs/QmR86gh1EvxVpdzMBCQQyKSTib2wmCZbjtLCR5R8TF3rg2?filename=Internal_%2520Legal%2520Privacy%2520Agreement%2520June%25202022%2520v0.5.pdf' target='_blank' rel="noreferrer" style={{ color: 'white' }}>
                            Privacy Agreement
                        </a>
                        <a href='https://gateway.pinata.cloud/ipfs/QmbVCq4RMSWxqpqbVGd33pmU4UQLjnQpStKFxn4mzza9i6?filename=Internal_%2520Terms%2520of%2520Use%2520June%25202022%2520v0.5.pdf' target='_blank' rel="noreferrer" style={{ color: 'white' }}>
                            Website Terms of Use
                        </a>
                    </div>
                </Row>
            </Container>
        </FooterWrapper>
    )
}


const FooterWrapper = styled.footer`
width:100%;
    color:white;
    background-color:#0c0b0be0;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
`