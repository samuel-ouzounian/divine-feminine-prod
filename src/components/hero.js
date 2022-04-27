import { Container } from "./container";
import styled from 'styled-components';
import { Uppercase } from "../utillities/uppercase";
import { HeadingSupper } from "./layout";
import './hero.css'

export default function Hero() {
    return (
        <HeroWrapper>
            <Container style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap', padding:'0px', width:'100%', marginTop: '70px'}}>
                <HeadingSupper className="wow zoomInUp">
                    {

                        Uppercase("The Divine Feminine")
                    }

                </HeadingSupper>
            </Container>
            <div className="wow zoomInUp" style={{marginLeft:'auto', marginRight:'auto'}}>
                <a href="/PreMint">
                    <button className="pre-mint-button"><h1>Pre-Mint Reserve</h1></button>
                </a>
            </div>
        </HeroWrapper>
    )
}

const HeroWrapper = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
    color:white;
    height:910px;
    background-image:url(./image/hero.jpg);
    background-size:cover;
    background-position:center;
    width:100%;
`